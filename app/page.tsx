"use client";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import LogoEffect from "./components/Login/LogoEffect";
import {
  MaxSize,
  Center,
  BoldNomalText,
  loadEffect,
  FlexBox,
} from "../styles/base";
import Button from "./components/Button/Button";

const Home: NextPage = () => {
  const router = useRouter();

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds < 5) setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <>
      <div style={{ width: "100%", background: "red", height: "100%" }}>
        test
      </div>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ani = styled.div`
  animation: ${loadEffect} 0.5s 0s linear alternate;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 66px;
  z-index: 1000;
  padding: 40px;
`;

const FlexEnd = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
`;

const SubText = styled.div`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-right: 8px;
`;

export default Home;
