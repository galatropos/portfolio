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
} from "./component/Icons";
import mercadoexpres from "./assets/mercadoexpres.webp";
import rosasEternasBecky from "./assets/rosasEternasBecky.webp";
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
      title: "Projectos",
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
      title: "about me",
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
  es: "despejar",
  en: "deploy",
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
];





export const dataTitle =
[
  {
    id:"experience",
    element:<Experience/>,
    es:"Mis habilidades como desarrollador",
    en:"My skills as a developer",
  },
  {
    id:"about",
    element:<About/>,
    es:"Acerca de mi",
    en:"about me",
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
    text: "/gaal.el",
    href: "https://www.facebook.com/gaal.el",
    icon: <Facebook />,
  },

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
];
