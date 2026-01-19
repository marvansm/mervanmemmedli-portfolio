"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "az";

interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    scrollToExplore: string;
  };
  skills: {
    label: string;
    title: string;
    mainTech: string;
    otherTech: string;
  };
  projects: {
    label: string;
    title: string;
    descriptions: {
      ecommerce: string;
    };
  };
  experience: {
    label: string;
    title: string;
    present: string;
    descriptions: {
      senior: string;
      fullstack: string;
      frontend: string;
    };
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    location: string;
    locationValue: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      title: "Marvan",
      subtitle: "Mammadli",
      description:
        "I create user-centric, performant, and scalable applications using modern web technologies. Specialized in React, Next.js, and Node.js ecosystem.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      scrollToExplore: "Scroll to Explore",
    },
    skills: {
      label: "Skills",
      title: "Tech Stack",
      mainTech: "Core Technologies",
      otherTech: "Other Technologies",
    },
    projects: {
      label: "Portfolio",
      title: "Selected Projects",
      descriptions: {
        ecommerce:
          "MERN-stack blog platform. Next.js, Node.js, and MongoDB integration.",
      },
    },
    experience: {
      label: "Career",
      title: "Experience",
      present: "Present",
      descriptions: {
        senior:
          "Developed and maintained a full-stack blog platform using MERN stack. Implemented RESTful APIs with Node.js and Express, designed MongoDB schemas, and built responsive UI components with Next.js and TypeScript. Integrated authentication, file uploads, and real-time features.",
        fullstack:
          "Built custom portfolio websites and web applications for clients. Worked with modern frameworks including React and Next.js, implemented responsive designs, and optimized performance. Collaborated with designers to bring creative visions to life.",
        frontend:
          "Delivered freelance frontend development projects focusing on creating pixel-perfect, responsive user interfaces. Specialized in React ecosystem, modern CSS techniques, and performance optimization. Worked directly with clients to understand requirements and deliver quality solutions.",
      },
    },
    contact: {
      label: "Contact",
      title: "Have a Project in Mind?",
      subtitle:
        "I'm always open to new projects and opportunities. If you have an idea or just want to say hello, feel free to reach out.",
      email: "Email",
      location: "Location",
      locationValue: "Baku, Azerbaijan",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "email@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  az: {
    nav: {
      about: "Haqqimda",
      projects: "Layiheler",
      experience: "Tecrube",
      contact: "Elaqe",
    },
    hero: {
      title: "Marvan",
      subtitle: "Mammadli",
      description:
        "Müasir veb texnologiyaları ilə istifadəçi yönümlü, performanslı və genişlənə bilən tətbiqlər hazırlayıram. React, Next.js və Node.js ekosistemində ixtisaslaşmışam.",
      viewProjects: "Layihələr",
      contactMe: "Əlaqə",
      scrollToExplore: "Kəşf etmək üçün sürüşdürün",
    },
    skills: {
      label: "Bacarıqlar",
      title: "Texnologiya Stack",
      mainTech: "Əsas Texnologiyalar",
      otherTech: "Digər Texnologiyalar",
    },
    projects: {
      label: "Portfolio",
      title: "Seçilmiş Layihələr",
      descriptions: {
        ecommerce:
          "MERN-stack blog platforması. Next.js, Node.js, MongoDB inteqrasiyası.",
      },
    },
    experience: {
      label: "Karyera",
      title: "Təcrübə",
      present: "İndiyədək",
      descriptions: {
        senior:
          "MERN stack istifadə edərək tam funksional blog platforması hazırladım və dəstəkləyirəm. Node.js və Express ilə RESTful API-lər yaratdım, MongoDB sxemləri dizayn etdim və Next.js və TypeScript ilə responsive UI komponentləri qurdum. Autentifikasiya, fayl yükləmə və real vaxt funksiyaları inteqrasiya etdim.",
        fullstack:
          "Müştərilər üçün fərdi portfolio veb saytları və veb tətbiqləri hazırladım. React və Next.js kimi müasir freymvorklar ilə işlədim, responsive dizaynlar tətbiq etdim və performansı optimallaşdırdım. Kreativ viziyaları həyata keçirmək üçün dizaynerlərlə əməkdaşlıq etdim.",
        frontend:
          "Pixel-perfect və responsive istifadəçi interfeyslərinin yaradılmasına fokuslanmış freelance frontend layihələri təqdim etdim. React ekosistemi, müasir CSS texnikaları və performans optimallaşdırmasında ixtisaslaşdım. Tələbləri başa düşmək və keyfiyyətli həllər təqdim etmək üçün müştərilərlə birbaşa işlədim.",
      },
    },
    contact: {
      label: "Əlaqə",
      title: "Bir Layihə Düşünürsünüz?",
      subtitle:
        "Yeni layihələr və imkanlar üçün həmişə açığam. Bir fikriniz varsa və ya sadəcə salam demək istəyirsinizsə, mənə yazmaqdan çəkinməyin.",
      email: "Email",
      location: "Yer",
      locationValue: "Bakı, Azərbaycan",
      form: {
        name: "Ad",
        namePlaceholder: "Adınız",
        email: "Email",
        emailPlaceholder: "email@example.com",
        message: "Mesaj",
        messagePlaceholder: "Layihəniz haqqında məlumat verin...",
        send: "Göndər",
      },
    },
    footer: {
      rights: "Bütün hüquqlar qorunur.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
