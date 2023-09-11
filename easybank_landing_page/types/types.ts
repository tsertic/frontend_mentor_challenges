export interface IWhyEasyBankCard {
  _id: string;
  title: string;
  text: string;
  iconPath: string;
}
export interface IArticleCard {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  author: string;
}
export type socialNetwork =
  | "facebook"
  | "youtube"
  | "twitter"
  | "pintrest"
  | "instagram";

export interface ISocialIcon {
  _id: string;
  type: socialNetwork;
  url: string;
}
