import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

// interface part
interface StyledProps {
  width?: string;
  margin?: string;
}

interface ButtonStyledProps {
  IsWhite?: boolean;
  fontSize?: string;
  padding?: string;
  borderRadius?: boolean;
}

interface Props extends StyledProps, ButtonStyledProps {
  onClick: (ev: MouseEvent<HTMLElement>) => void;
  disabled: boolean;
  children: string;
}
const mainColor = "#435065";

const Button: React.FC<Props> = ({ onClick, disabled, ...props }) => {
  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    onClick ? onClick(e) : console.log("click!");
  };
  return (
    <ButtonCoverStyled width={props.width} margin={props.margin}>
      <ButtonStyled
        onClick={clickHandler}
        disabled={disabled}
        IsWhite={props.IsWhite}
        padding={props.padding}
        fontSize={props.fontSize}
        borderRadius={props.borderRadius}
      >
        {props.children}
      </ButtonStyled>
    </ButtonCoverStyled>
  );
};

const ButtonCoverStyled = styled.div<StyledProps>`
  width: ${(props: StyledProps) => (props.width ? props.width : "100%")};
  margin: ${(props: StyledProps) => (props.margin ? props.margin : "0")};
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: ButtonStyledProps) =>
    props.IsWhite ? "#fff" : mainColor};
  color: ${(props: ButtonStyledProps) => (props.IsWhite ? mainColor : "#fff")};
  border: ${(props: ButtonStyledProps) =>
    props.IsWhite ? `1px solid ${mainColor}` : "none"};
  border-radius: ${(props: ButtonStyledProps) =>
    props.borderRadius ? "4px" : "none"};
  text-align: center;
  font-family: Pretendard;
  font-size: ${(props: ButtonStyledProps) =>
    props.fontSize ? props.fontSize : "16px"};
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  padding: ${(props: ButtonStyledProps) =>
    props.padding ? props.padding : "16px 4px"};
  cursor: pointer;

  &:disabled {
    background: #d6d6d6;
    &:hover {
      background: #d6d6d6;
    }
  }
  &:hover {
    background: ${(props: ButtonStyledProps) =>
      props.IsWhite ? "#E2E7EE" : "#6F85A8"};
  }
`;

export default Button;
