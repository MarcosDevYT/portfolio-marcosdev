import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GsapIcon, NextIcon } from "./icons";

// Navbar Items
export const menuItems = [
  { text: "Inicio", link: "#" },
  { text: "Sobre mí", link: "#about" },
  { text: "Trabajos", link: "#trabajos" },
  { text: "Servicios", link: "#servicios" },
  { text: "Contactame", link: "#contact" },
];

// Footer Items
export const footerItems = [
  { text: "Inicio", link: "/" },
  { text: "Sobre mí", link: "/sobre-mi" },
  { text: "Trabajos", link: "/trabajos" },
  { text: "Contactame", link: "#contact" },
];

// Social Links
export const socialLinks = [
  { href: "#", title: "LinkedIn" },
  { href: "#", title: "GitHub" },
  { href: "#", title: "Whatsapp" },
  { href: "#", title: "Instagram" },
];

// Stack Items
export const stackItems = [
  {
    id: 0,
    items: [
      { title: "ReactJS", icon: FaReact },
      { title: "NextJS", icon: NextIcon, personalizado: true, next: true },
      { title: "Expo", icon: SiExpo },
    ],
  },
  {
    id: 1,
    items: [
      { title: "Typescript", icon: SiTypescript },
      { title: "TailwindCSS", icon: SiTailwindcss },
      { title: "GSAP", icon: GsapIcon, personalizado: true },
      { title: "Framer Motion", icon: TbBrandFramerMotion, fillNone: true },
      { title: "Supabase", icon: SiSupabase },
      { title: "Javascript", icon: SiJavascript },
    ],
  },
  {
    id: 2,
    items: [
      { title: "NodeJs", icon: SiNodedotjs },
      { title: "Express", icon: SiExpress },
      { title: "PostgreeSQL", icon: SiPostgresql },
      { title: "Vercel", icon: SiVercel },
      { title: "Github", icon: SiGithub },
      { title: "Figma", icon: SiFigma },
      { title: "CSS", icon: SiCss3 },
      { title: "HTML", icon: SiHtml5 },
    ],
  },
];

// Stack Items Mobile
export const stackItemsMobile = [
  {
    id: 0,
    items: [
      { title: "ReactJS", icon: FaReact },
      { title: "NextJS", icon: NextIcon, personalizado: true, next: true },
      { title: "Expo", icon: SiExpo },
      { title: "Typescript", icon: SiTypescript },
      { title: "TailwindCSS", icon: SiTailwindcss },
      { title: "GSAP", icon: GsapIcon, personalizado: true },
      { title: "Framer Motion", fillNone: true, icon: TbBrandFramerMotion },
      { title: "Supabase", icon: SiSupabase },
      { title: "Javascript", icon: SiJavascript },
      { title: "NodeJs", icon: SiNodedotjs },
      { title: "Express", icon: SiExpress },
      { title: "PostgreeSQL", icon: SiPostgresql },
      { title: "Vercel", icon: SiVercel },
      { title: "Github", icon: SiGithub },
      { title: "Figma", icon: SiFigma },
      { title: "CSS", icon: SiCss3 },
      { title: "HTML", icon: SiHtml5 },
    ],
  },
];
