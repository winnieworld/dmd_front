import React from "react";
import styled, { keyframes } from "styled-components";

// props types
interface CenterProps {
  direction: string;
  isColumn?: boolean;
}

// keyframes
export const loadEffect = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;

}

`;

export const MaxSize = styled.div`
  max-width: 978px;
  height: 100%;
  margin: 0 auto;
`;

// layout

export const Center = styled.div<{ direction: string; isColumn?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: ${(props: CenterProps) =>
    props.direction === "ROW" || props.direction === "ALL"
      ? "center"
      : "start"};
  align-items: ${(props: CenterProps) =>
    props.direction === "COLUMN" || props.direction === "ALL"
      ? "center"
      : "start"};
  flex-direction: ${(props: CenterProps) =>
    props.isColumn ? "column" : "row"};
`;

export const BoldNomalText = styled.div<{ pointer?: boolean }>`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.286%;
  cursor: ${(props) => (props.pointer ? "pointer" : "nomal")};
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
export const AbsoluteRight = styled.div`
  position: absolute;
  right: 0;
  top: 12px;
`;
export const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderName = styled.div`
  color: #141414;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Scroll = styled.div`
  height: 100vh;
  padding-bottom: 94px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
