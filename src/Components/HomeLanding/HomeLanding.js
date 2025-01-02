import React from "react";
import {
   Stack,
   Heading,
   Highlight,
   Button,
   Image,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { FaSyncAlt } from "react-icons/fa";
import landingHome from "../../assets/landingHome.svg";

const HomeLanding = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack
         w='100%'
         h={isMobile ? "2xs" : "md"}
         justify='center'
         align='center'
         bgColor='segundo'
      >
         <Stack
            maxW='75rem'
            direction={isMobile ? "column-reverse" : "row"}
            align='center'
            h={isMobile && "100%"}
            justify='space-between'
         >
            <Stack
               w={isMobile ? "90%" : "45%"}
               h='100%'
               justify='center'
               align={isMobile && "center"}
               spacing={5}
            >
               <Heading
                  color='fondo'
                  size={isMobile ? "lg" : "xl"}
                  fontFamily='fonts.heading'
                  fontWeight='regular'
                  textAlign={isMobile && "center"}
               >
                  <Highlight
                     query={["vender", "regalar"]}
                     styles={{
                        color: "cuarto",
                        fontFamily: "fonts.heading",
                        fontWeight: "regular",
                     }}
                  >
                     No dejes colgado en tu placard lo que podés vender o
                     regalar hoy.
                  </Highlight>
               </Heading>
               <Link to='vistaProductos' smooth={true}>
                  <Button
                     w='fit-content'
                     leftIcon={<FaSyncAlt />}
                     bgColor='cuarto'
                     color='white'
                     size={isMobile ? "sm" : "md"}
                     fontFamily='fonts.body'
                     _hover={{ bgColor: "primero" }}
                  >
                     Sumate a la moda circular
                  </Button>
               </Link>
            </Stack>
            <Stack
               w='40%'
               h='100%'
               display={isMobile && "none"}
               justify='center'
            >
               {/* {View} */}
               <Image src={landingHome} />
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HomeLanding;
