"use client";

import { MaxSize } from "../../styles/base";
import LoginBox from "../components/Login/LoginBox";
import Header from "../components/Header/Header";

const login = () => {
  return (
    <>
      <Header marginBottom="40px">이메일 로그인</Header>
      <MaxSize>
        <LoginBox />
      </MaxSize>
    </>
  );
};

export default login;
