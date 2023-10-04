import React from "react";
import { useRouter } from "next/navigation";
import styled, { css } from "styled-components";

// interface part
interface StyledProps {
  marginBottom?: string;
}

const Header = ({ ...props }) => {
  const router = useRouter();

  return (
    <HeaderStyled marginBottom={props.marginBottom}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "8px" }}
        onClick={() => {
          router.back();
        }}
      >
        <path
          d="M10 18L4 12L10 6"
          stroke="#435065"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      {props.children}
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header<StyledProps>`
  padding: 12px 16px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  background: white;
  margin-bottom: ${(props: StyledProps) =>
    props.marginBottom ? props.marginBottom : "0"};
`;

export default Header;
