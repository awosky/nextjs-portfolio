import { CONTACT, HOME, PORTFOLIO, SKILLS } from "src/constants/global";
import {
  IContact,
  INavigation,
  IPortfolio,
  ISkill,
} from "src/interfaces/global";

export const navigationList: INavigation[] = [
  { name: HOME },
  { name: SKILLS },
  { name: PORTFOLIO },
  { name: CONTACT },
];

export const skillList: ISkill[] = [
  { name: "Javascript", src: "/icons/javascript.svg", level: "⭐⭐⭐⭐" },
  { name: "ReactJS", src: "/icons/reactjs.svg", level: "⭐⭐⭐⭐" },
  { name: "NextJS", src: "/icons/nextjs.svg", level: "⭐⭐⭐⭐" },
  { name: "ExpressJS", src: "/icons/expressjs.svg", level: "⭐⭐" },
  { name: "Java", src: "/icons/java.svg", level: "⭐⭐" },
  { name: "Kotlin", src: "/icons/kotlin.svg", level: "⭐⭐" },
  { name: "Dropwizard", src: "/icons/dropwizard.svg", level: "⭐⭐" },
  { name: "Firebase", src: "/icons/firebase.svg", level: "⭐⭐⭐" },
];

export const portfolioList: IPortfolio[] = [
  {
    name: "WeSpace",
    src: "/images/porto-wespace.webp",
    link: "https://wespace.faisalhakim.com/",
    position: {
      desktop: 1,
      mobile: 1,
    },
  },
  {
    name: "Ladang Shop",
    src: "/images/porto-ladangshop.webp",
    link: "https://ladangshop.faisalhakim.com/",
    position: {
      desktop: 10,
      mobile: 6,
    },
  },
  {
    name: "Resolusi Apresiasi",
    src: "/images/porto-resolusiapresiasi.webp",
    link: "https://resolusiapresiasi.faisalhakim.com/",
    position: {
      desktop: 3,
      mobile: 4,
    },
  },
  {
    name: "Garut Menawan",
    src: "/images/porto-garutmenawan.webp",
    link: "https://garutmenawan.faisalhakim.com/",
    position: {
      desktop: 4,
      mobile: 9,
    },
  },
  {
    name: "Ikaemerce",
    src: "/images/porto-ikaemerce.webp",
    link: "https://ikaemerce.faisalhakim.com/",
    position: {
      desktop: 6,
      mobile: 7,
    },
  },
  {
    name: "Pesan Sayur",
    src: "/images/porto-pesansayur.webp",
    link: "https://pesansayur.faisalhakim.com/",
    position: {
      desktop: 7,
      mobile: 3,
    },
  },
  {
    name: "My ToDo",
    src: "/images/porto-mytodo.webp",
    link: "https://todo.faisalhakim.com/",
    position: {
      desktop: 8,
      mobile: 5,
    },
  },
  {
    name: "My Wallet",
    src: "/images/porto-mywallet.webp",
    link: "https://wallet.faisalhakim.com/",
    position: {
      desktop: 5,
      mobile: 8,
    },
  },
  {
    name: "Undangan Gratis",
    src: "/images/porto-invitation.webp",
    link: "https://undangan-gratis.vercel.app/",
    position: {
      desktop: 2,
      mobile: 2,
    },
  },
  {
    name: "Muslim Lite",
    src: "/images/porto-muslimlite.webp",
    link: "https://muslim-lite.vercel.app/",
    position: {
      desktop: 9,
      mobile: 10,
    },
  },
];

export const contactList: IContact[] = [
  {
    name: "Github",
    src: "/images/contact-github.svg",
    link: "https://github.com/awosky",
    isSocmed: true,
    position: {
      desktop: 1,
      mobile: 2,
    },
  },
  {
    name: "Youtube",
    src: "/images/contact-youtube.svg",
    link: "https://www.youtube.com/channel/UC75t9nzAoT83IrPx8VIAibA",
    isSocmed: true,
    position: {
      desktop: 2,
      mobile: 3,
    },
  },
  {
    name: "Logo",
    src: "/images/logo.webp",
    link: "/",
    isSocmed: false,
    position: {
      desktop: 3,
      mobile: 1,
    },
  },
  {
    name: "Instagram",
    src: "/images/contact-instagram.svg",
    link: "https://instagram.com/awoskyhakim",
    isSocmed: true,
    position: {
      desktop: 4,
      mobile: 4,
    },
  },
  {
    name: "Linkedin",
    src: "/images/contact-linkedin.svg",
    link: "https://id.linkedin.com/in/faisal-nur-hakim-17a4ba149",
    isSocmed: true,
    position: {
      desktop: 5,
      mobile: 5,
    },
  },
];
