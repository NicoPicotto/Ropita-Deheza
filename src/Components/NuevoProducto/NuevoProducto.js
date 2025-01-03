import React, { useState, useEffect, useRef } from "react";
import {
   Heading,
   Stack,
   Input,
   Button,
   Textarea,
   Tooltip,
   Divider,
   useToast,
   Spinner,
   Text,
   FormLabel,
   useMediaQuery,
   Select,
   Progress,
   Image,
   AspectRatio,
   SimpleGrid,
} from "@chakra-ui/react";
import {
   collection,
   addDoc,
   serverTimestamp,
   doc,
   getDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useAuth } from "../../Context/Context";
import { BsImageFill } from "react-icons/bs";
import { firestore } from "../../firebase";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const NuevoProducto = () => {
   const { userUid } = useAuth();
   const navigate = useNavigate();
   const [datosPersonales, setDatosPersonales] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [imageUpload, setImageUpload] = useState([]);
   const [loadingImg, setLoadingImg] = useState(false);
   const [imagenCargada, setImagenCargada] = useState(false);
   const [progress, setProgress] = useState(0);
   const [URLs, setURLs] = useState([]);
   const [imageShow, setImageShow] = useState("");
   const [imageOrder, setImageOrder] = useState(0);
   const toast = useToast();
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   //Traer los datos del usuario logeado para pasarlos al producto
   useEffect(() => {
      const getEntrada = async () => {
         const docRef = doc(firestore, "usuarios", userUid);
         const docSnap = await getDoc(docRef);

         if (docSnap.exists()) {
            setDatosPersonales(docSnap.data());
         } else {
            console.log("Error al traer los datos del usuario");
         }
      };
      getEntrada();
   }, [userUid]);

   //Refs para los inputs
   const tituloRef = useRef();
   const descripcionRef = useRef();
   const talleRef = useRef();
   const precioRef = useRef();
   const categoriaRef = useRef();

   //Función para subir imagenes al storage
   const uploadImage = () => {
      const filesArray = Array.from(imageUpload);
      const promises = [];
      filesArray.forEach((file) => {
         const sotrageRef = ref(storage, `productos/${file.name + v4()}`);

         const uploadTask = uploadBytesResumable(sotrageRef, file);
         promises.push(uploadTask);
         uploadTask.on(
            "state_changed",
            (snapshot) => {
               const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               ); // update progress
               setLoadingImg(true);
               setProgress(percent);
            },
            (error) => console.log(error),
            async () => {
               await getDownloadURL(uploadTask.snapshot.ref).then(
                  (downloadURLs) => {
                     setURLs((prevState) => [...prevState, downloadURLs]);
                     setImageShow(downloadURLs);
                  }
               );
            }
         );
      });
      Promise.all(promises).then((err) => console.log(err));
      setImagenCargada(true);
      setLoadingImg(false);
   };

   //Función para publicar el producto
   const handleSubmit = async (e) => {
      setIsLoading(true);
      e.preventDefault();
      if (
         tituloRef &&
         descripcionRef &&
         descripcionRef &&
         talleRef &&
         precioRef !== ""
      ) {
         await addDoc(collection(firestore, "productos"), {
            titulo: tituloRef.current.value,
            descripcion: descripcionRef.current.value,
            imagen: URLs,
            talle: talleRef.current.value,
            precio: precioRef.current.value,
            categoria: categoriaRef.current.value,
            uid: userUid,
            nombre: datosPersonales.nombre,
            apellido: datosPersonales.apellido,
            telefono: datosPersonales.telefono,
            fecha: serverTimestamp(),
         });

         toast({
            title: "¡Producto publicado! 😎",
            status: "success",
            duration: 7000,
            isClosable: true,
            variant: "top-accent",
            position: "top",
         });
         setIsLoading(false);
         navigate("/");
      } else {
         setIsLoading(false);
         toast({
            title: "Tenés campos sin completar.",
            status: "error",
            duration: 7000,
            isClosable: true,
            variant: "top-accent",
            position: "top",
         });
      }
   };

   return (
      <Stack
         onSubmit={handleSubmit}
         align='center'
         maxW='75rem'
         w='100%'
         bgColor='white'
         borderRadius={5}
         p={5}
         shadow='md'
         justify='space-between'
         as='form'
      >
         <Stack w='100%' align='center'>
            <Heading
               size={isMobile ? "md" : "lg"}
               color='segundo'
               fontFamily='fonts.heading'
               fontWeight='regular'
               overflow='hidden'
            >
               Agregar producto
            </Heading>
            <Divider borderColor='cuarto' />
         </Stack>
         <SimpleGrid minH='30rem' spacing={5} columns={isMobile ? 1 : 2}>
            <Stack
               bgColor='fondo'
               borderRadius={10}
               overflow='hidden'
               align='center'
               justify='center'
               p={!imagenCargada && 5}
            >
               {imageShow ? (
                  <Swiper
                     direction={"horizontal"}
                     slidesPerView={1}
                     spaceBetween={0}
                     mousewheel={true}
                     grabCursor={true}
                     className='mySwiper'
                     navigation={true}
                     modules={[Navigation]}
                  >
                     {URLs.map((data, index) => (
                        <SwiperSlide key={index}>
                           <Stack minH='30rem' h='30rem'>
                              <Image h='100%' objectFit='cover' src={data} />
                           </Stack>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               ) : (
                  <Stack
                     w='100%'
                     align='center'
                     justify='center'
                     border='dashed 2px lightgray'
                     borderRadius={5}
                     h='100%'
                  >
                     <FormLabel
                        display='flex'
                        flexDir='column'
                        cursor='pointer'
                        alignItems='center'
                        justifyContent='center'
                        color='gray'
                     >
                        <BsImageFill size='30%' />
                        <Input
                           type='file'
                           display='none'
                           id='fileInput'
                           variant='unstyled'
                           accept='image/png, image/jpg, image/gif, image/jpeg, image/webp'
                           multiple
                           onChange={(e) => {
                              setImageUpload(e.target.files);
                           }}
                        />
                        <Text fontSize='md' as='b' textAlign='center'>
                           Cargar Imágenes
                        </Text>
                        <Text fontSize='xs' textAlign='center'>
                           Máximo 3 imágenes por producto.
                        </Text>
                     </FormLabel>
                     {imageUpload.length <= 3 && imageUpload.length > 0 && (
                        <Stack w='80%' justify='center' align='center'>
                           {progress === 0 ? (
                              <Text fontSize='xs'>
                                 {imageUpload.length} selecionada(s)
                              </Text>
                           ) : (
                              <Progress
                                 w='80%'
                                 colorScheme='whatsapp'
                                 value={progress}
                              />
                           )}

                           <Button
                              onClick={uploadImage}
                              bgColor='segundo'
                              color='white'
                              _hover={{ bgColor: "cuarto" }}
                              size={isMobile ? "sm" : "md"}
                           >
                              {loadingImg ? <Spinner /> : "Subir imágenes"}
                           </Button>
                        </Stack>
                     )}
                     {imageUpload.length > 3 && (
                        <Text fontSize='xs' textAlign='center' color='red'>
                           Máximo 3 imágenes por producto.
                        </Text>
                     )}
                  </Stack>
               )}
            </Stack>
            <Stack h='100%' justify='space-between'>
               <Stack>
                  <Input
                     variant='outline'
                     size={isMobile ? "sm" : "md"}
                     ref={tituloRef}
                     placeholder='Título del producto. Ej: Remera lisa.'
                     focusBorderColor='cuarto'
                     isRequired
                  />
               </Stack>
               <Stack flex={1}>
                  <Textarea
                     h='100%'
                     size={isMobile ? "sm" : "md"}
                     ref={descripcionRef}
                     variant='outline'
                     placeholder='Descripción del producto. Ej: Color, tamaño, estado, detalles, etc.'
                     focusBorderColor='cuarto'
                     isRequired
                  />
               </Stack>
               <Stack direction='row'>
                  <Select
                     variant='outline'
                     ref={categoriaRef}
                     size={isMobile ? "sm" : "md"}
                     w='40%'
                     focusBorderColor='cuarto'
                     placeholder='Categoría'
                     isRequired
                  >
                     <option value='Remeras'>Remeras</option>
                     <option value='Chombas'>Chombas</option>
                     <option value='Camisas'>Camisas</option>
                     <option value='Buzos'>Buzos</option>
                     <option value='Camperas'>Camperas</option>
                     <option value='Pantalones'>Pantalones</option>
                     <option value='Bermudas'>Bermudas</option>
                     <option value='Shorts<'>Shorts</option>
                     <option value='Vestidos'>Vestidos</option>
                     <option value='Ropa interior'>Ropa interior</option>
                     <option value='Accesorios'>Accesorios</option>
                     <option value='Calzado'>Calzado</option>
                  </Select>
                  <Tooltip
                     label='Si lo que estás publicando no tiene talle, colocale "UNICO". Ej: Una gorra.'
                     bgColor='tercero'
                     color='white'
                     placement={isMobile ? "top" : "left"}
                  >
                     <Input
                        variant='outline'
                        ref={talleRef}
                        size={isMobile ? "sm" : "md"}
                        w='30%'
                        focusBorderColor='cuarto'
                        placeholder='Talle'
                        textTransform='uppercase'
                        isRequired
                     />
                  </Tooltip>
                  <Tooltip
                     label='Recordá que si tu intención es regalarlo, podés ponerle $0'
                     bgColor='tercero'
                     color='white'
                     placement={isMobile ? "top" : "right"}
                  >
                     <Input
                        variant='outline'
                        placeholder='$0'
                        size={isMobile ? "sm" : "md"}
                        ref={precioRef}
                        w='30%'
                        focusBorderColor='cuarto'
                        type='number'
                        isRequired
                     />
                  </Tooltip>
               </Stack>
               <Stack>
                  <Tooltip
                     label='¡Atención! Estás a punto de publicar un producto. Esto implica que, al entrar al producto, las personas podrán ver tu nombre y número telefónico para contactarte.'
                     bgColor='tercero'
                     placement={isMobile ? "top" : "right"}
                  >
                     <Button
                        bgColor='segundo'
                        type='submit'
                        color='white'
                        _hover={{ bgColor: "cuarto" }}
                     >
                        {isLoading ? (
                           <Spinner color='white' />
                        ) : (
                           "Publicar producto"
                        )}
                     </Button>
                  </Tooltip>
               </Stack>
            </Stack>
         </SimpleGrid>
      </Stack>
   );
};

export default NuevoProducto;
