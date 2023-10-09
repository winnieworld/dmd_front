"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
import styled from "styled-components";
import { FlexBox, HeaderName } from "@/styles/base";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Icon
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          router.back();
        }}
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#435065"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Icon>

      <HeaderName>새 다이어리</HeaderName>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  position: relation;
`;
const Icon = styled.svg`
  position: absolute;
  left: 16px;
  top: 12px;
`;
export default Header;
