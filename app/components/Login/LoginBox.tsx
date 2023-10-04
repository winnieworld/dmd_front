"use client";
import { login } from "@/axios/user/index";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { BoldNomalText, loadEffect, Center } from "../../../styles/base";
import Button from "../Button/Button";
import Input from "../Input/Input";

const LoginBox = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPW] = useState<string>("");
  const emailReg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
  const router = useRouter();
  const [error, setError] = useState<string>("");

  return (
    <Container>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        error={error === "email" ? "가입되지 않은 이메일 주소입니다." : ""}
      />
      <Input
        value={pw}
        onChange={(e) => setPW(e.target.value)}
        placeholder="비밀번호"
        margin="16px 0 40px"
        error={error === "pw" ? "비밀번호가 일치하지 않습니다." : ""}
        type="password"
      />

      <Button
        onClick={(e) => {
          const response = login({ email, password: pw });
          response.then(({ data, status }: any) => {
            if (status === 201) {
              console.log(data.access_token);
              router.push("/home");
            } else {
              console.log(data);
              setError(data.message.includes("ID") ? "email" : "pw");
            }
          });
        }}
        disabled={!(emailReg.test(email) && pw.length > 9)}
        margin="40px 0 24px"
      >
        로그인
      </Button>

      <Center direction="ALL" isColumn={false}>
        <BoldNomalText pointer>비밀번호 찾기</BoldNomalText>
      </Center>
    </Container>
  );
};
const Container = styled.div`
  opercity: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 88px 40px 0;
`;
export default LoginBox;
