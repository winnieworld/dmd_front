"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import StoreLayout from "../components/StoreLayout";

const Store = () => {
  const [menu, setMenu] = useState<string>("sticker");

  return (
    <Layout menu="store">
      <StoreLayout menu={menu} setter={setMenu}>
        {menu} 스토어 준비중입니다.
      </StoreLayout>
    </Layout>
  );
};

export default Store;
