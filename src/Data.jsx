import {
  AuditOutlined,
  ContactsOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AmazonWebServices,
  AntDesign,
  Expressjs,
  JavaScript,
  MongoDB,
  Nodejs,
  React as ReactIcon,
  TailwindCSS,
  HTML5,
  Redux,
  Vite,
  Facebook,
  LinkedIn,
  WhatsApp,
  Gmail,
  Github,
  Nextjs,
  MaterialUI,
} from "./component/Icons";
import mercadoexpres from "./assets/mercadoexpres.webp";
import rosasEternasBecky from "./assets/rosasEternasBecky.webp";
import bloquera from "./assets/bloquera.webp";
import tcgp from "./assets/tcgp.webp";
import Experience from "./component/Experience";
import About from "./component/About";
import Jobs from "./component/Jobs";
import Contact from "./component/Contact";

export const dataNavigation = {
  es: [
    {
      title: "Sobre mi",
      icon: <UserOutlined />,
      to: "about",
    },
    {
      title: "Experiencia & habilidades",
      icon: <ProfileOutlined />,
      to: "experience",
    },
    {
      title: "Proyectos",
      icon: <AuditOutlined />,
      to: "jobs",
    },
    {
      title: "Contacto",
      icon: <ContactsOutlined />,
      to: "contact",
    },
  ],
  en: [
    {
      title: "About me",
      icon: <UserOutlined />,
      to: "about",
    },
    {
      title: "Experience & skill",
      icon: <ProfileOutlined />,
      to: "experience",
    },
    {
      title: "Projects",
      icon: <AuditOutlined />,
      to: "jobs",
    },
    {
      title: "Contact",
      icon: <ContactsOutlined />,
      to: "contact",
    },
  ],
};

export const dataLaguage = {
  es: ["Español", "Ingles"],
  en: ["Spanish", "English"],
};

export const dataHeader = {
  es: ["Hablemos", "CV"],
  en: ["Let's talk", "CV"],
};

export const dataAbout = {
  es: (
    <>
      <p>
        Hola, soy Alfaro López Giovany Alejandro, Ingeniero en Tecnologías de la
        Información con especialización en redes y seguridad. También soy
        Ingeniero Profesional en Seguridad en Redes y Software Libre, y Técnico
        Superior en Redes y Telecomunicaciones.
      </p>

      <p>
        Actualmente, soy docente en el Telebachillerato Comunitario, impartiendo clases
        en la área Ciencias Experimentales, Lógica y Tecnologías. Tengo experiencia en
        administración de redes, seguridad informática, virtualización, cloud
        computing, automatización y desarrollo backend/frontend.
      </p>

      <p>
        Me apasiona crear soluciones innovadoras, optimizar procesos y mejorar
        la experiencia del usuario. Siempre busco nuevos retos y oportunidades
        para seguir creciendo. ¡Estoy abierto a nuevas colaboraciones!
      </p>
    </>
  ),
  en: (
    <>
      <p>
        Hello, I'm Alfaro López Giovany Alejandro, an Information Technology
        Engineer specializing in networks and security. I’m also a Certified
        Network and Free Software Security Engineer and a Senior Technician in
        Networks and Telecommunications.
      </p>

      <p>
        Currently, I teach Experimental Sciences, Logic, and Technology at a
        Community High School. I have experience in network administration,
        cybersecurity, virtualization, cloud computing, automation, and
        backend/frontend development.
      </p>

      <p>
        I'm passionate about creating innovative solutions, optimizing
        processes, and enhancing user experiences. I'm always looking for new
        challenges and opportunities to grow. Let’s connect!
      </p>
    </>
  ),
};

export const dataExperience = {
  es: ["Básico", "Intermedio", "Avanzado", "Experto", "Maestro"],
  en: ["Basic", "Intermediate", "Advanced", "Expert", "Master"],
};

export const dataContact = {
  es: ["¿como puedes contactarme?", "Sígueme en mis redes", "Contacto"],
  en: ["How can you contact me?", "Follow me on my social networks", "contact"],
};

