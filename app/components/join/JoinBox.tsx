import { join } from "@/axios/user/index";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { Bottom, FlexBox, MaxSize } from "../../../styles/base";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import Input from "../Input/Input";

interface emailType {
  email: string;
  isUnique: null | boolean;
  isVaild: null | boolean;
}
interface pwType {
  pw: string;
  checkPw: string;
  isVaild: null | boolean;
}
interface agreeType {
  all: boolean;
  person: boolean;
  marketting: boolean;
}
const JoinBox = () => {
  const router = useRouter();
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1025 });

  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<emailType>({
    email: "",
    isUnique: null,
    isVaild: null,
  });
  const [pw, setPW] = useState<pwType>({ pw: "", checkPw: "", isVaild: null });
  const [year, setYear] = useState<string>("");
  const [agrees, setAgrees] = useState<agreeType>({
    all: false,
    person: false,
    marketting: false,
  });
  const emailReg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,15}$/;
  return (
    <>
      <Container>
        <Input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="이름"
        />
        <Input
          value={email.email}
          onChange={(e) => {
            setEmail({ ...email, email: e.target.value });
          }}
          placeholder="이메일"
          margin="16px 0 "
          error={
            email.isVaild || email.isVaild === null
              ? email.isUnique || email.isUnique === null
                ? ""
                : "이미 가입된 이메일 주소입니다. 다른 이메일을 입력해주세요."
              : "올바른 이메일을 입력해 주세요."
          }
        />
        {email.isUnique === false && (
          <FlexBox>
            <Button
              disabled={false}
              borderRadius={true}
              onClick={() => router.push("/login")}
              padding="8px"
              fontSize="12px"
              margin="-8px 4px 0 0"
              IsWhite
            >
              로그인
            </Button>
            <Button
              disabled={false}
              borderRadius={true}
              onClick={() => router.push("/login")}
              padding="8px"
              fontSize="12px"
              margin="-8px 0 0 4px"
              IsWhite
            >
              비밀번호 찾기
            </Button>
          </FlexBox>
        )}
        <Input
          value={pw.pw}
          onChange={(e) => setPW({ ...pw, pw: e.target.value })}
          placeholder="비밀번호 (영문+숫자+특수문자 10자 이상)"
          margin="16px 0"
          error={
            pw.isVaild || pw.isVaild === null
              ? ""
              : "비밀번호 (영문+숫자+특수문자 10자 이상)"
          }
          type="password"
        />
        <Input
          value={pw.checkPw}
          onChange={(e) => setPW({ ...pw, checkPw: e.target.value })}
          placeholder="비밀번호 재입력"
          margin="16px 0"
          error={
            !pw.checkPw || pw.pw === pw.checkPw
              ? ""
              : "비밀번호가 일치하지 않습니다."
          }
          type="password"
        />
        <Input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="출생년도 (ex. 1990)"
          margin="16px 0 40px"
        />
        <CheckBox
          onClick={(e) => {
            setAgrees({
              all: !agrees.all,
              person: !agrees.all,
              marketting: !agrees.all,
            });
          }}
          checked={agrees.person && agrees.marketting}
        >
          서비스 이용약관 전체 동의
        </CheckBox>
        <Division />
        <CheckBox
          onClick={(e) => {
            setAgrees({ ...agrees, person: !agrees.person });
          }}
          checked={agrees.person}
        >
          [필수] 이용약관 및 개인정보처리방침
        </CheckBox>
        <CheckBox
          onClick={(e) => {
            setAgrees({ ...agrees, marketting: !agrees.marketting });
          }}
          checked={agrees.marketting}
        >
          [선택] 마케팅 정보 수집 및 수신 동의
        </CheckBox>
      </Container>
      <Bottom>
        <MaxSize>
          <Button
            onClick={(e) => {
              //password vaild check
              if (!pwReg.test(pw.pw)) {
                return setPW({ ...pw, isVaild: false });
              } else {
                setPW({ ...pw, isVaild: true });
              }

              //email vaild check
              if (!emailReg.test(email.email)) {
                return setEmail({ ...email, isVaild: false });
              } else {
                setEmail({ ...email, isVaild: true });
              }
              if (new Date().getFullYear() <= +year || +year < 1930) {
                return alert("출생년도를 정확하게 적어주세요.");
              }

              const response = join({
                nickname,
                email: email.email,
                password: pw.pw,
                year,
                markettingAgree: agrees.marketting,
              });

              response.then((data) => {
                if (data === 201) router.push("/login");
                else alert("회원가입에 실패하였습니다.");
              });
            }}
            disabled={
              !(pw.pw && email.email && year && nickname && agrees.person)
            }
          >
            시작하기
          </Button>
          {isBigScreen && (
            <BottomBar
              disabled={
                !(pw.pw && email.email && year && nickname && agrees.person)
              }
            />
          )}
        </MaxSize>
      </Bottom>
    </>
  );
};
const Container = styled.div`
  opercity: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 88px 40px 88px;
`;

const Division = styled.div`
  background: #ebebeb;
  width: 100%;
  height: 1.5px;
`;

const BottomBar = styled.div<{ disabled: boolean }>`
  width: 100%;
  height: 34px;
`;
export default JoinBox;
