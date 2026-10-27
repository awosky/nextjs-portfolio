import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type ITheme = "light" | "dark";
export interface IThemeContext {
  theme: ITheme;
  setTheme: Dispatch<SetStateAction<ITheme>>;
}

export interface INavigation {
  name: string;
}

export interface INavigationContext {
  homeSection: MutableRefObject<HTMLInputElement | null> | null;
  skillSection: MutableRefObject<HTMLInputElement | null> | null;
  portoSection: MutableRefObject<HTMLInputElement | null> | null;
  contactSection: MutableRefObject<HTMLInputElement | null> | null;
}

export interface ISkill {
  name: string;
  src: string;
  level: string;
}

export interface IPortfolio {
  name: string;
  src: string;
  link: string;
  position: IPosition;
}

export interface IPortfolioItem {
  name: string;
  src: string;
  link: string;
}

export interface IPortfolioItems {
  wespace: IPortfolioItem;
  ladangShop: IPortfolioItem;
  resolusiApresiasi: IPortfolioItem;
  garutMenawan: IPortfolioItem;
  ikaemerce: IPortfolioItem;
  pesanSayur: IPortfolioItem;
  myTodo: IPortfolioItem;
  myWallet: IPortfolioItem;
  undanganGratis: IPortfolioItem;
  muslimLite: IPortfolioItem;
  simpleChatbot: IPortfolioItem;
  koneksiKata: IPortfolioItem;
  launchKit: IPortfolioItem;
  hitungKurs: IPortfolioItem;
  autoRefresh: IPortfolioItem;
  refreshMate: IPortfolioItem;
}

export type IPortfolioId = keyof IPortfolioItems;

export interface IPortfolioOrder {
  desktop: IPortfolioId[];
  mobile: IPortfolioId[];
}

export interface IContact {
  name: string;
  src: string;
  link: string;
  isSocmed: boolean;
  position: IPosition;
}

interface IPosition {
  desktop: number;
  mobile: number;
}
