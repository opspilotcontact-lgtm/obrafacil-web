export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-instalar-placas-spc-sin-obra',
    title: 'Cómo instalar placas decorativas SPC sin obra: guía paso a paso',
    excerpt:
      'Aprende a transformar tu baño o cocina en una tarde. Te explicamos el proceso completo de instalación de placas SPC sobre azulejo, sin necesidad de obra ni profesionales.',
    date: '2025-05-20',
    readTime: '8 min',
    category: 'Tutoriales',
    tags: ['instalación', 'SPC', 'sin obra', 'bricolaje', 'tutorial'],
    image: '/images/blog/instalar-placas-spc.jpg',
    content: `
      <p>Si estás pensando en renovar tu baño o cocina pero la idea de una reforma te echa para atrás, tenemos buenas noticias: <strong>las placas decorativas SPC se instalan directamente sobre el azulejo existente</strong>, sin necesidad de albañiles, escombros ni semanas de obra. En esta guía te explicamos cómo hacerlo tú mismo en una sola tarde.</p>

      <h2>¿Qué son las placas decorativas SPC?</h2>
      <p>Las placas SPC (Stone Plastic Composite) son paneles rígidos compuestos por un núcleo de piedra caliza y PVC. Son <strong>100% impermeables</strong>, resistentes al calor, no se deforman con la humedad y tienen un grosor de apenas 3-5 mm. Esto las convierte en la solución perfecta para cubrir azulejos antiguos sin añadir prácticamente volumen a la pared.</p>
      <p>A diferencia de los vinilos adhesivos, las placas SPC mantienen su forma y color durante años. No amarillean, no se despegan con el vapor del baño y son extremadamente fáciles de limpiar.</p>

      <h2>Materiales que vas a necesitar</h2>
      <p>Antes de empezar, asegúrate de tener a mano todo lo necesario:</p>
      <p><strong>Herramientas:</strong> metro o cinta métrica, lápiz, nivel de burbuja, sierra de calar o sierra circular con disco fino (también sirve una radial pequeña), pistola de silicona, espátula dentada (opcional) y trapo húmedo.</p>
      <p><strong>Materiales:</strong> placas SPC en la cantidad necesaria (calcula siempre un 10% de margen por recortes), adhesivo de montaje tipo MS polímero o silicona neutra de alta adherencia, perfiles de remate en L o U para bordes y esquinas, y sellador de silicona transparente para juntas en zonas húmedas.</p>

      <h2>Paso 1: Preparar la superficie</h2>
      <p>La pared debe estar <strong>limpia, seca y libre de grasa</strong>. Si vas a instalar sobre azulejo, limpia bien las baldosas con un desengrasante. No hace falta quitar el azulejo: las placas SPC se adhieren perfectamente sobre cerámica, siempre que esté bien fijada a la pared.</p>
      <p>Comprueba que no haya baldosas sueltas o abombadas. Si encuentras alguna, retírala y rellena el hueco con masilla de reparación. La superficie no tiene que ser perfectamente lisa, pero sí estar estable.</p>

      <h2>Paso 2: Medir y planificar la colocación</h2>
      <p>Mide la superficie total a cubrir. Las placas SPC suelen venir en formatos de 60×120 cm o similares. <strong>Dibuja un esquema sencillo</strong> en papel para planificar cómo encajar las piezas y minimizar los recortes. Es recomendable empezar desde la esquina más visible de la estancia.</p>
      <p>Marca con lápiz y nivel la línea de la primera fila. Esta línea es crucial: si la primera placa está torcida, el resto del trabajo lo estará también.</p>

      <h2>Paso 3: Cortar las placas</h2>
      <p>Marca la línea de corte con lápiz y regla. Puedes cortar las placas SPC con una sierra de calar con hoja fina o con una radial pequeña con disco de corte. <strong>Usa siempre gafas y mascarilla de protección.</strong> El corte es limpio y genera poco polvo, pero más vale prevenir.</p>
      <p>Para recortes en L (esquinas de enchufes, grifos, etc.), haz primero los cortes rectos con la sierra y remata las esquinas interiores con una multiherramienta oscilante o un cúter de precisión.</p>

      <h2>Paso 4: Aplicar el adhesivo y colocar</h2>
      <p>Aplica cordones de adhesivo MS polímero en la parte trasera de la placa, en forma de zigzag o en líneas paralelas separadas unos 15 cm. <strong>No escatimes en adhesivo</strong>, especialmente en los bordes: es lo que va a mantener la placa pegada durante años.</p>
      <p>Coloca la placa en su posición, presiona con firmeza y ajústala antes de que el adhesivo comience a curar. Usa calzos o cuñas en la parte inferior para mantener una separación de 2-3 mm con el suelo (esta junta la taparás después con el perfil de remate).</p>

      <h2>Paso 5: Sellar juntas y rematar</h2>
      <p>Una vez colocadas todas las placas, aplica un cordón de silicona transparente en las juntas entre placas y en los encuentros con sanitarios, grifería y bordes. Instala los perfiles de remate en esquinas y bordes visibles. <strong>Limpia los restos de adhesivo</strong> con un trapo húmedo antes de que sequen.</p>
      <p>Deja secar el adhesivo entre 12 y 24 horas antes de usar la ducha o mojar directamente la zona instalada. Pasado ese tiempo, la instalación estará completamente operativa.</p>

      <h2>Errores comunes que debes evitar</h2>
      <p><strong>No nivelar la primera placa:</strong> si la primera fila no está a nivel, todo el trabajo quedará desalineado. Usa un nivel láser o de burbuja y tómate tu tiempo.</p>
      <p><strong>Usar silicona ácida:</strong> la silicona ácida (la que huele a vinagre) puede dañar ciertos materiales. Usa siempre silicona neutra o adhesivo MS polímero.</p>
      <p><strong>No dejar junta de dilatación:</strong> las placas SPC se dilatan mínimamente con el calor. Deja siempre 2-3 mm de separación en los bordes perimetrales.</p>

      <h2>Resultado final</h2>
      <p>En pocas horas tendrás una pared completamente renovada con un acabado profesional. Las placas SPC de ObraFácil imitan materiales como el mármol, la piedra natural o el cemento con un realismo impresionante. Y lo mejor: <strong>sin escombros, sin ruido excesivo y sin esperar semanas</strong> a que termine la obra.</p>
    `,
  },
  {
    slug: 'spc-vs-ceramica-vs-pintura',
    title: 'SPC vs cerámica vs pintura: ¿qué revestimiento elegir para tu reforma?',
    excerpt:
      'Comparamos precio, durabilidad, instalación y mantenimiento de los tres revestimientos más populares para baños y cocinas. Descubre cuál se adapta mejor a tu proyecto.',
    date: '2025-04-15',
    readTime: '6 min',
    category: 'Comparativas',
    tags: ['comparativa', 'SPC', 'cerámica', 'pintura', 'revestimientos'],
    image: '/images/blog/spc-vs-ceramica-vs-pintura.jpg',
    content: `
      <p>Cuando llega el momento de reformar un baño o una cocina, la primera gran decisión es el revestimiento de las paredes. Las opciones más habituales son la <strong>cerámica tradicional, la pintura específica para zonas húmedas y las placas decorativas SPC</strong>. Cada una tiene sus ventajas e inconvenientes, y la mejor elección depende de tu presupuesto, tu nivel de bricolaje y el resultado que buscas.</p>

      <h2>Cerámica: el clásico que nunca falla (pero que cuesta)</h2>
      <p>La cerámica lleva décadas siendo el revestimiento por excelencia en baños y cocinas. Es duradera, impermeable y existe en miles de diseños. Sin embargo, <strong>instalarla requiere obra completa</strong>: preparar la pared, aplicar cemento cola, colocar las piezas una a una, rejuntar y esperar los tiempos de secado.</p>
      <p><strong>Precio orientativo:</strong> entre 30 y 80 €/m² solo en material, más 20-40 €/m² de mano de obra profesional. Una reforma completa de un baño de 8 m² de pared puede superar fácilmente los 800-1.000 € contando mano de obra.</p>
      <p><strong>Tiempo de instalación:</strong> 3-5 días laborables como mínimo, contando preparación, colocación, rejuntado y secado.</p>
      <p><strong>Mantenimiento:</strong> las juntas de la cerámica acumulan humedad y suciedad con el tiempo. Hay que limpiarlas periódicamente con productos específicos y, en muchos casos, rejuntar cada ciertos años.</p>

      <h2>Pintura para zonas húmedas: barata pero limitada</h2>
      <p>Las pinturas antihumedad o para baños son la opción más económica. Se aplican con rodillo, secan rápido y permiten cambiar de color fácilmente. El problema es que <strong>su durabilidad en zonas de contacto directo con agua es limitada</strong>.</p>
      <p><strong>Precio orientativo:</strong> entre 8 y 15 €/m² en material (pintura de calidad). La mano de obra, si no lo haces tú, puede sumar 10-15 €/m² adicionales.</p>
      <p><strong>Tiempo de instalación:</strong> 1-2 días contando las dos manos de pintura y el secado entre capas.</p>
      <p><strong>Mantenimiento:</strong> en zonas expuestas al agua (dentro de la ducha, detrás del fregadero), la pintura tiende a descascarillarse o amarillear en 2-3 años. Requiere repintado periódico. No es la mejor opción para el interior de duchas o zonas de salpicadura constante.</p>

      <h2>Placas SPC: el equilibrio entre calidad y facilidad</h2>
      <p>Las placas decorativas SPC combinan lo mejor de ambos mundos: un <strong>acabado visual de alta gama</strong> (imitación mármol, piedra, cemento) con una instalación que no requiere obra. Se pegan directamente sobre el azulejo existente con adhesivo de montaje.</p>
      <p><strong>Precio orientativo:</strong> entre 25 y 50 €/m² en material. La instalación puedes hacerla tú mismo, así que el ahorro en mano de obra es total. Un baño completo puede quedar por 200-400 € en material.</p>
      <p><strong>Tiempo de instalación:</strong> 3-6 horas para un baño estándar. Sin tiempos de secado prolongados entre fases.</p>
      <p><strong>Mantenimiento:</strong> prácticamente nulo. Las placas SPC son impermeables, no tienen juntas porosas y se limpian con un paño húmedo. No amarillean ni se deforman con el calor o la humedad.</p>

      <h2>Tabla comparativa</h2>
      <p>Para que lo veas de un vistazo, aquí tienes un resumen de los tres revestimientos en los factores que más importan:</p>
      <p><strong>Precio por m² (material):</strong> Cerámica 30-80 € | Pintura 8-15 € | SPC 25-50 €</p>
      <p><strong>Necesita obra:</strong> Cerámica Sí | Pintura No | SPC No</p>
      <p><strong>Instalación DIY:</strong> Cerámica Difícil | Pintura Fácil | SPC Fácil</p>
      <p><strong>Durabilidad:</strong> Cerámica Alta | Pintura Media-baja | SPC Alta</p>
      <p><strong>Impermeabilidad:</strong> Cerámica Alta | Pintura Baja | SPC Total</p>
      <p><strong>Tiempo instalación:</strong> Cerámica 3-5 días | Pintura 1-2 días | SPC 3-6 horas</p>

      <h2>¿Cuándo elegir cada opción?</h2>
      <p><strong>Elige cerámica</strong> si estás haciendo una reforma integral desde cero (pared nueva), si buscas un diseño muy específico que solo existe en cerámica, o si el presupuesto no es un problema y prefieres un material que conoces.</p>
      <p><strong>Elige pintura</strong> si el presupuesto es muy ajustado, si la zona no recibe agua directamente (por ejemplo, la pared opuesta a la ducha) o si quieres una solución temporal mientras decides una reforma más ambiciosa.</p>
      <p><strong>Elige placas SPC</strong> si quieres un resultado de alta gama sin obra, si necesitas cubrir azulejos antiguos o deteriorados, si buscas una solución impermeable para dentro de la ducha, o si prefieres instalar tú mismo y ahorrarte la mano de obra.</p>

      <h2>Nuestra recomendación</h2>
      <p>En ObraFácil trabajamos con los tres tipos de materiales, pero cada vez más clientes optan por las placas SPC por una razón clara: <strong>ofrecen el mejor equilibrio entre calidad visual, facilidad de instalación y precio</strong>. Si quieres renovar tu baño o cocina sin complicaciones, las placas SPC son la opción más inteligente del mercado actual.</p>
    `,
  },
  {
    slug: 'tendencias-decoracion-banos-2025',
    title: 'Tendencias en decoración de baños para 2025: materiales, colores y estilos',
    excerpt:
      'Descubre las tendencias que están marcando la decoración de baños este año: tonos tierra, efecto piedra natural, minimalismo cálido y materiales sostenibles.',
    date: '2025-03-28',
    readTime: '5 min',
    category: 'Tendencias',
    tags: ['tendencias', 'decoración', 'baños', '2025', 'diseño interior'],
    image: '/images/blog/tendencias-banos-2025.jpg',
    content: `
      <p>El baño ha dejado de ser un espacio meramente funcional. En 2025, la tendencia es clara: <strong>convertir el baño en una zona de bienestar y descanso</strong>, con materiales naturales, colores cálidos y un diseño que invite a la calma. Te contamos las tendencias que están marcando la decoración de baños este año.</p>

      <h2>Tonos tierra y paletas neutras cálidas</h2>
      <p>Adiós al blanco clínico. Los baños de 2025 apuestan por <strong>paletas neutras con matices cálidos</strong>: beige arena, arcilla, terracota suave, greige (mezcla de gris y beige) y tonos tostados. Estos colores transmiten calidez y confort, y combinan perfectamente entre sí.</p>
      <p>La clave está en jugar con diferentes texturas dentro de la misma paleta. Por ejemplo, combinar un revestimiento efecto piedra arenisca con muebles de madera natural y grifería en acabado bronce o dorado mate. El resultado es un espacio sofisticado sin caer en lo recargado.</p>

      <h2>Efecto piedra natural: el gran protagonista</h2>
      <p>Los revestimientos que imitan piedra natural —travertino, caliza, pizarra, mármol veteado— son <strong>la tendencia más potente de 2025</strong>. Y no hablamos de imitaciones burdas: las placas SPC actuales reproducen la textura, el color y hasta las vetas de la piedra real con un nivel de detalle asombroso.</p>
      <p>El efecto travertino es el más demandado. Su textura porosa y sus tonos crema-dorados aportan una elegancia atemporal que funciona tanto en baños pequeños como en grandes espacios. Le siguen de cerca los acabados en mármol verde y el efecto ónix retroiluminado para paredes de acento.</p>

      <h2>Minimalismo cálido: menos es más (pero acogedor)</h2>
      <p>El minimalismo sigue vigente, pero evoluciona hacia una versión más acogedora. Se mantienen las <strong>líneas limpias y los espacios despejados</strong>, pero se añaden elementos que aportan calidez: maderas claras, textiles naturales (lino, algodón), plantas y una iluminación suave e indirecta.</p>
      <p>En la práctica, esto se traduce en baños con muebles suspendidos de líneas rectas, estanterías abiertas con cestas de mimbre, espejos redondos con marco fino y apliques de pared que proyectan luz cálida hacia arriba y abajo.</p>

      <h2>Formatos XXL y superficies sin juntas</h2>
      <p>La tendencia es reducir al mínimo las juntas visibles. Los <strong>formatos grandes</strong> (placas de 60×120 cm o más) crean superficies más limpias y homogéneas. Cuantas menos juntas, más sensación de amplitud y más fácil es la limpieza.</p>
      <p>Las placas SPC encajan perfectamente en esta tendencia: al ser paneles de gran formato que se solapan mediante machihembrado o junta mínima, el resultado visual es una pared continua sin las líneas de rejuntado propias de la cerámica.</p>

      <h2>Sostenibilidad y materiales reciclables</h2>
      <p>La conciencia medioambiental influye cada vez más en las decisiones de reforma. Los consumidores buscan <strong>materiales reciclables, de bajo impacto ambiental y larga vida útil</strong>. Las placas SPC cumplen estos criterios: son reciclables, no contienen formaldehído y su durabilidad (más de 15 años sin mantenimiento) reduce la necesidad de sustituciones frecuentes.</p>
      <p>Además, al instalarse sobre el revestimiento existente, se evita la generación de escombros. Una reforma con placas SPC produce hasta un 90% menos de residuos que una reforma convencional con cerámica.</p>

      <h2>Grifería y accesorios en acabados mate</h2>
      <p>Los acabados brillantes dan paso a los <strong>acabados mate</strong>: negro mate, dorado mate, bronce cepillado y níquel satinado. Estos acabados aportan un toque contemporáneo y sofisticado, y tienen la ventaja práctica de que no marcan huellas ni manchas de agua.</p>
      <p>La combinación de revestimiento efecto piedra con grifería negra mate es una de las propuestas más elegantes y demandadas de este 2025. Es un look que funciona en cualquier tamaño de baño.</p>

      <h2>Cómo aplicar estas tendencias en tu baño</h2>
      <p>No necesitas un presupuesto ilimitado para tener un baño en tendencia. Con <strong>placas decorativas SPC efecto piedra o mármol</strong>, una mano de pintura en tono tierra para las zonas no mojables y unos accesorios en acabado mate, puedes transformar completamente tu baño en un fin de semana. En ObraFácil tenemos todos los acabados de tendencia a precio de almacén, con envío a toda España.</p>
    `,
  },
  {
    slug: 'guia-palilleria-pvc-separar-ambientes',
    title: 'Guía completa de palillería PVC: cómo separar ambientes con estilo',
    excerpt:
      'Todo lo que necesitas saber sobre los paneles de lamas PVC para dividir espacios: tipos, instalación, ventajas frente a la madera y las mejores ideas de uso.',
    date: '2025-03-10',
    readTime: '7 min',
    category: 'Guías',
    tags: ['palillería', 'PVC', 'separar ambientes', 'lamas', 'decoración'],
    image: '/images/blog/palilleria-pvc-ambientes.jpg',
    content: `
      <p>La palillería (también llamada celosía de lamas o panel de listones) se ha convertido en uno de los <strong>elementos decorativos más demandados</strong> en reformas y proyectos de interiorismo. Permite separar ambientes sin cerrar el espacio, aporta un toque arquitectónico moderno y, en su versión PVC, es mucho más práctica y económica que la madera maciza.</p>

      <h2>¿Qué es exactamente la palillería PVC?</h2>
      <p>La palillería PVC consiste en <strong>paneles formados por lamas verticales u horizontales de PVC rígido</strong>, separadas entre sí a intervalos regulares. El PVC imita la textura y el color de la madera natural con un acabado muy realista, pero sin los inconvenientes de la madera: no se deforma con la humedad, no necesita tratamiento ni barnizado, no se astilla y es mucho más ligera.</p>
      <p>Los paneles suelen venir prefabricados en módulos de diferentes anchos y alturas, listos para anclar a suelo y techo o a la pared. También se pueden cortar a medida para adaptarse a cualquier espacio.</p>

      <h2>Ventajas del PVC frente a la madera maciza</h2>
      <p><strong>Resistencia a la humedad:</strong> el PVC es 100% impermeable. Puedes usar palillería PVC en baños, cocinas, terrazas cubiertas o cualquier zona húmeda sin preocuparte por la deformación o la aparición de hongos.</p>
      <p><strong>Mantenimiento cero:</strong> no necesita barniz, aceite ni tratamiento periódico. Se limpia con un paño húmedo y punto.</p>
      <p><strong>Peso reducido:</strong> un panel de palillería PVC pesa entre un 50% y un 70% menos que el equivalente en madera. Esto facilita enormemente el transporte y la instalación, y reduce la carga sobre la estructura.</p>
      <p><strong>Precio más accesible:</strong> la madera maciza de calidad (roble, nogal, iroko) es cara. La palillería PVC ofrece un acabado visual equivalente a una fracción del precio.</p>
      <p><strong>Uniformidad:</strong> cada lama de PVC es idéntica en color y textura. En la madera natural, las variaciones de tono y veta pueden ser un problema si buscas un resultado homogéneo.</p>

      <h2>Ideas de uso para la palillería</h2>
      <p><strong>Separar salón y comedor:</strong> es el uso más clásico. Un panel de lamas verticales desde suelo a techo divide visualmente los dos espacios sin cortar la luz ni la sensación de amplitud. Es ideal para pisos de planta abierta que necesitan algo de definición entre zonas.</p>
      <p><strong>Cabecero de cama:</strong> un panel de lamas detrás de la cama crea un cabecero espectacular con un efecto arquitectónico que va mucho más allá de los cabeceros tradicionales. Puedes instalar tiras LED detrás para iluminación indirecta.</p>
      <p><strong>Revestimiento de pared de acento:</strong> en lugar de usar las lamas como separador, puedes fijarlas directamente a la pared como elemento decorativo. Es perfecto para dar protagonismo a una pared del salón, del recibidor o del dormitorio.</p>
      <p><strong>Ocultar zonas de servicio:</strong> lavadero, zona de caldera, tendedero interior... La palillería permite ocultar estas zonas manteniendo la ventilación y sin crear un espacio cerrado y claustrofóbico.</p>
      <p><strong>Terrazas y zonas exteriores cubiertas:</strong> al ser impermeable, la palillería PVC es perfecta para crear zonas de intimidad en terrazas, separar ambientes en porches o crear celosías decorativas en fachadas.</p>

      <h2>Cómo instalar palillería PVC</h2>
      <p>La instalación es sorprendentemente sencilla. Hay dos métodos principales:</p>
      <p><strong>Método 1: anclaje a suelo y techo.</strong> Fija un perfil guía en el suelo y otro en el techo con tacos y tornillos. Inserta las lamas en los perfiles y fíjalas en su posición. Es el método más limpio y el que permite crear separadores exentos (que no tocan ninguna pared).</p>
      <p><strong>Método 2: fijación a pared.</strong> Si vas a usar las lamas como revestimiento mural, fíjalas directamente a la pared con adhesivo de montaje MS polímero y/o tornillos ocultos. Este método es más rápido y no requiere perfiles guía.</p>
      <p>En ambos casos, <strong>asegúrate de nivelar correctamente el primer elemento</strong>. Usa un nivel láser si lo tienes; si no, un nivel de burbuja largo. La separación entre lamas suele ser de 3-5 cm, aunque puedes ajustarla según el grado de privacidad o transparencia que busques.</p>

      <h2>Acabados disponibles</h2>
      <p>La palillería PVC de ObraFácil está disponible en los acabados más demandados: <strong>roble natural, roble blanqueado, nogal oscuro, gris antracita y negro mate</strong>. Todos ellos con textura al tacto que imita la madera real. También disponemos de lamas lisas en blanco puro para estilos nórdicos o minimalistas.</p>

      <h2>¿Cuánto cuesta un proyecto de palillería?</h2>
      <p>El coste depende del tamaño del panel y del acabado elegido, pero como referencia: un separador de ambiente de 1,5 m de ancho por 2,5 m de alto en acabado roble natural puede salir por <strong>150-250 € en material</strong>. Comparado con un separador equivalente en madera maciza (que puede superar los 600-800 €), el ahorro es muy significativo.</p>
      <p>En ObraFácil ofrecemos corte a medida y envío a toda España. Si no tienes claro qué medidas necesitas, escríbenos por WhatsApp y te ayudamos a calcular exactamente lo que necesitas para tu proyecto.</p>
    `,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
