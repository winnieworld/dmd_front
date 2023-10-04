import styled from "styled-components";
import { LayoutType } from "@/Types/index";
import { FlexBox, HeaderName } from "@/styles/base";

const StoreLayout = ({ children, menu, ...props }: LayoutType) => {
  return (
    <div>
      <Header>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="#435065"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <HeaderName>DMD Store</HeaderName>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            fill="#435065"
          />
        </svg>
      </Header>
      <FlexBox>
        <SubMenu
          onClick={() => {
            if (props?.setter) props?.setter("sticker");
          }}
          selected={menu === "sticker"}
        >
          스티커
        </SubMenu>
        <SubMenu
          onClick={() => {
            if (props?.setter) props?.setter("wall");
          }}
          selected={menu === "wall"}
        >
          속지
        </SubMenu>
      </FlexBox>
      {children}
    </div>
  );
};
const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const SubMenu = styled.div<{ selected: boolean }>`
  flex: 1;
  color: ${(props) => (props.selected ? "#141414" : "#666")};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  line-height: normal;
  padding: 12px 24px;
  position: relative;
  &::after {
    display: ${(props) => (props.selected ? "block" : "none")};
    content: "";
    width: 100%;
    height: 2px;
    background: #435065;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export default StoreLayout;