export const dataJobsButton = {
  es: "Produción",
  en: "Deploy",
};

export const dataJobs = [
  {
    es: {
      name: "Mercado Expres",
      description:
        "Este sitio está en desarrollo. Algunas secciones pueden no estar completas, pero sigo trabajando en mejoras.",
    },
    en: {
      name: "Mercado Expres",
      description:
        "This site is under development. Some sections may not be complete, but I am continuously working on improvements.",
    },
    image: mercadoexpres,
    href: "https://www.mercadoexpres.com.mx",
    tag: [
      {
        name: "MongoDB",
        icon: <MongoDB />,
      },
      {
        name: "Express.js",
        icon: <Expressjs />,
      },
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Amazon web service",
        icon: <AmazonWebServices />,
      },
      {
        name: "Node Js",
        icon: <Nodejs />,
      },
      {
        name: "AntDesing",
        icon: <AntDesign />,
      },
      {
        name: "TailwindCss",
        icon: <TailwindCSS />,
      },
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "HTLM5",
        icon: <HTML5 />,
      },
      {
        name: "Redux",
        icon: <Redux />,
      },
    ],
  },
  {
    es: {
      name: "Rosas Eternas Becky",
      description:
        "Rosas Eternas Becky es un proyecto dedicado a la creación de exclusivos arreglos florales con rosas eternas hechas a mano con listones de alta calidad. El sitio web fue diseñado para reflejar la elegancia y el significado especial de cada creación, ofreciendo una experiencia intuitiva y atractiva para los clientes. Este proyecto combina creatividad, diseño y funcionalidad para destacar la belleza de cada pieza y facilitar su adquisición.",
    },
    en: {
      name: "Eternal Roses Becky",
      description:
        "Rosas Eternas Becky is a project dedicated to creating exclusive floral arrangements using handcrafted eternal roses made with high-quality ribbons. The website is designed to reflect the elegance and special meaning of each creation, offering an intuitive and appealing experience for customers. This project combines creativity, design, and functionality to highlight the beauty of each piece and make them easily accessible.",
    },
    image: rosasEternasBecky,
    href: "https://rosaseternasbecky.com/",
    tag: [
      {
        name: "AWS",
        icon: <AmazonWebServices />,
      },
      {
        name: "TawilwindCSS",
        icon: <TailwindCSS />,
      },
      {
        name: "HTML5",
        icon: <HTML5 />,
      },
      {
        name: "Vite JS",
        icon: <Vite />,
      },
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
    ],
  },
  {
    es: {
      name: "TCG Pokemón",
      description:
      "Desarrollé una aplicación web diseñada para ayudar a los coleccionistas del juego de cartas Pokémon TCG a gestionar sus colecciones. La app permite a los usuarios registrar las cartas que les faltan, facilitando el seguimiento de su progreso"
    },
    en: {
      name: "TCG Pokemon",
      description:
      "I developed a web application designed to help collectors of the Pokémon TCG card game manage their collections. The app allows users to register the cards they are missing, making it easier to track their progress."
    },
    image: tcgp,
    href: "https://tcgpokemon.netlify.app/",
    tag: [
      {
        name: "TawilwindCSS",
        icon: <TailwindCSS />,
      },
      {
        name: "HTML5",
        icon: <HTML5 />,
      },
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
    ],
  },
  {
    es: {
      name: "FortiBlock",
      description:
        `FortiBlock es una página web que desarrollé como parte de mi portafolio profesional, enfocada en presentar una empresa ficticia del sector de la construcción especializada en la fabricación y comercialización de bloques de concreto de alta calidad. Este proyecto refleja mis habilidades tanto en diseño como en desarrollo web moderno.

El sitio fue construido con tecnologías como Next.js, Tailwind CSS y TypeScript, y está enfocado en ofrecer una experiencia de usuario intuitiva, rápida y visualmente atractiva. Integra secciones clave como:

“Cómo funciona”, para explicar el proceso de fabricación y atención al cliente.

“Nuestros productos”, donde se detallan los bloques y servicios ofrecidos.

“Preguntas frecuentes”, para resolver dudas comunes de los visitantes.

“Términos y condiciones”, asegurando claridad legal y transparencia.

“Reseñas de clientes”, donde los usuarios pueden dejar valoraciones, incluyendo imágenes, puntuaciones y comentarios detallados.

Además, la web cuenta con efectos visuales como fondos con desenfoque (blur), imágenes dinámicas y una estructura completamente responsive para adaptarse a todos los dispositivos.

Este proyecto no solo demuestra mis conocimientos técnicos, sino también mi enfoque en la experiencia del usuario, la organización del contenido y el diseño moderno orientado a marcas sólidas y confiables.`,
    },
    en: {
      name: "FortiBlock",
      description:
        `FortiBlock is a website I developed as part of my professional portfolio, created to showcase a fictional company in the construction industry that specializes in the manufacturing and distribution of high-quality concrete blocks. This project highlights my skills in both modern web design and development.

The site was built using Next.js, Tailwind CSS, and TypeScript, and focuses on delivering a fast, intuitive, and visually appealing user experience. It includes key sections such as:

"How it Works" – explaining the production process and customer service.

"Our Products" – showcasing the concrete blocks and related services.

"Frequently Asked Questions" – addressing common user concerns.

"Terms and Conditions" – ensuring legal clarity and transparency.

"Customer Reviews" – allowing users to leave detailed feedback with ratings, descriptions, and up to four images.

The website also features modern UI effects such as blurred backgrounds, dynamic imagery, and a fully responsive layout that works seamlessly across devices.

This project not only demonstrates my technical capabilities but also my focus on user experience, content structure, and brand-driven design.

`,
    },
    image: bloquera,
    href: "https://bloquera.vercel.app/",
    tag: [
      {
        name: "MongoDB",
        icon: <MongoDB />,
      },
      {
        name: "next.js",
        icon: <Nextjs />,
      },
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Amazon web service",
        icon: <AmazonWebServices />,
      },
      {
        name: "Node Js",
        icon: <Nodejs />,
      },
      {
        name: "Material UI",
        icon: <MaterialUI/>,
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCSS />,
      },
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "HTLM5",
        icon: <HTML5 />,
      },
    ],
  },
];





