import React from "react";
import { Stack, Heading, Divider, Text, useMediaQuery } from "@chakra-ui/react";

const ReglasView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   return (
      <Stack bgColor='fondo' align='center' justify='center' p={5}>
         <Stack p={5} maxW='75rem' bgColor='white' borderRadius={5} shadow='md'>
            <Heading
               fontFamily='fonts.heading'
               size='lg'
               color='segundo'
               fontWeight='regular'
            >
               Reglas del sitio
            </Heading>
            <Divider borderColor='cuarto' />
            <Stack spacing={2}>
               <Text as='b'>Términos y condiciones</Text>
               <Text>
                  ¡Bienvenidx a No Cuelgues! <br /> Estos términos y condiciones
                  describen las reglas y regulaciones para el uso del sitio web
                  de No Cuelgues, ubicado en https://nocuelgues.com.ar. <br />
                  Al acceder a este sitio web, asumimos que aceptas estos
                  términos y condiciones. No continúes usando No Cuelgues si no
                  estás de acuerdo con todos los términos y condiciones
                  establecidos en esta página.
               </Text>
               <Text as='b'>Cookies</Text>
               <Text>
                  El sitio web utiliza cookies para ayudar a personalizar tu
                  experiencia en línea. Al acceder a No Cuelgues, aceptaste
                  utilizar las cookies necesarias. <br />
                  Una cookie es un archivo de texto que un servidor de páginas
                  web coloca en tu disco duro. Las cookies no se pueden utilizar
                  para ejecutar programas o enviar virus a tu computadora. Las
                  cookies se te asignan de forma exclusiva y solo un servidor
                  web en el dominio que emitió la cookie puede leerlas.
                  <br />
                  Podemos utilizar cookies para recopilar, almacenar y rastrear
                  información con fines estadísticos o de marketing para operar
                  nuestro sitio web. Tienes la capacidad de aceptar o rechazar
                  cookies opcionales. Hay algunas cookies obligatorias que son
                  necesarias para el funcionamiento de nuestro sitio web. Estas
                  cookies no requieren tu consentimiento ya que siempre
                  funcionan.
               </Text>
               <Text as='b'>Licencia</Text>
               <Text>
                  A menos que se indique lo contrario, No Cuelgues y/o sus
                  licenciantes poseen los derechos de propiedad intelectual de
                  todo el material en No Cuelgues. Todos los derechos de
                  propiedad intelectual son reservados. Puedes acceder desde No
                  Cuelgues para tu uso personal sujeto a las restricciones
                  establecidas en estos términos y condiciones.
               </Text>
               <Text>
                  No debes: <br />
                  Copiar o volver a publicar material de No Cuelgues <br />
                  Vender, alquilar o sublicenciar material de No Cuelgues
                  <br />
                  Reproducir, duplicar o copiar material de No Cuelgues
                  <br /> Redistribuir contenido de No Cuelgues
                  <br /> Este acuerdo comenzará el fecha presente.
                  <br />
               </Text>
               <Text>
                  Partes de este sitio web ofrecen a los usuarios la oportunidad
                  de publicar e intercambiar opiniones e información en
                  determinadas áreas. No Cuelgues no filtra, edita, publica ni
                  revisa los comentarios antes de su presencia en el sitio web.
                  Los comentarios no reflejan los puntos de vista ni las
                  opiniones de No Cuelgues, sus agentes y/o afiliados. Los
                  comentarios reflejan los puntos de vista y opiniones de la
                  persona que publica. En la medida en que lo permitan las leyes
                  aplicables, No Cuelgues no será responsable de los comentarios
                  ni de ninguna responsabilidad, daños o gastos causados ​​o
                  sufridos como resultado de cualquier uso o publicación o
                  apariencia de comentarios en este sitio web. <br />
                  No Cuelgues se reserva el derecho de monitorear todas las
                  publicaciones y eliminar los que puedan considerarse
                  inapropiados, ofensivos o que incumplan estos Términos y
                  Condiciones.
               </Text>{" "}
               <Text>
                  {" "}
                  Garantizas y declaras que: <br />
                  Tienes derecho a publicar comentarios en nuestro sitio web y
                  tienes todas las licencias y consentimientos necesarios para
                  hacerlo;
                  <br /> Los comentarios no invaden ningún derecho de propiedad
                  intelectual, incluidos, entre otros, los derechos de autor,
                  patentes o marcas comerciales de terceros;
                  <br /> Los comentarios no contienen ningún material
                  difamatorio, calumnioso, ofensivo, indecente o ilegal de otro
                  modo, que sea una invasión de la privacidad.
                  <br /> Los comentarios no se utilizarán para solicitar o
                  promover negocios o actividades comerciales personalizadas o
                  presentes o actividades ilegales.
               </Text>{" "}
               <Text>
                  Por la presente, otorgas a No Cuelgues una licencia no
                  exclusiva para usar, reproducir, editar y autorizar a otros a
                  usar, reproducir y editar cualquiera de tus comentarios en
                  todas y cada una de las formas, formatos, o medios.
               </Text>
               <Text as='b'>Hipervínculos a nuestro contenido</Text>
               <Text>
                  Las siguientes organizaciones pueden vincularse a nuestro
                  sitio web sin aprobación previa por escrito:
               </Text>
               <Text>
                  Agencias gubernamentales; <br />
                  Motores de búsqueda; <br />
                  Organizaciones de noticias; <br />
                  Los distribuidores de directorios en línea pueden vincularse a
                  nuestro sitio web de la misma manera que hacen hipervínculos a
                  los sitios web de otras empresas que figuran en la lista;{" "}
                  <br /> y Empresas acreditadas en todo el sistema, excepto que
                  soliciten organizaciones sin fines de lucro, centros
                  comerciales de caridad y grupos de recaudación de fondos de
                  caridad que no pueden hacer hipervínculos a nuestro sitio web.
               </Text>
               <Text>
                  Estas organizaciones pueden enlazar a nuestra página de
                  inicio, a publicaciones o a otra información del sitio siempre
                  que el enlace: (a) no sea engañoso de ninguna manera; (b) no
                  implique falsamente patrocinio, respaldo o aprobación de la
                  parte vinculante y sus productos y/o servicios; y (c) encaja
                  en el contexto del sitio de la parte vinculante.
               </Text>
               <Text>
                  Podemos considerar y aprobar otras solicitudes de enlaces de
                  los siguientes tipos de organizaciones:
               </Text>
               <Text>
                  fuentes de información de consumidores y/o empresas comúnmente
                  conocidas; <br />
                  sitios de la comunidad .com; <br />
                  asociaciones u otros grupos que representan organizaciones
                  benéficas;
                  <br /> distribuidores de directorios en línea; portales de
                  Internet; <br />
                  firmas de contabilidad, derecho y consultoría; y instituciones
                  educativas y asociaciones comerciales.
               </Text>
               <Text>
                  Aprobaremos las solicitudes de enlace de estas organizaciones
                  si: (a) el enlace no nos haría vernos desfavorablemente a
                  nosotros mismos ni a nuestras empresas acreditadas; (b) la
                  organización no tiene registros negativos con nosotros; (c) el
                  beneficio para nosotros de la visibilidad del hipervínculo
                  compensa la ausencia de No Cuelgues; y (d) el enlace está en
                  el contexto de información general de recursos.
               </Text>
               <Text>
                  {" "}
                  Estas organizaciones pueden enlazar a nuestra página de inicio
                  siempre que el enlace: (a) no sea engañoso de ninguna manera;
                  (b) no implique falsamente patrocinio, respaldo o aprobación
                  de la parte vinculante y sus productos o servicios; y (c)
                  encaja en el contexto del sitio de la parte vinculante.
               </Text>
               <Text>
                  Si eres una de las organizaciones enumeradas en el párrafo 2 y
                  estás interesada en vincularte a nuestro sitio web, debes
                  informarnos enviando un correo electrónico a No Cuelgues.
                  Incluye tu nombre, el nombre de tu organización, la
                  información de contacto, así como la URL de tu sitio, una
                  lista de las URL desde las que tienes la intención de vincular
                  a nuestro sitio web y una lista de las URL de nuestro sitio a
                  las que te gustaría acceder. Espera 2-3 semanas para recibir
                  una respuesta.
               </Text>
               <Text>
                  Las organizaciones aprobadas pueden hacer hipervínculos a
                  nuestro sitio web de la siguiente manera:
               </Text>
               <Text>
                  Mediante el uso de nuestro nombre corporativo;
                  <br /> o Mediante el uso del localizador uniforme de recursos
                  al que se está vinculando;
                  <br /> o Usar cualquier otra descripción de nuestro sitio web
                  al que está vinculado que tenga sentido dentro del contexto y
                  formato del contenido en el sitio de la parte vinculante.{" "}
                  <br />
                  No se permitirá el uso del logotipo de No Cuelgues u otro
                  material gráfico para vincular sin un acuerdo de licencia de
                  marca comercial.
               </Text>
               <Text as='b'>Responsabilidad del contenido</Text>
               <Text>
                  No seremos responsables de ningún contenido que aparezca en tu
                  sitio web. Aceptas protegernos y defendernos contra todas las
                  reclamaciones que se presenten en tu sitio web. Ningún
                  enlace(s) debe aparecer en ningún sitio web que pueda
                  interpretarse como difamatorio, obsceno o criminal, o que
                  infrinja, de otra manera viole o defienda la infracción u otra
                  violación de los derechos de terceros.
               </Text>
               <Text as='b'>Reserva de derechos</Text>
               <Text>
                  Nos reservamos el derecho de solicitar que elimines todos los
                  enlaces o cualquier enlace en particular a nuestro sitio web.
                  Apruebas eliminar de inmediato todos los enlaces a nuestro
                  sitio web cuando se solicite. También nos reservamos el
                  derecho de modificar estos términos y condiciones y su
                  política de enlaces en cualquier momento. Al vincular
                  continuamente a nuestro sitio web, aceptas estar vinculado y
                  seguir estos términos y condiciones de vinculación.
               </Text>
               <Text as='b'>Eliminación de enlaces de nuestro sitio web</Text>
               <Text>
                  Si encuentras algún enlace en nuestro sitio que sea ofensivo
                  por cualquier motivo, puedes contactarnos e informarnos en
                  cualquier momento. Consideraremos las solicitudes para
                  eliminar enlaces, pero no estamos obligados a hacerlo ni a
                  responder directamente. No nos aseguramos de que la
                  información de este sitio web sea correcta. No garantizamos su
                  integridad o precisión, ni prometemos asegurarnos de que el
                  sitio web permanezca disponible o que el material en el sitio
                  se mantenga actualizado.
               </Text>
               <Text as='b'>Exención de responsabilidad</Text>
               <Text>
                  En la medida máxima permitida por la ley aplicable, excluimos
                  todas las representaciones, garantías y condiciones
                  relacionadas con nuestro sitio web y el uso de este. Nada en
                  este descargo de responsabilidad:
               </Text>
               <Text>
                  limitará o excluirá nuestra responsabilidad o la tuya por
                  muerte o lesiones personales; <br /> limitará o excluirá
                  nuestra responsabilidad o la tuya por fraude o tergiversación
                  fraudulenta; <br />
                  limitará cualquiera de nuestras responsabilidades o las tuyas
                  de cualquier manera que no esté permitida por la ley
                  aplicable; <br />o excluirá cualquiera de nuestras
                  responsabilidades o las tuyas que no puedan estar excluidas
                  según la ley aplicable.
               </Text>
               <Text>
                  Las limitaciones y prohibiciones de responsabilidad
                  establecidas en esta sección y en otras partes de este
                  descargo de responsabilidad: (a) están sujetas al párrafo
                  anterior; y (b) regirá todas las responsabilidades que surjan
                  en virtud de la exención de responsabilidad, incluidas las
                  responsabilidades que surjan en el contrato, en agravio y por
                  incumplimiento de la obligación legal.
               </Text>
               <Text>
                  Siempre que el sitio web y la información y los servicios en
                  el sitio se proporcionen de forma gratuita, no seremos
                  responsables de ninguna pérdida o daño de cualquier
                  naturaleza.
               </Text>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default ReglasView;
