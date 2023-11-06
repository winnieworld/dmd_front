"use client";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const MyBoard = () => {
  const [showType, setShowType] = useState<"boards" | "images">("images");
  return (
    <Header>
      전체글
      <FlexBox>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setShowType("images");
          }}
          style={{ marginRight: "8px" }}
        >
          <path
            d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"
            fill={showType === "images" ? "#435065" : "#D6D6D6"}
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setShowType("boards");
          }}
        >
          <path
            d="M22 16V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V16H22ZM21 3C21.5523 3 22 3.44772 22 4V14H2V4C2 3.44772 2.44772 3 3 3H21Z"
            fill={showType === "boards" ? "#435065" : "#D6D6D6"}
          />
        </svg>
      </FlexBox>
    </Header>
  );
};
const Header = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: cneter;
  justify-content: space-between;
  color: #141414;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border-bottom: 1px solid #ebebeb;
`;
const FlexBox = styled.div`
  display: flex;
`;
export default MyBoard;
