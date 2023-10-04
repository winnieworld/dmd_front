import React, { useState } from "react";
import styled from "styled-components";
import { InputChangeEvent, InputValue } from "../../../Types/index";
import Button from "../Button/Button";

// interface part
interface StyledProps {
  width?: string;
  margin?: string;
}
interface InputStyledProps {
  button?: boolean;
  error?: string;
}
interface Props extends StyledProps, InputStyledProps {
  placeholder?: string;
  value?: InputValue;
  type?: string;
  onChange?: (ev: InputChangeEvent) => void;
}

const Input: React.FC<Props> = ({
  value = "",
  onChange,
  placeholder = "",
  ...props
}) => {
  const [inputValue, setInputValue] = useState<InputValue>(value);

  const changeHandler = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
    onChange && onChange(e); // optional로 인한 코드
  };
  return (
    <InputCoverStyled width={props.width} margin={props.margin}>
      <InputStyled
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        error={props.error}
        type={props.type || "text"}
      />
      <Errormessage>{props.error}</Errormessage>
    </InputCoverStyled>
  );
};

const InputCoverStyled = styled.div<StyledProps>`
  width: ${(props: StyledProps) => (props.width ? props.width : "100%")};
  margin: ${(props: StyledProps) => (props.margin ? props.margin : "0")};
`;
const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  display: block;
  padding: 16px 4px;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "1.5px solid #E25241" : "1.5px solid #ebebeb"};
  color: #141414;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 114.286%;
  &::placeholder {
    color: #b3b3b3;
  }
  &:focus {
    outline: none;
    border-bottom: 1.5px solid #141414;
  }
`;
const Errormessage = styled.div`
  color: #e25241;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.286%;
  margin-top: 8px;
`;

export default Input;
