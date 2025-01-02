import React from "react";
import { Stack, useMediaQuery } from "@chakra-ui/react";
import Detalle from "../Components/Productos/Detalle";

const ProductoView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   return (
      <Stack
         bgColor='fondo'
         justify='center'
         spacing={5}
         align='center'
         paddingBlock='50px'
         p={isMobile && 5}
      >
         <Detalle />
      </Stack>
   );
};

export default ProductoView;
