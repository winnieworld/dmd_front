import { useRouter } from "next/navigation";
import styled from "styled-components";
import { HeaderName, MaxSize } from "@/styles/base";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { LayoutType } from "@/Types/index";

const HeadMeta = ({ children, menu }: LayoutType) => {
  const router = useRouter();

  useAuthRedirect();
  return (
    <MaxSize>
      <RelativeContainer>
        {menu !== "myPage" && (
          <Header>
            {menu === "home" && (
              <img
                src={"/assets/logo.svg"}
                alt="logo"
                style={{ width: "75px" }}
              />
            )}
            {menu === "explore" && <HeaderName>추천</HeaderName>}
            {/* {menu !== "store" && (
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "12px" }}
                >
                  <path
                    d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
                    fill="#435065"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7264 2.95706L16.2732 22.0433C16.1222 22.5718 15.7976 22.5958 15.5561 22.1127L10.9998 13.0002L1.92266 9.36931C1.41298 9.16544 1.41929 8.86034 1.9567 8.6812L21.0429 2.31913C21.5714 2.14297 21.8745 2.43878 21.7264 2.95706ZM19.0351 5.0966L6.81197 9.17097L12.4486 11.4256L15.4893 17.507L19.0351 5.0966Z"
                    fill="#435065"
                  />
                </svg>
              </div>
            )} */}
          </Header>
        )}
        {menu === "create" || menu === "myPage" ? (
          <>{children}</>
        ) : (
          <Container>{children}</Container>
        )}
        <BottomMenu>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              router.push(`/home`);
            }}
          >
            <path
              d={
                menu === "home"
                  ? "M21 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H21V22H6C4.34315 22 3 20.6569 3 19V4C3 2.89543 3.89543 2 5 2H21V18ZM16 9V7H8V9H16Z"
                  : "M21 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H21V22H6C4.34315 22 3 20.6569 3 19V4C3 2.89543 3.89543 2 5 2H21V18ZM5 16.05C5.16156 16.0172 5.32877 16 5.5 16H19V4H5V16.05ZM16 9H8V7H16V9Z"
              }
              fill="#435065"
            />
          </svg>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              router.push(`/explore`);
            }}
          >
            <path
              d={
                menu === "explore"
                  ? "M18.781 16.6168L23.0637 20.8995L21.6495 22.3137L17.3668 18.031C15.8269 19.263 13.874 20 11.75 20C6.782 20 2.75 15.968 2.75 11C2.75 6.032 6.782 2 11.75 2C16.718 2 20.75 6.032 20.75 11C20.75 13.124 20.013 15.0769 18.781 16.6168Z"
                  : "M18.781 16.6168L23.0637 20.8995L21.6495 22.3137L17.3668 18.031C15.8269 19.263 13.874 20 11.75 20C6.782 20 2.75 15.968 2.75 11C2.75 6.032 6.782 2 11.75 2C16.718 2 20.75 6.032 20.75 11C20.75 13.124 20.013 15.0769 18.781 16.6168ZM16.7747 15.8748C17.9975 14.6146 18.75 12.8956 18.75 11C18.75 7.1325 15.6175 4 11.75 4C7.8825 4 4.75 7.1325 4.75 11C4.75 14.8675 7.8825 18 11.75 18C13.6456 18 15.3646 17.2475 16.6248 16.0247L16.7747 15.8748Z"
              }
              fill="#435065"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              router.push(`/create`);
            }}
          >
            <path
              d={
                menu === "create"
                  ? "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                  : "M4.5 3H20.5C21.0523 3 21.5 3.44772 21.5 4V20C21.5 20.5523 21.0523 21 20.5 21H4.5C3.94772 21 3.5 20.5523 3.5 20V4C3.5 3.44772 3.94772 3 4.5 3ZM5.5 5V19H19.5V5H5.5ZM11.5 11V7H13.5V11H17.5V13H13.5V17H11.5V13H7.5V11H11.5Z"
              }
              fill="#435065"
            />
          </svg>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              router.push(`/store`);
            }}
          >
            <path
              d={
                menu === "store"
                  ? "M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"
                  : "M21.25 13.2422V20H22.25V22H2.25V20H3.25V13.2422C2.04401 12.435 1.25 11.0602 1.25 9.5C1.25 8.67286 1.47443 7.87621 1.88322 7.19746L4.5953 2.5C4.77393 2.1906 5.10406 2 5.46132 2H19.0387C19.3959 2 19.7261 2.1906 19.9047 2.5L22.6075 7.18172C23.0256 7.87621 23.25 8.67286 23.25 9.5C23.25 11.0602 22.456 12.435 21.25 13.2422ZM19.25 13.9725C19.0858 13.9907 18.919 14 18.75 14C17.4909 14 16.3289 13.478 15.5 12.6132C14.6711 13.478 13.5091 14 12.25 14C10.9909 14 9.8289 13.478 9 12.6132C8.1711 13.478 7.00911 14 5.75 14C5.581 14 5.41417 13.9907 5.25 13.9725V20H19.25V13.9725ZM6.03865 4L3.60598 8.21321C3.37409 8.59843 3.25 9.0389 3.25 9.5C3.25 10.8807 4.36929 12 5.75 12C6.78096 12 7.69467 11.3703 8.07179 10.4295C8.4074 9.59223 9.5926 9.59223 9.92821 10.4295C10.3053 11.3703 11.219 12 12.25 12C13.281 12 14.1947 11.3703 14.5718 10.4295C14.9074 9.59223 16.0926 9.59223 16.4282 10.4295C16.8053 11.3703 17.719 12 18.75 12C20.1307 12 21.25 10.8807 21.25 9.5C21.25 9.0389 21.1259 8.59843 20.8847 8.19746L18.4613 4H6.03865Z"
              }
              fill="#435065"
            />
          </svg>
          <ProfileBox
            onClick={() => {
              router.push(`/myPage`);
            }}
            style={{ border: menu === "myPage" ? "2px solid #141414" : "none" }}
          />
        </BottomMenu>
      </RelativeContainer>
    </MaxSize>
  );
};

const ProfileBox = styled.div`
  background: #d9d9d9;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const BottomMenu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;
const Container = styled.div`
  padding: 48px 0;
`;
const RelativeContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

export default HeadMeta;
