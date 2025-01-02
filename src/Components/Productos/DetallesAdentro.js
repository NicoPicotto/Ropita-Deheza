import React, { useRef } from "react";
import {
   Stack,
   Divider,
   Text,
   Button,
   Heading,
   Image,
   Grid,
   GridItem,
   StackDivider,
   useMediaQuery,
   SimpleGrid,
   AspectRatio,
} from "@chakra-ui/react";

import { BsWhatsapp } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const DetallesAdentro = ({
   descripcion,
   fecha,
   nombre,
   precio,
   talle,
   telefono,
   titulo,
   imagen,
}) => {
   const swiperRef = useRef(null);
   const fechaFormateada = fecha.toDate().toLocaleDateString("es-ES");

   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   const handleThumbnailClick = (index) => {
      if (swiperRef.current && swiperRef.current.swiper) {
         swiperRef.current.swiper.slideTo(index);
      }
   };

   return (
      <Stack w='100%'>
         <Stack align='center' marginBottom={3}>
            <Heading
               size={isMobile ? "md" : "lg"}
               color='segundo'
               fontFamily='fonts.heading'
               fontWeight='regular'
               overflow='hidden'
            >
               Detalles del producto
            </Heading>
            <Divider borderColor='cuarto' />
         </Stack>
         <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={3}>
               <Stack>
                  <Swiper
                     ref={swiperRef}
                     direction={"horizontal"}
                     slidesPerView={1}
                     spaceBetween={0}
                     mousewheel={true}
                     grabCursor={true}
                     className='mySwiper'
                  >
                     {imagen.map((data, index) => (
                        <SwiperSlide key={index}>
                           <AspectRatio ratio={1}>
                              <Image aspectRatio={1} src={data} />
                           </AspectRatio>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <SimpleGrid columns='5' gap={2}>
                     {imagen.map((image, index) => (
                        <AspectRatio ratio={1} key={index}>
                           <Image
                              borderRadius={7}
                              outline='1px solid rgba(239, 239, 239, 1)'
                              src={image}
                              cursor='pointer'
                              onClick={() => handleThumbnailClick(index)}
                           />
                        </AspectRatio>
                     ))}
                  </SimpleGrid>
               </Stack>
            </GridItem>
            <GridItem colSpan={2} position='relative'>
               <Stack position='sticky' top='4rem'>
                  <Stack>
                     <Heading
                        color='tercero'
                        fontFamily='fonts.heading'
                        fontWeight='regular'
                        size='lg'
                        textOverflow='ellipsis'
                        overflow='hidden'
                        noOfLines={2}
                        textTransform='capitalize'
                     >
                        {titulo}
                     </Heading>
                  </Stack>
                  <Stack
                     divider={<StackDivider />}
                     direction='row'
                     align='center'
                  >
                     <Text color='segundo' fontSize='xl' as='b'>
                        $ {precio}
                     </Text>
                     <Text
                        color='tercero'
                        fontSize='md'
                        textTransform='uppercase'
                     >
                        Talle {talle}
                     </Text>
                  </Stack>
                  <Stack>
                     <Stack>
                        <Text fontSize={isMobile ? "xs" : "sm"}>
                           Publicado por{" "}
                           <Text
                              as='b'
                              fontSize={isMobile ? "xs" : "sm"}
                              color='segundo'
                           >
                              {nombre}{" "}
                           </Text>{" "}
                           el{" "}
                           <Text
                              as='b'
                              fontSize={isMobile ? "xs" : "sm"}
                              color='segundo'
                           >
                              {fechaFormateada}
                           </Text>
                           .
                        </Text>
                     </Stack>
                     <Button
                        as='a'
                        target='_blank'
                        leftIcon={<BsWhatsapp fontSize='18px' />}
                        colorScheme='whatsapp'
                        href={`https://wa.me/${telefono}?text=¡Hola! Me interesa tu producto ${titulo}.`}
                     >
                        Contactar a {nombre}
                     </Button>
                  </Stack>
                  <Stack flex={1} overflowY='auto' gap={0}>
                     <Text mb={-2} textTransform='uppercase' fontWeight='bold'>
                        Descripción
                     </Text>
                     <Text whiteSpace='pre-line'>{descripcion}</Text>
                  </Stack>
               </Stack>
            </GridItem>
         </Grid>
      </Stack>
   );
};

export default DetallesAdentro;
