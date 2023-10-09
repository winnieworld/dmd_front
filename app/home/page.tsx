"use client";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import FriendsList from "../components/FriendList/FriendList";
import Feed from "../components/\bFeed/Feed";
import { Scroll } from "@/styles/base";

const Container = styled.div`
  height: 100%;
`;

const friendListMock = [
  { id: 0, nickName: "woohee", img: "" },
  { id: 0, nickName: "suno", img: "" },
  { id: 0, nickName: "hanbin", img: "" },
  { id: 0, nickName: "seona", img: "" },
  { id: 0, nickName: "hello", img: "" },
  { id: 0, nickName: "dadido", img: "" },
  { id: 0, nickName: "hanbin", img: "" },
  { id: 0, nickName: "seona", img: "" },
  { id: 0, nickName: "hello", img: "" },
  { id: 0, nickName: "dadido", img: "" },
];
const feedsMock = [
  {
    id: 1,
    nickName: "sunno",
    content: "마라엽떡 먹어서 행복하다.",
    time: "2시간전",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMDFfNjUg/MDAxNjE0NTI4ODc2NzQ0.pWSoz-Jz0w_oGaU0CGeY5ft44-JR0-imABKI8c75HZUg.TzCOn_c2cG2Z_Ih5q1hT9tNMozqbha7PYXK0NyMUObog.JPEG.qkrchdud5/output_2772876332.jpg?type=w800",
  },
  {
    id: 1,
    nickName: "sunno",
    content: "마라엽떡 먹어서 행복하다.",
    time: "2시간전",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMDFfNjUg/MDAxNjE0NTI4ODc2NzQ0.pWSoz-Jz0w_oGaU0CGeY5ft44-JR0-imABKI8c75HZUg.TzCOn_c2cG2Z_Ih5q1hT9tNMozqbha7PYXK0NyMUObog.JPEG.qkrchdud5/output_2772876332.jpg?type=w800",
  },
  {
    id: 1,
    nickName: "sunno",
    content: "마라엽떡 먹어서 행복하다.",
    time: "2시간전",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMDFfNjUg/MDAxNjE0NTI4ODc2NzQ0.pWSoz-Jz0w_oGaU0CGeY5ft44-JR0-imABKI8c75HZUg.TzCOn_c2cG2Z_Ih5q1hT9tNMozqbha7PYXK0NyMUObog.JPEG.qkrchdud5/output_2772876332.jpg?type=w800",
  },
];
const Home: NextPage = () => {
  return (
    <Layout menu="home">
      <Scroll>
        <FriendsList Friends={friendListMock} />
        <Feed feeds={feedsMock} />
      </Scroll>
    </Layout>
  );
};

export default Home;
