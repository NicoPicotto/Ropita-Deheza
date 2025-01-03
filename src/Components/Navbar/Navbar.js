import React, { useState } from "react";
import {
   Stack,
   Image,
   Button,
   Link,
   StackDivider,
   useMediaQuery,
   useDisclosure,
   Drawer,
   DrawerBody,
   DrawerOverlay,
   DrawerContent,
} from "@chakra-ui/react";
import { useAuth } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { FaTshirt, FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdAssignment, MdQuestionAnswer } from "react-icons/md";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { Link as ReachLink } from "react-router-dom";
import logo2 from "../../logo2.png";
const Navbar = () => {
   const { logout, user, userUid } = useAuth();
   const navigate = useNavigate();
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   const { isOpen, onOpen, onClose } = useDisclosure();

   //Fución para cerrar la sesión.
   const handleLogout = async () => {
      onClose();
      try {
         await logout();
         navigate("/");
      } catch (e) {
         console.log("Logout");
      }
   };

   //Función para cambiar el color cuando scrolleamos
   const [colorChange, setColorchange] = useState(false);
   const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
         setColorchange(true);
      } else {
         setColorchange(false);
      }
   };
   window.addEventListener("scroll", changeNavbarColor);

   return (
      <Stack
         h={colorChange ? "50px" : "75px"}
         transition='0.3s'
         bgColor='segundo'
         justify='center'
         align='center'
         zIndex={100}
         pos='sticky'
         top={0}
      >
         <Stack
            direction='row'
            justify='space-between'
            align='center'
            maxW='75rem'
            w='100%'
         >
            <Link as={ReachLink} to='/'>
               <Image
                  src={logo2}
                  w={colorChange ? "150px" : "200px"}
                  objectFit='contain'
                  transition='0.3s'
               />
            </Link>

            {isMobile ? (
               <>
                  <Button onClick={onOpen} bgColor='transparent' size='lg'>
                     <FiMenu color='white' />
                  </Button>
                  <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
                     <DrawerOverlay />
                     <DrawerContent>
                        <DrawerBody>
                           {user ? (
                              <Stack
                                 direction='column'
                                 divider={<StackDivider />}
                                 spacing={3}
                                 paddingBlock={5}
                                 align='center'
                              >
                                 <Link as={ReachLink} to='/'>
                                    <Image
                                       src={logo2}
                                       w={colorChange ? "150px" : "200px"}
                                       objectFit='contain'
                                       transition='0.3s'
                                       onClick={onClose}
                                    />
                                 </Link>
                                 <Link as={ReachLink} to={"/"} _hover={{}}>
                                    <Button
                                       leftIcon={<FaHome />}
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                    >
                                       Inicio
                                    </Button>
                                 </Link>
                                 <Link as={ReachLink} to={"/nuevo"} _hover={{}}>
                                    <Button
                                       leftIcon={<FaTshirt />}
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                    >
                                       Agregar
                                    </Button>
                                 </Link>
                                 <Link
                                    as={ReachLink}
                                    to={`/usuario/${userUid}`}
                                    _hover={{}}
                                 >
                                    <Button
                                       leftIcon={<BsPersonFill />}
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                    >
                                       Perfil
                                    </Button>
                                 </Link>
                                 <Link as={ReachLink} to='tutorial' _hover={{}}>
                                    <Button
                                       leftIcon={<MdQuestionAnswer />}
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                    >
                                       Tutorial
                                    </Button>
                                 </Link>
                                 <Button
                                    leftIcon={<GoSignOut />}
                                    size='sm'
                                    variant='link'
                                    color='segundo'
                                    onClick={handleLogout}
                                 >
                                    Cerrar sesión
                                 </Button>
                              </Stack>
                           ) : (
                              <Stack
                                 direction='column'
                                 divider={<StackDivider />}
                                 spacing={3}
                                 paddingBlock={5}
                                 align='center'
                              >
                                 <Link as={ReachLink} to='/'>
                                    <Image
                                       src={logo2}
                                       w={colorChange ? "150px" : "200px"}
                                       objectFit='contain'
                                       transition='0.3s'
                                       onClick={onClose}
                                    />
                                 </Link>
                                 <Link as={ReachLink} to='/' _hover={{}}>
                                    <Button
                                       leftIcon={<FaHome />}
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                    >
                                       Inicio
                                    </Button>
                                 </Link>
                                 <Link as={ReachLink} to='tutorial' _hover={{}}>
                                    <Button
                                       leftIcon={<MdQuestionAnswer />}
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                    >
                                       Tutorial
                                    </Button>
                                 </Link>
                                 <Link as={ReachLink} to={"/login"} _hover={{}}>
                                    <Button
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       leftIcon={<GoSignIn />}
                                       onClick={onClose}
                                    >
                                       Iniciá sesión
                                    </Button>
                                 </Link>
                                 <Link
                                    as={ReachLink}
                                    to={"/register"}
                                    _hover={{}}
                                 >
                                    <Button
                                       size='sm'
                                       variant='link'
                                       color='segundo'
                                       onClick={onClose}
                                       leftIcon={<MdAssignment />}
                                    >
                                       Registrate
                                    </Button>
                                 </Link>
                              </Stack>
                           )}
                        </DrawerBody>
                     </DrawerContent>
                  </Drawer>
               </>
            ) : (
               <Stack direction='row'>
                  {user ? (
                     <Stack
                        direction='row'
                        divider={<StackDivider />}
                        spacing={3}
                     >
                        <Link as={ReachLink} to='/' _hover={{}}>
                           <Button
                              leftIcon={<FaHome />}
                              size='sm'
                              variant='link'
                              color='white'
                              onClick={onClose}
                           >
                              Inicio
                           </Button>
                        </Link>
                        <Link as={ReachLink} to={"/nuevo"} _hover={{}}>
                           <Button
                              leftIcon={<FaTshirt />}
                              size='sm'
                              variant='link'
                              color='white'
                           >
                              Agregar
                           </Button>
                        </Link>
                        <Link
                           as={ReachLink}
                           to={`/usuario/${userUid}`}
                           _hover={{}}
                        >
                           <Button
                              leftIcon={<BsPersonFill />}
                              size='sm'
                              variant='link'
                              color='white'
                           >
                              Perfil
                           </Button>
                        </Link>
                        <Link as={ReachLink} to='tutorial' _hover={{}}>
                           <Button
                              leftIcon={<MdQuestionAnswer />}
                              size='sm'
                              variant='link'
                              color='white'
                              onClick={onClose}
                           >
                              Tutorial
                           </Button>
                        </Link>
                        <Button
                           leftIcon={<GoSignOut />}
                           size='sm'
                           variant='link'
                           color='white'
                           onClick={handleLogout}
                        >
                           Cerrar sesión
                        </Button>
                     </Stack>
                  ) : (
                     <Stack
                        direction='row'
                        divider={<StackDivider />}
                        spacing={3}
                     >
                        <Link as={ReachLink} to='/' _hover={{}}>
                           <Button
                              leftIcon={<FaHome />}
                              size='sm'
                              variant='link'
                              color='white'
                              onClick={onClose}
                           >
                              Inicio
                           </Button>
                        </Link>
                        <Link as={ReachLink} to='tutorial' _hover={{}}>
                           <Button
                              leftIcon={<MdQuestionAnswer />}
                              size='sm'
                              variant='link'
                              color='white'
                              onClick={onClose}
                           >
                              Tutorial
                           </Button>
                        </Link>
                        <Link as={ReachLink} to={"/login"} _hover={{}}>
                           <Button
                              size='sm'
                              variant='link'
                              color='white'
                              leftIcon={<GoSignIn />}
                           >
                              Iniciá sesión
                           </Button>
                        </Link>
                        <Link as={ReachLink} to={"/register"} _hover={{}}>
                           <Button
                              size='sm'
                              variant='link'
                              color='white'
                              leftIcon={<MdAssignment />}
                           >
                              Registrate
                           </Button>
                        </Link>
                     </Stack>
                  )}
               </Stack>
            )}
         </Stack>
      </Stack>
   );
};

export default Navbar;