export const dataTitle =
[
  {
    id:"about",
    element:<About/>,
    es:"Acerca de mi",
    en:"about me",
  },
  {
    id:"experience",
    element:<Experience/>,
    es:"Mis habilidades como desarrollador",
    en:"My skills as a developer",
  },
  {
    id:"jobs",
    element:<Jobs/>,
    es:"proyectos realizados",
    en:"projects carried out",
  },
  {
    id:"contact",
    element:<Contact/>,
    es:"¿como puedes contactarme?",
    en:"How can you contact me?",
  },
];


export const dataSocial = [


  {
    text: "/gaal",
    href: "https://www.linkedin.com/in/gaal/",
    icon: <LinkedIn />,
  },
];
export const dataMyContact = [
  {
    text: "+521 919 128 1521",
    href: "https://wa.me/5219191281521?text=¡Hola! Estoy en búsqueda de nuevas oportunidades. Si crees que encajo en tu equipo, hablemos.",
    icon: <WhatsApp />,
  },
  {
    text: "giovany.alejandro80@gmail.com",
    href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=giovany.alejandro80@gmail.com",
    icon: <Gmail />,
  },
  {
    text: "/galatropos",
    href: "https://github.com/galatropos/",
    icon: <Github />,
  },
];

export const dataFooter= [

  {
    text: "/gaal",
    href: "https://www.linkedin.com/in/gaal/",
    icon: <LinkedIn />,
  },
  {
    text: "/galatropos",
    href: "https://github.com/galatropos/",
    icon: <Github />,
  },
];