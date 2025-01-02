import React from "react";
import {
   Stack,
   Text,
   useMediaQuery,
   StackDivider,
   Icon,
} from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSyncCircleSharp } from "react-icons/io5";
import { MdLabelOff } from "react-icons/md";

const Aclaraciones = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack
         maxW='75rem'
         divider={<StackDivider borderColor='cuarto' />}
         justify='center'
         direction={isMobile ? "column" : "row"}
         align='center'
      >
         <Stack
            justify='center'
            direction='row'
            p={2}
            align='center'
            overflow='hidden'
         >
            <Icon
               as={MdLabelOff}
               fontSize={isMobile ? "4xl" : "6xl"}
               color='segundo'
            />
            <Text fontSize='xs' color='tercero'>
               Los productos deben ser si o si de segunda mano. La plataforma no
               debe utilizarse para comercializar productos nuevos.
            </Text>
         </Stack>
         <Stack
            align='center'
            justify='center'
            direction='row'
            p={2}
            overflow='hidden'
         >
            <Icon
               as={IoSyncCircleSharp}
               fontSize={isMobile ? "4xl" : "6xl"}
               color='segundo'
            />
            <Text fontSize='xs' color='tercero'>
               El objetivo es promover la moda circular. Podés vender tu prenda
               o también regarlarla poniéndole precio $0.
            </Text>
         </Stack>
         <Stack
            align='center'
            justify='center'
            direction='row'
            p={2}
            overflow='hidden'
         >
            <Icon
               as={IoLogoWhatsapp}
               fontSize={isMobile ? "4xl" : "6xl"}
               color='segundo'
            />
            <Text fontSize='xs' color='tercero'>
               En caso de haber un interesado, él o ella se contactará con vos
               vía Whatsapp para arreglar la entrega y el pago.
            </Text>
         </Stack>
      </Stack>
   );
};

export default Aclaraciones;
