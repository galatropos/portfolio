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
        Actualmente, soy docente en el Telebachillerato Comunitario, impartiendo
        clases en la área Ciencias Experimentales, Lógica y Tecnologías. Tengo
        experiencia en administración de redes, seguridad informática,
        virtualización, cloud computing, automatización y desarrollo
        backend/frontend.
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
        "Desarrollé una aplicación web diseñada para ayudar a los coleccionistas del juego de cartas Pokémon TCG a gestionar sus colecciones. La app permite a los usuarios registrar las cartas que les faltan, facilitando el seguimiento de su progreso",
    },
    en: {
      name: "TCG Pokemon",
      description:
        "I developed a web application designed to help collectors of the Pokémon TCG card game manage their collections. The app allows users to register the cards they are missing, making it easier to track their progress.",
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
      description: `FortiBlock es una web ficticia desarrollada como parte de mi portafolio profesional, enfocada en una empresa de construcción especializada en bloques de concreto. Fue creada con Next.js, Tailwind CSS y TypeScript, destacando por su diseño moderno, velocidad y experiencia de usuario responsive. Incluye secciones como: “Cómo funciona”, “Nuestros productos”, “Preguntas frecuentes”, “Términos y condiciones” y “Reseñas de clientes” con imágenes y comentarios. El sitio incorpora efectos visuales y una estructura clara que refleja mis habilidades en desarrollo web, diseño UI/UX y organización de contenido.`,
    },
    en: {
      name: "FortiBlock",
      description: `FortiBlock is a fictional website I developed as part of my professional portfolio, focused on a construction company specializing in high-quality concrete blocks. Built with Next.js, Tailwind CSS, and TypeScript, it features a modern design, fast performance, and a fully responsive user experience. Key sections include: “How it works,” “Our Products,” “FAQ,” “Terms and Conditions,” and “Customer Reviews” with images and detailed feedback. The site also integrates visual effects and a clean structure, showcasing my skills in web development, UI/UX design, and content organization.

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
        icon: <MaterialUI />,
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

export const dataTitle = [
  {
    id: "about",
    element: <About />,
    es: "Acerca de mi",
    en: "about me",
  },
  {
    id: "experience",
    element: <Experience />,
    es: "Mis habilidades como desarrollador",
    en: "My skills as a developer",
  },
  {
    id: "jobs",
    element: <Jobs />,
    es: "proyectos realizados",
    en: "projects carried out",
  },
  {
    id: "contact",
    element: <Contact />,
    es: "¿como puedes contactarme?",
    en: "How can you contact me?",
  },
];

export const dataSocial = [
  {
    text: "/gaal",
    href: "https://www.linkedin.com/in/gaal/",
    icon: <LinkedIn />,
    copy: "linkedin.com/in/gaal/",
  },
];
export const dataMyContact = [
  {
    text: "+521 919 128 1521",
    href: "https://wa.me/5219191281521?text=¡Hola! Estoy en búsqueda de nuevas oportunidades. Si crees que encajo en tu equipo, hablemos.",
    icon: <WhatsApp />,
    copy: "+521 919 128 1521"
  },
  {
    text: "giovany.alejandro80@gmail.com",
    href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=giovany.alejandro80@gmail.com",
    icon: <Gmail />,
    copy: "giovany.alejandro80@gmail.com"
  },
  {
    text: "/galatropos",
    href: "https://github.com/galatropos/",
    icon: <Github />,
    copy: "github.com/galatropos/"
  },
];

export const dataFooter = [
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
