"use client";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";
import { FlexBox, HeaderName } from "@/styles/base";
import Header from "./Header";
import FileLoader from "./FileLoader";

const Create = () => {
  return (
    <Layout menu="create">
      <Header />
      <FileLoader />
    </Layout>
  );
};

export default Create;
