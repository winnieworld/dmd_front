import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

// interface part

interface Props {
  checked: boolean;
  children?: string;
  onClick: (ev: MouseEvent<HTMLElement>) => void;
}

const CheckBox: React.FC<Props> = ({ onClick, checked, ...props }) => {
  return (
    <CheckBoxCoverStyled onClick={onClick}>
      <CheckBoxStyled type="checkbox" checked={checked} />
      {props.children}
    </CheckBoxCoverStyled>
  );
};

const CheckBoxCoverStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

const CheckBoxStyled = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;
  margin-right: 8px;
  &:checked {
    border-color: #141414;
    background-color: #141414;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 14 8.5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.5L5 8.5L13 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-size: 65%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export default CheckBox;
