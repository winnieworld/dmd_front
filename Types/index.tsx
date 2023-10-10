import React, { ChangeEvent } from "react";

//InputComponent Types

export type InputValue = string | number | ReadonlyArray<string>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export interface joinType {
  nickname: string;
  email: string;
  password: string;
  year: string;
  markettingAgree: boolean;
}
export interface loginType {
  email: string;
  password: string;
}

export type LayoutType = React.PropsWithChildren & {
  menu: string;
  setter?: Function;
};

export interface FeedInfoType {
  id: number;
  nickName: string;
  contents: string;
  title: string;
  imageUrl: string;
  updated_at: string;
}
