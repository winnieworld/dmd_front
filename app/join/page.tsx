"use client";

import { MaxSize } from "../../styles/base";
import Header from "../components/Header/Header";
import JoinBox from "../components/join/JoinBox";

const join = () => {
  return (
    <MaxSize>
      <Header marginBottom="40px">회원가입</Header>
      <JoinBox />
    </MaxSize>
  );
};

export default join;
