import React from "react";
import { Stack, useMediaQuery } from "@chakra-ui/react";
import NuevoProducto from "../Components/NuevoProducto/NuevoProducto";
import Aclaraciones from "../Components/NuevoProducto/Aclaraciones";

const AgregarProductoView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack
         bgColor='fondo'
         justify='center'
         paddingBlock='50px'
         align='center'
      >
         <NuevoProducto />
         <Aclaraciones />
      </Stack>
   );
};

export default AgregarProductoView;
