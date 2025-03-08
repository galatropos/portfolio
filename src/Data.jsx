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

export const dataNavigation = {
  es: [
    {
      title: "Sobre mi",
      icon: <UserOutlined />,
      to: "about",
    },
    {
      title: "Experiencia & formación",
      icon: <ProfileOutlined />,
      to: "experience",
    },
    {
      title: "Trabajos",
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
      title: "Experience & training",
      icon: <ProfileOutlined />,
      to: "experience",
    },
    {
      title: "Jobs",
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
      Hola, soy Alfaro López Giovany Alejandro, ingeniero en Tecnologías de la
      Información con especialización y experiencia en redes y seguridad.
      Además, soy Ingeniero Profesional en Seguridad en Redes y Software Libre,
      así como Técnico Superior en Redes y Telecomunicaciones.
      <p>
        Actualmente, me desempeño como docente en el Telebachillerato
        Comunitario de nivel medio superior, impartiendo clases en el área de
        Ciencias Experimentales, Lógica y Tecnologías.
      </p>
      <p>
        A lo largo de mi trayectoria, he desarrollado habilidades en
        administración de redes, seguridad informática, software libre,
        virtualización y cloud computing, automatización y scripting, así como
        en desarrollo backend y frontend.
      </p>
      <p>
        Me apasiona crear soluciones innovadoras, mejorar la experiencia del
        usuario y optimizar procesos. Disfruto diseñar sistemas eficientes que
        reduzcan costos y aumenten la productividad, además de resolver
        problemas complejos mediante tecnología innovadora y pensamiento
        estratégico.
      </p>
      <p>
        Siempre estoy en búsqueda de nuevos retos y oportunidades para seguir
        creciendo profesionalmente. Si tienes una propuesta interesante o deseas
        conectar, estaré encantado de conversar. ¡Estoy abierto a nuevas
        colaboraciones y desafíos!
      </p>
    </>
  ),
  en: (
    <>
      Hello, my name is Alfaro López Giovany Alejandro. I am an Information
      Technology Engineer specializing in networks and security. Additionally, I
      am a Professional Engineer in Network Security and Free Software, as well
      as a Senior Technician in Networks and Telecommunications.
      <p>
        Currently, I work as a teacher at the Community Telebachillerato at the
        upper secondary level, teaching Experimental Sciences, Logic, and
        Technologies.
      </p>
      <p>
        Throughout my career, I have developed skills in network administration,
        cybersecurity, free software, virtualization and cloud computing,
        automation and scripting, as well as backend and frontend development.
      </p>
      I am passionate about creating innovative solutions, enhancing user
      experience, and optimizing processes. I enjoy designing efficient systems
      that reduce costs and increase productivity, as well as solving complex
      problems through innovative technology and strategic thinking.
      <p>
        I am always looking for new challenges and opportunities to continue
        growing professionally. If you have an interesting opportunity or simply
        want to connect, I would be happy to talk. I am open to new
        collaborations and challenges!
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
      description: "Rosas Eternas Becky is a project dedicated to creating exclusive floral arrangements using handcrafted eternal roses made with high-quality ribbons. The website is designed to reflect the elegance and special meaning of each creation, offering an intuitive and appealing experience for customers. This project combines creativity, design, and functionality to highlight the beauty of each piece and make them easily accessible.",
    },
    image:rosasEternasBecky,
    href:"https://rosaseternasbecky.com/",
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
