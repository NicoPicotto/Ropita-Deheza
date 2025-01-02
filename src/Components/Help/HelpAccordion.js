import React from "react";
import {
   Stack,
   Accordion,
   Heading,
   Divider,
   useMediaQuery,
} from "@chakra-ui/react";
import HelpItems from "./HelpItems";

const HelpAccordion = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   const helpText = [
      {
         titulo: "¿Debo registrarme para publicar un producto?",
         texto: "Sí. Es necesario tener una cuenta y brindar datos básicos de contacto para generar seguridad y respondabilidad a la hora de publicar un producto.",
      },
      {
         titulo: "¿Debo registrarme para comprar/pedir un producto?",
         texto: "No. El proceso de compra/adquisición no necesita un inicio de sesión ni datos de contacto ya que se concreta vía Whatsapp directamente con el propietario.",
      },
      {
         titulo: "¿Que sucede luego de que publico un producto?",
         texto: '	El producto estará visible para todo el mundo al igual que tu nombre y teléfono. En caso de existir un interesado/a, éste se contactará				vía Whatsapp para concretar la entrega y el pago (si lo hubiese). Si la compra se concreta, recordá eliminarlo desde la sección "Perfil -				Mis productos" para que ya no aparezca como disponible.',
      },
      {
         titulo: "Ya entregué mi producto ¿Ahora qué?",
         texto: 'Si la entrega se concretó con éxito, recordá eliminarlo desde la sección "Perfil - Mis productos" para que ya no aparezca como	disponible.',
      },
      {
         titulo: "Quiero regalar una prenda, no venderla ¿Cómo hago?",
         texto: 'Publicás el producto con normalidad desde la sección "Agregar", pero a la hora de indicar el precio colocás "0" (cero).',
      },
      {
         titulo: "Cambié mi número de teléfono ¿Qué hago?",
         texto: 'En la sección "Perfil" vas a poder actualizar tus datos personales. Recordá que el número siempre debe tener el código del país (Ej: +549358200300)',
      },
      {
         titulo: "Tuve un problema con otro usuario ¿Qué hago?",
         texto: "En ese caso envianos un correo a info@nocuelgues.com detallando el inconveniente y nos pondremos en contacto.",
      },
   ];

   return (
      <Stack
         align='center'
         maxW='75rem'
         bgColor='white'
         borderRadius={5}
         p={5}
         shadow='md'
      >
         <Stack w='100%' align='center'>
            <Heading
               size='lg'
               color='segundo'
               fontFamily='fonts.heading'
               fontWeight='regular'
            >
               Preguntas frecuentes
            </Heading>
            <Divider borderColor='cuarto' />
         </Stack>
         <Accordion allowToggle w='100%'>
            {helpText.map((help) => (
               <HelpItems
                  key={help.titulo}
                  titulo={help.titulo}
                  texto={help.texto}
               />
            ))}
         </Accordion>
      </Stack>
   );
};

export default HelpAccordion;
