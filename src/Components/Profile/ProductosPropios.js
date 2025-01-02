import React, { useState, useEffect } from "react";
import {
   Stack,
   Heading,
   Divider,
   useToast,
   useMediaQuery,
} from "@chakra-ui/react";
import {
   query,
   doc,
   deleteDoc,
   where,
   getDocs,
   collection,
} from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { firestore } from "../../firebase";
import ItemsProductosPersonales from "./ItemsProductosPersonales";

const ProductosPropios = () => {
   const [productosPersonales, setProductosPersonales] = useState([]);
   const paramsID = useParams();
   const toast = useToast();
   const navigate = useNavigate();
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   useEffect(() => {
      const getProductos = async () => {
         const docs = [];
         const q = query(
            collection(firestore, "productos"),
            where("uid", "==", paramsID.id)
         );
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
         });
         setProductosPersonales(docs);
      };
      getProductos();
   }, [paramsID]);

   const handleDelete = async (id) => {
      await deleteDoc(doc(firestore, "productos", id));

      toast({
         title: "¡Producto eliminado!",
         status: "error",
         duration: 7000,
         isClosable: true,
         variant: "top-accent",
         position: "top",
      });

      navigate("/");
   };

   return (
      <Stack borderRadius={5} as='form' w='100%'>
         <Stack>
            <Heading
               size={isMobile ? "md" : "lg"}
               color='segundo'
               textAlign='center'
               fontFamily='fonts.heading'
               fontWeight='regular'
            >
               Tus productos
            </Heading>
            <Divider borderColor='cuarto' />
         </Stack>

         <Stack overflowY='auto' p={1}>
            {productosPersonales.length !== 0 ? (
               productosPersonales.map((prod) => (
                  <ItemsProductosPersonales
                     key={prod.id}
                     titulo={prod.titulo}
                     precio={prod.precio}
                     id={prod.id}
                     thumbnail={prod.imagen[0]}
                     handleDelete={handleDelete}
                  />
               ))
            ) : (
               <Stack w='100%' align='center' justify='center'>
                  <Heading size='xs' textAlign='center' color='cuarto'>
                     Aún no tenés productos agregados.
                  </Heading>
               </Stack>
            )}
         </Stack>
      </Stack>
   );
};

export default ProductosPropios;
