"use client";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import Profile from "./profile";
import MyBoard from "./myBoard/Index";

const MyPage = () => {
  return (
    <Layout menu="myPage">
      <Profile />
      <Division />
      <MyBoard />
    </Layout>
  );
};

const Division = styled.div`
  width: 100%;
  height: 8px;
  background: #ebebeb;
`;
export default MyPage;
