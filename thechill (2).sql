-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2023 a las 12:00:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `thechill`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sessionId` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `email` varchar(15) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`id`, `sessionId`, `token`, `status`, `first_name`, `middleName`, `last_name`, `mobile`, `email`, `city`, `province`, `country`, `createdAt`, `updatedAt`, `content`) VALUES
(1, NULL, NULL, 0, 'Leandro', NULL, 'Montellano', NULL, 'leandro.montell', NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, 0, 'José', NULL, 'Llanes', NULL, 'leasns77o@gmail', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart_item`
--

CREATE TABLE `cart_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `price` float NOT NULL,
  `discount` float DEFAULT NULL,
  `quantity` smallint(6) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `cartId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(75) NOT NULL,
  `metaTitle` varchar(100) DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `title`, `metaTitle`, `slug`, `content`) VALUES
(1, 'Deporte', 'Deporte', 'deporte', 'Deporte'),
(2, 'Formal', 'Formal', 'formal', 'Formal'),
(3, 'Casual', 'Casual', 'casual', 'Casual'),
(4, 'Otoño', 'Otoño', 'otoño', 'Otoño'),
(5, 'Verano', 'Verano', 'verano', 'Verano'),
(6, 'Invierno', 'Invierno', 'invierno', 'Invierno'),
(7, '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sessionId` varchar(100) NOT NULL,
  `token` varchar(100) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `subTotal` float DEFAULT NULL,
  `itemDiscount` float DEFAULT NULL,
  `tax` float DEFAULT NULL,
  `shipping` float DEFAULT NULL,
  `total` float NOT NULL,
  `promo` varchar(50) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `grandTotal` float DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `email` varchar(15) NOT NULL,
  `city` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `order`
--

INSERT INTO `order` (`id`, `sessionId`, `token`, `status`, `subTotal`, `itemDiscount`, `tax`, `shipping`, `total`, `promo`, `discount`, `grandTotal`, `first_name`, `middleName`, `last_name`, `mobile`, `email`, `city`, `province`, `country`, `createdAt`, `updatedAt`, `content`) VALUES
(1, '', NULL, 1, 104998, 0, 0, 0, 93598.2, NULL, 11399.8, NULL, 'Leandro', NULL, 'Montellano', '+5493884719964', 'leandro.montell', 'San Salvador de Jujuy', 'Jujuy', 'Argentina', '0000-00-00 00:00:00', NULL, 'Mi primera compra.'),
(2, '', NULL, 1, 184497, 0, 0, 0, 163347, NULL, 21149.7, NULL, 'Leandro', NULL, 'Montellano', '+5493884719964', 'leandro.montell', 'San Salvador de Jujuy', 'Jujuy', 'Argentina', '0000-00-00 00:00:00', NULL, 'Mi primera compra.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_item`
--

CREATE TABLE `order_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sku` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `discount` float DEFAULT NULL,
  `quantity` smallint(6) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL,
  `orderId` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `order_item`
--

INSERT INTO `order_item` (`id`, `sku`, `price`, `discount`, `quantity`, `createdAt`, `updatedAt`, `content`, `orderId`, `productId`) VALUES
(3, '', 18000, 15, 1, '0000-00-00 00:00:00', NULL, 'Camiseta Argentina GenéricaCamiseta Argentina GenéricaCamiseta Argentina GenéricaCamiseta Argentina Genérica', 1, 4),
(5, '', 54000, 15, 3, '0000-00-00 00:00:00', NULL, 'Camiseta Argentina GenéricaCamiseta Argentina GenéricaCamiseta Argentina GenéricaCamiseta Argentina Genérica', 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(75) NOT NULL,
  `metaTitle` varchar(100) DEFAULT NULL,
  `slug` varchar(100) NOT NULL,
  `summary` tinytext DEFAULT NULL,
  `type` smallint(6) DEFAULT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `price` float NOT NULL,
  `size` varchar(5) NOT NULL,
  `colour` varchar(15) NOT NULL,
  `image` varchar(100) NOT NULL,
  `discount` float DEFAULT NULL,
  `quantity` smallint(6) DEFAULT NULL,
  `shop` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `publishedAt` datetime DEFAULT NULL,
  `startsAt` datetime DEFAULT NULL,
  `endsAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL,
  `gender` varchar(75) NOT NULL,
  `category` varchar(75) NOT NULL,
  `model_name` varchar(75) NOT NULL,
  `brand` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `title`, `metaTitle`, `slug`, `summary`, `type`, `sku`, `price`, `size`, `colour`, `image`, `discount`, `quantity`, `shop`, `createdAt`, `updatedAt`, `publishedAt`, `startsAt`, `endsAt`, `content`, `gender`, `category`, `model_name`, `brand`) VALUES
(4, 'Camiseta Argentina Genérica', NULL, '', NULL, NULL, NULL, 18000, 'XS', '', 'products_1702491489209.webp', 15, 6, NULL, NULL, NULL, NULL, NULL, NULL, 'Camiseta Argentina GenéricaCamiseta Argentina GenéricaCamiseta Argentina GenéricaCamiseta Argentina Genérica', 'Hombre', '', 'Premium', 'Adibas'),
(5, 'Chaqueta de cuero', NULL, '', NULL, NULL, NULL, 51999, 'XS', '', 'products_1702522045109.webp', 10, 42, NULL, NULL, NULL, NULL, NULL, NULL, '¡Descubre la elegancia y el estilo atemporal con nuestra Chaqueta de Cuero Exclusiva!\r\n\r\nSumérgete en la sofisticación definitiva con nuestra chaqueta de cuero, una pieza que combina a la perfección la artesanía clásica con un toque moderno. Confeccionada con cuero de la más alta calidad, esta chaqueta no solo ofrece durabilidad excepcional, sino también una sensación suave al tacto que mejora con el tiempo.\r\n\r\nEl diseño contemporáneo de nuestra chaqueta captura la esencia de la moda urbana, con detalles meticulosos que la distinguen. Los cierres de cremallera de alta calidad y los sutiles ribetes acentúan la silueta, proporcionando un ajuste elegante y favorecedor. Los bolsillos estratégicamente ubicados no solo son funcionales, sino que también añaden un toque de estilo práctico.\r\n\r\nYa sea que estés buscando una prenda para destacar en la ciudad o para complementar tu atuendo casual, esta chaqueta de cuero es la elección perfecta. Su versatilidad te permite combinarla con jeans, faldas o vestidos, brindándote infinitas posibilidades para expresar tu personalidad única.\r\n\r\nNo te conformes con lo común, elige la excelencia con nuestra Chaqueta de Cuero Exclusiva. Haz una declaración de estilo audaz y eterno, y lleva contigo la confianza que solo una prenda de calidad puede ofrecer. Eleva tu guardarropa con esta pieza imprescindible que trasciende las tendencias y perdura en el tiempo. ¡Descubre la fusión perfecta entre moda y funcionalidad hoy!', 'Hombre', '', 'MajesticRider II', 'UrbanEdge Couture'),
(6, 'Vestido Verde', NULL, '', NULL, NULL, NULL, 89999, 'XS', '', 'products_1702522258609.jpeg', 15, 38, NULL, NULL, NULL, NULL, NULL, NULL, 'El Vestido Verde Esmeralda de EnchantGreen Elegance es una obra maestra de la moda que resalta tu belleza natural con un toque de encanto. La exquisita elección de tejidos suaves y fluidos garantiza comodidad durante todo el día, mientras que el vibrante tono verde esmeralda añade un toque de frescura y vitalidad a tu estilo.\r\n\r\nLos detalles meticulosos, como el delicado escote en V y la sutil caída de la falda, crean una silueta femenina y halagadora. El cinturón elegante acentúa la cintura, brindando una forma esbelta y destacando tu gracia única.\r\n\r\nEste vestido es perfecto para ocasiones especiales, eventos formales o simplemente para agregar un toque de elegancia a tu día a día. Combínalo con accesorios dorados para un toque de lujo o con sandalias de tacón alto para un look más sofisticado.', 'Hombre', '', 'EnchantGreen Radiance', 'EnchantGreen Elegance'),
(7, 'Buzo Akatsuki', NULL, '', NULL, NULL, NULL, 22149, 'L', '', 'products_1702522356674.jpg', 12, 3, NULL, NULL, NULL, NULL, NULL, NULL, 'El Buzo Akatsuki de ShadowCloak es una expresión de moda única que fusiona la intriga del anime con el confort contemporáneo. Confeccionado con materiales de alta calidad, este buzo ofrece una sensación suave al tacto y una durabilidad que se adapta a tu estilo de vida activo.\r\n\r\nEl diseño presenta el emblema distintivo de la organización Akatsuki en la parte frontal, mientras que los colores oscuros añaden un toque de misterio y sofisticación. Los detalles cuidadosamente bordados y la capucha ajustable agregan un toque práctico y estilizado.\r\n\r\nPerfecto para los fanáticos del anime que desean llevar su lealtad a Akatsuki más allá de la pantalla, este buzo es ideal tanto para el uso casual como para destacar en eventos y convenciones. Combínalo con jeans o pantalones deportivos para un look relajado pero impactante.', 'Hombre', '', 'ShadowCloak Akatsuki Elite', 'ShadowCloak'),
(8, 'Blazer Azul Elegante', NULL, '', NULL, NULL, NULL, 40567, 'XS', '', 'products_1702522454466.jpg', 13, 29, NULL, NULL, NULL, NULL, NULL, NULL, 'El Blazer Azul de AzureClass es una obra maestra de confección, confeccionado con precisión para ofrecer un ajuste impecable y una sensación de lujo. El tono azul profundo agrega un toque de serenidad y distinción, lo que lo convierte en una elección perfecta para eventos formales o para elevar tu estilo cotidiano.\r\n\r\nLos detalles cuidadosamente diseñados, como los botones frontales elegantes y los bolsillos discretos, aportan un toque de refinamiento al blazer. Su versatilidad te permite combinarlo con pantalones de vestir para un look clásico de oficina o con jeans para un estilo más relajado y moderno.\r\n\r\nEste blazer no solo es una prenda de moda, sino también una inversión en calidad. El tejido duradero garantiza resistencia y durabilidad, asegurando que este blazer sea una adición atemporal a tu guardarropa.', 'Hombre', '', 'AzureClass Royal Crest', 'AzureClass Elegance'),
(9, 'Camiseta Roja CrimsonComfort', NULL, '', NULL, NULL, NULL, 8999, 'XS', '#b60202', 'products_1702522560969.png', 10, 634, NULL, NULL, NULL, NULL, NULL, NULL, 'La Chomba Roja de CrimsonComfort es un tributo a la comodidad y el estilo sencillo. Fabricada con tejidos suaves y transpirables, esta chomba se convierte en tu compañera perfecta para días relajados con un toque de elegancia. El tono rojo vibrante agrega energía y vitalidad a tu look, haciéndola ideal para cualquier ocasión informal.Los detalles sutiles, como el cuello clásico y la calidad de confección, hacen que esta chomba se destaque entre las prendas básicas. El corte favorecedor y la versatilidad de estilo te permiten combinarla fácilmente con jeans, pantalones chinos o incluso bermudas para un look fresco y desenfadado.Esta chomba es la elección perfecta para quienes buscan un estilo sin esfuerzo con un toque de color audaz. Ya sea para una salida casual con amigos o simplemente para disfrutar de un día de relax, la Chomba Roja de CrimsonComfort es tu opción para un estilo sin complicaciones y con un toque de distinción.', 'Hombre', '', 'CrimsonComfort Casual Essence', 'CrimsonComfort'),
(10, 'Pantalones Cortos BreezyStride', NULL, '', NULL, NULL, NULL, 7999, 'XS', '', 'products_1702522966286.jpg', 10, 137, NULL, NULL, NULL, NULL, NULL, NULL, 'Los Pantalones Cortos de BreezyStride ofrecen una experiencia única de comodidad y estilo. Fabricados con tejidos ligeros y transpirables, estos pantalones cortos son ideales para mantenerse fresco en días cálidos. Su diseño contemporáneo y versátil te permite pasar fácilmente de la playa a la ciudad sin perder el toque de moda.\r\n\r\nEl ajuste favorecedor y la atención a los detalles, como los remaches y los dobladillos cuidadosamente confeccionados, hacen que estos pantalones cortos destaquen. La paleta de colores frescos, como el azul marino o el gris claro, ofrece opciones versátiles para combinar con tu estilo personal.\r\n\r\nYa sea para una tarde de paseo, una escapada de fin de semana o simplemente para disfrutar del sol, los Pantalones Cortos de BreezyStride te brindan la libertad de moverte con estilo y confianza.', 'Hombre', '', 'BreezyStride Coastal Explorer', 'BreezyStride'),
(11, 'Vestido Azul AzureAllure Midnight Elegance', NULL, '', NULL, NULL, NULL, 79999, 'XS', '', 'products_1702523442058.webp', 13, 4, NULL, NULL, NULL, NULL, NULL, NULL, '\r\nMarca: AzureAllure\r\n\r\nEncarna la elegancia atemporal con el Vestido Azul de AzureAllure. Esta prenda, diseñada para la mujer moderna que valora la sofisticación y el estilo, fusiona la belleza del azul con una silueta que cautiva y destaca.\r\n\r\nDescripción:\r\n\r\nEl Vestido Azul de AzureAllure es una obra maestra de la moda que combina la sencillez con la distinción. El tono azul profundo, reminiscente del cielo nocturno estrellado, añade un toque de serenidad y elegancia a tu presencia. La confección de alta calidad y la atención a los detalles garantizan un ajuste impecable y una sensación de lujo.\r\n\r\nEl diseño versátil de este vestido lo hace adecuado para una amplia gama de eventos, desde ocasiones formales hasta cenas casuales. El escote y la longitud son elegantes, permitiéndote destacar sin esfuerzo en cualquier entorno. Combínalo con accesorios dorados para un toque de glamour adicional o opta por la simplicidad con complementos plateados para un estilo más contemporáneo.\r\n\r\nEste vestido es más que una prenda; es una expresión de tu elegancia y estilo personal. Eleva tu presencia con el Vestido Azul de AzureAllure y haz una declaración de moda que perdurará en el tiempo.', 'Mujer', '', 'AzureAllure Midnight Elegance', 'AzureAllure'),
(12, 'Campera de invierno FrostGuard Arctic Elegance', NULL, '', NULL, NULL, NULL, 59999, 'XS', '', 'products_1702523625755.webp', 15, 244, NULL, NULL, NULL, NULL, NULL, NULL, 'La Campera Negra de Invierno de FrostGuard es tu aliada contra las bajas temperaturas. Confeccionada con materiales de alta calidad y aislamiento térmico, esta campera garantiza que te mantengas cálida sin comprometer el estilo. El color negro clásico no solo es atemporal, sino que también ofrece versatilidad para combinar con cualquier atuendo.\r\n\r\nLos detalles prácticos, como el cierre de doble dirección y la capucha desmontable, hacen que esta campera sea adaptable a diferentes condiciones climáticas. Los bolsillos con cierre proporcionan espacio seguro para tus pertenencias esenciales, mientras que los puños ajustables y el dobladillo con cordón ofrecen un ajuste personalizado.\r\n\r\nYa sea que estés enfrentando una nevada o simplemente disfrutando de un día frío en la ciudad, la Campera Negra de Invierno de FrostGuard te envuelve en comodidad y estilo, convirtiéndola en una opción imprescindible para la temporada invernal.', 'Hombre', '', 'FrostGuard Arctic Elegance', 'FrostGuard'),
(13, 'Vestido rosa RoséRadiance Blush Blossom', NULL, '', NULL, NULL, NULL, 47799, 'M', '', 'products_1702524877697.jpg', 10, 5, NULL, NULL, NULL, NULL, NULL, NULL, 'El Vestido Rosa de RoséRadiance es una oda a la feminidad y la gracia. El tono rosa suave agrega un toque de romance y dulzura, creando una paleta visual que resalta tu belleza natural. La confección cuidadosa y los detalles delicados, como el escote elegante y la caída suave de la falda, crean una silueta encantadora.\r\n\r\nEste vestido es versátil y adecuado para diversas ocasiones, desde eventos formales hasta reuniones casuales. La belleza del rosa permite una fácil combinación con accesorios dorados para un toque de glamour o con detalles plateados para un estilo más contemporáneo.\r\n\r\nEl Vestido Rosa de RoséRadiance no es solo una prenda; es una declaración de elegancia y feminidad. Sumérgete en la suavidad y el encanto de este vestido y destaca con un estilo que perdurará en la memoria.', 'Mujer', '', 'RoséRadiance Blush Blossom', 'RoséRadiance'),
(15, 'Buzo Canguro StealthComfort ShadowBlend', NULL, '', NULL, NULL, NULL, 8999, 'L', '', 'products_1702525033076.jpg', 5, 9, NULL, NULL, NULL, NULL, NULL, NULL, 'El Buzo Canguro de StealthComfort con Detalles en Negro es la definición de comodidad sin sacrificar el estilo. El suave tejido ofrece una sensación acogedora, mientras que los detalles en negro añaden un toque de sofisticación. El contraste entre los tonos crea un aspecto dinámico y versátil que se adapta a diversas ocasiones.\r\n\r\nLos detalles prácticos, como la capucha ajustable y el bolsillo canguro delantero, hacen que este buzo sea una opción cómoda para tu día a día. Los ribetes y las costuras en negro no solo aportan un toque de elegancia, sino que también resaltan el diseño general del buzo.\r\n\r\nEste buzo es perfecto para momentos de relajación, salidas informales o incluso para añadir un toque de estilo a tus actividades diarias. Combínalo con tus jeans favoritos o pantalones deportivos para un look casual con un toque distintivo.', 'Hombre', '', 'StealthComfort ShadowBlend', 'StealthComfort'),
(16, 'Shorts FlexMotion AirFlow', NULL, '', NULL, NULL, NULL, 4999, 'M', '', 'products_1702547766854.webp', 15, 64, NULL, NULL, NULL, NULL, NULL, NULL, 'Los Pantalones Tipo Malla de FlexMotion Active son la elección perfecta para mantener un estilo activo y moderno. Confeccionados con un tejido elástico y transpirable, estos pantalones proporcionan una sensación suave y cómoda que te acompaña durante cualquier actividad física.\r\n\r\nEl diseño tipo malla no solo ofrece una ventilación óptima, sino que también agrega un toque de estilo moderno. La cintura elástica y el ajuste ceñido permiten una movilidad sin restricciones, adaptándose a tus movimientos y actividades diarias.\r\n\r\nEstos pantalones son ideales para actividades como yoga, correr, entrenamientos en el gimnasio o simplemente para un estilo casual y deportivo. Combínalos con tu camiseta favorita o una sudadera para un look activo y con estilo.', 'Hombre', '', 'FlexMotion AirFlow', 'FlexMotion Active'),
(17, 'Pantalón RelaxedChic', NULL, '', NULL, NULL, NULL, 11999, 'M', '', 'products_1702547895870.jpg', 25, 32, NULL, NULL, NULL, NULL, NULL, NULL, 'Descubre el equilibrio perfecto entre comodidad y estilo con los Pantalones Holgados de RelaxedChic. Diseñados para la mujer que valora la libertad de movimiento y la elegancia relajada, estos pantalones ofrecen un ajuste cómodo sin sacrificar el toque de moda.\r\n\r\nLos Pantalones Holgados de RelaxedChic son una expresión de estilo informal y relajado. Fabricados con tejidos suaves y ligeros, estos pantalones brindan una sensación de comodidad desde el momento en que te los pones. Su corte holgado desde la cadera hasta el tobillo proporciona libertad de movimiento y un estilo relajado.\r\n\r\nLa cintura elástica y el diseño sin complicaciones hacen que estos pantalones sean ideales para una variedad de ocasiones, desde días casuales hasta salidas relajadas con amigos. Los detalles sutiles, como los bolsillos laterales y los pliegues suaves, añaden un toque de estilo adicional.\r\n\r\nCombínalos con una camiseta holgada para un look completamente relajado o opta por una blusa elegante para una apariencia más pulida. Los Pantalones Holgados de RelaxedChic son versátiles y esenciales para aquellas que buscan un estilo sin esfuerzo.', 'Hombre', '', 'RelaxedChic EaseFlow', 'RelaxedChic'),
(18, 'Vestido floreado BlossomElegance PetalCharm', NULL, '', NULL, NULL, NULL, 24799, 'XS', '', 'products_1702548012952.jpeg', 15, 234, NULL, NULL, NULL, NULL, NULL, NULL, 'El Vestido Floreado de BlossomElegance es una obra de arte floral que captura la esencia de la primavera en cada detalle. El estampado floreado agrega un toque de color y vitalidad, mientras que el diseño del vestido, con su corte favorecedor y su caída suave, resalta tu feminidad con gracia.\r\n\r\nLa versatilidad de este vestido lo hace perfecto para una variedad de ocasiones, desde eventos al aire libre hasta reuniones casuales. Los detalles cuidadosamente seleccionados, como el escote y los detalles plisados, aportan un toque de elegancia a la frescura del estampado floral.\r\n\r\nCombina este vestido con sandalias para un look casual y relajado, o eleva su estilo con tacones y accesorios elegantes para una ocasión más formal. Sea cual sea la elección, el Vestido Floreado de BlossomElegance es la opción ideal para las mujeres que desean destacar con encanto y estilo.', 'Mujer', '', 'BlossomElegance PetalCharm', 'BlossomElegance'),
(19, 'Camiseta Fluminense Original', NULL, '', NULL, NULL, NULL, 48599, 'L', '#000000', 'products_1702548222184.jpg', 15, 7, NULL, NULL, NULL, NULL, NULL, NULL, 'La Camiseta Original de Tricolor Heritage es un tributo a la grandeza del Fluminense. Con los colores característicos del club, verde, blanco y grená, esta camiseta refleja la identidad tricolor con orgullo. El diseño presenta el escudo auténtico del Fluminense y detalles que resaltan la rica historia del club.  Fabricada con materiales de alta calidad, esta camiseta ofrece comodidad y durabilidad. Ya sea que estés animando desde las gradas o mostrando tu apoyo en cualquier parte del mundo, esta camiseta te conecta con la esencia auténtica del Fluminense.', 'Hombre', '', 'Premium', 'Tricolor Heritage');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_category`
--

CREATE TABLE `product_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `categoryId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`id`, `productId`, `categoryId`) VALUES
(2, 4, 1),
(3, 5, 3),
(4, 5, 4),
(5, 6, 2),
(6, 6, 3),
(7, 7, 3),
(8, 8, 2),
(9, 9, 3),
(10, 10, 1),
(11, 10, 3),
(12, 10, 5),
(13, 11, 2),
(14, 12, 6),
(15, 13, 2),
(16, 15, 3),
(17, 16, 1),
(18, 17, 3),
(19, 18, 2),
(20, 18, 3),
(21, 18, 4),
(22, 19, 1),
(23, 19, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_meta`
--

CREATE TABLE `product_meta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(50) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_review`
--

CREATE TABLE `product_review` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `rating` smallint(6) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `publishedAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_tag`
--

CREATE TABLE `product_tag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `tagId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tag`
--

CREATE TABLE `tag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(75) NOT NULL,
  `metaTitle` varchar(100) DEFAULT NULL,
  `slug` varchar(100) NOT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaction`
--

CREATE TABLE `transaction` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `type` smallint(6) DEFAULT NULL,
  `mode` smallint(6) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `content` text DEFAULT NULL,
  `userId` bigint(20) UNSIGNED NOT NULL,
  `orderId` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cartId` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `passwordHash` varchar(400) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `registeredAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `cartId`, `first_name`, `avatar`, `last_name`, `mobile`, `email`, `passwordHash`, `admin`, `gender`, `registeredAt`) VALUES
(1, 1, 'Leandro', 'avatar.jpg', 'Montellano', '+5493884719964', 'leandro.montellano@gmail.com', '$2a$10$3ATICP.pjN/lpT8Lfe3QWO/nJN27KW4en8SGn.K51u5iYa75KKj8y', 0, 'Hombre', '2023-12-13 18:06:19'),
(2, 2, 'José', 'avatar.jpg', 'Llanes', '+5493884719964', 'leasns77o@gmail.com', '$2a$10$O9JokeOQdU8Z8QdkGjurQeMfpfgCpvRNcVy3LUtcqwCGKIK8Rj9Je', 1, 'Hombre', '2023-12-13 18:07:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_item_productId_foreign` (`productId`),
  ADD KEY `cart_item_cartId_foreign` (`cartId`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_item_productId_foreign` (`productId`),
  ADD KEY `order_item_orderId_foreign` (`orderId`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_category_productId_foreign` (`productId`),
  ADD KEY `product_category_categoryId_foreign` (`categoryId`);

--
-- Indices de la tabla `product_meta`
--
ALTER TABLE `product_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_meta_productId_foreign` (`productId`);

--
-- Indices de la tabla `product_review`
--
ALTER TABLE `product_review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_review_productId_foreign` (`productId`);

--
-- Indices de la tabla `product_tag`
--
ALTER TABLE `product_tag`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_tag_productId_foreign` (`productId`),
  ADD KEY `product_tag_tagId_foreign` (`tagId`);

--
-- Indices de la tabla `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transaction_userId_foreign` (`userId`),
  ADD KEY `transaction_orderId_foreign` (`orderId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `passwordHash` (`passwordHash`),
  ADD KEY `cartId` (`cartId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `product_meta`
--
ALTER TABLE `product_meta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_review`
--
ALTER TABLE `product_review`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_tag`
--
ALTER TABLE `product_tag`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tag`
--
ALTER TABLE `tag`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `cart_item_cartId_foreign` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_item_productId_foreign` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item__orderId_foreign` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `order_item__productId_foreign` FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `product_category_categoryId_foreign` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_category_productId_foreign` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `product_meta`
--
ALTER TABLE `product_meta`
  ADD CONSTRAINT `product_meta_productId_foreign` FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product_review`
--
ALTER TABLE `product_review`
  ADD CONSTRAINT `product_review_productId_foreign` FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product_tag`
--
ALTER TABLE `product_tag`
  ADD CONSTRAINT `product_tag_productId_foreign` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `product_tag_tagId_foreign` FOREIGN KEY (`tagId`) REFERENCES `tag` (`id`);

--
-- Filtros para la tabla `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_orderId_foreign` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `transaction_userId_foreign` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
