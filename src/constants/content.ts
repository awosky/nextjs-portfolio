import { CONTACT, HOME, PORTFOLIO, SKILLS } from "src/constants/global";
import {
  IContact,
  INavigation,
  IPortfolioItems,
  IPortfolioOrder,
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
  { name: "NodeJS", src: "/icons/nodejs.svg", level: "⭐⭐⭐" },
  { name: "Java", src: "/icons/java.svg", level: "⭐⭐" },
  { name: "Kotlin", src: "/icons/kotlin.svg", level: "⭐⭐⭐⭐" },
  { name: "Kafka", src: "/icons/kafka.svg", level: "⭐⭐" },
  { name: "RabbitMQ", src: "/icons/rabbitmq.svg", level: "⭐⭐" },
];

export const portfolioItems: IPortfolioItems = {
  wespace: {
    name: "WeSpace",
    src: "/images/porto-wespace.webp",
    link: "https://wespace.faisalhakim.com/",
  },
  ladangShop: {
    name: "Ladang Shop",
    src: "/images/porto-ladangshop.webp",
    link: "https://ladangshop.faisalhakim.com/",
  },
  resolusiApresiasi: {
    name: "Resolusi Apresiasi",
    src: "/images/porto-resolusiapresiasi.webp",
    link: "https://resolusiapresiasi.faisalhakim.com/",
  },
  garutMenawan: {
    name: "Garut Menawan",
    src: "/images/porto-garutmenawan.webp",
    link: "https://garutmenawan.faisalhakim.com/",
  },
  ikaemerce: {
    name: "Ikaemerce",
    src: "/images/porto-ikaemerce.webp",
    link: "https://ikaemerce.faisalhakim.com/",
  },
  pesanSayur: {
    name: "Pesan Sayur",
    src: "/images/porto-pesansayur.webp",
    link: "https://pesansayur.faisalhakim.com/",
  },
  myTodo: {
    name: "My ToDo",
    src: "/images/porto-mytodo.webp",
    link: "https://todo.faisalhakim.com/",
  },
  myWallet: {
    name: "My Wallet",
    src: "/images/porto-mywallet.webp",
    link: "https://wallet.faisalhakim.com/",
  },
  undanganGratis: {
    name: "Undangan Gratis",
    src: "/images/porto-invitation.webp",
    link: "https://undangan-gratis.netlify.app/",
  },
  muslimLite: {
    name: "Muslim Lite",
    src: "/images/porto-muslimlite.webp",
    link: "https://muslim-lite.netlify.app/",
  },
  simpleChatbot: {
    name: "Simple Chatbot",
    src: "/images/porto-chatbot.webp",
    link: "https://chatbot.faisalhakim.com/",
  },
  koneksiKata: {
    name: "Koneksi Kata",
    src: "/images/porto-koneksikata.webp",
    link: "https://koneksi-kata.vercel.app/",
  },
  launchKit: {
    name: "Launch Kit",
    src: "/images/porto-launchkit.webp",
    link: "https://launch-kit-cyan.vercel.app/",
  },
  hitungKurs: {
    name: "Hitung Kurs",
    src: "/images/porto-hitungkurs.webp",
    link: "https://hitung-kurs.vercel.app/",
  },
  autoRefresh: {
    name: "Auto Refresh",
    src: "/images/porto-autorefresh.webp",
    link: "https://vite-simple-auto-refresh.vercel.app/",
  },
  refreshMate: {
    name: "Refresh Mate",
    src: "/images/porto-refreshmate.webp",
    link: "https://chromewebstore.google.com/detail/hcopkdjjjidlafpfpbpmendoaocjgcdg?utm_source=item-share-cb",
  },
};

export const portfolioOrder: IPortfolioOrder = {
  desktop: [
    "wespace",
    "undanganGratis",
    "koneksiKata",
    "resolusiApresiasi",
    "autoRefresh",
    "launchKit",
    "garutMenawan",
    "myWallet",
    "ladangShop",
    "refreshMate",
    "ikaemerce",
    "muslimLite",
    "simpleChatbot",
    "myTodo",
    "hitungKurs",
    "pesanSayur",
  ],
  mobile: [
    "wespace",
    "undanganGratis",
    "pesanSayur",
    "simpleChatbot",
    "ikaemerce",
    "myWallet",
    "resolusiApresiasi",
    "garutMenawan",
    "muslimLite",
    "myTodo",
    "ladangShop",
    "koneksiKata",
    "launchKit",
    "hitungKurs",
    "autoRefresh",
    "refreshMate",
  ],
};

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
