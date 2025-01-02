import React from "react";
import {
   Stack,
   StackDivider,
   Link,
   Button,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Profile from "../Components/Profile/Profile";
import ProductosPropios from "../Components/Profile/ProductosPropios";
import { IoMdHelpCircle } from "react-icons/io";

const ProfileView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   return (
      <Stack
         bgColor='fondo'
         paddingBlock='50px'
         align='center'
         paddingBottom='75px'
         w='100%'
      >
         <Stack maxW='75rem' w='100%'>
            <Stack
               bgColor='white'
               divider={<StackDivider />}
               direction='column'
               borderRadius={5}
               p={5}
               shadow='md'
            >
               <Profile />
            </Stack>
            <Stack
               bgColor='white'
               divider={<StackDivider />}
               direction={isMobile ? "column" : "row"}
               borderRadius={5}
               p={5}
               shadow='md'
            >
               <ProductosPropios />
            </Stack>
         </Stack>

         <Link as={ReachLink} to='/ayuda' marginBottom={isMobile && "75px"}>
            <Button leftIcon={<IoMdHelpCircle />} variant='link'>
               Necesito ayuda
            </Button>
         </Link>
      </Stack>
   );
};

export default ProfileView;
