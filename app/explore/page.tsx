"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Layout from "../components/Layout";
import styled from "styled-components";
import Button from "../components/Button/Button";
import { FlexBox } from "@/styles/base";

const tagMock = [{ selectedTag: [""] }];

const Explore = () => {
  const router = useRouter();
  const [tag, setTag] = useState("Best");

  return (
    <Layout menu="explore">
      <TagBox>
        <Button
          width="fit-content"
          onClick={() => {
            setTag("Best");
          }}
          disabled={false}
          padding="8px"
          borderRadius
          fontSize="12px"
          margin="0 8px 0 0"
        >
          DMD 추천
        </Button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            router.push("/tagSetPage");
          }}
        >
          <rect
            x="0.5"
            y="0.5"
            width="29"
            height="29"
            rx="3.5"
            fill="#F9F9F9"
          />
          <path d="M14 14V8H16V14H22V16H16V22H14V16H8V14H14Z" fill="#8C9DB9" />
          <rect
            x="0.5"
            y="0.5"
            width="29"
            height="29"
            rx="3.5"
            stroke="#C5CEDC"
          />
        </svg>
        {tagMock[0]?.selectedTag.length && (
          <ChatBg>
            관심주제를 설정해보세요!
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "4px" }}
            >
              <path
                d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z"
                fill="#C5CEDC"
              />
            </svg>
          </ChatBg>
        )}
      </TagBox>
      <BoardsLayout>
        <tbody>
          <BoardsTr>
            <PhotoBlock>
              <Photo src="/assets/test.png" />
            </PhotoBlock>
            <PhotoBlock>
              <Photo src="/assets/test.png" />
            </PhotoBlock>
            <PhotoBlock>
              <Photo src="/assets/test.png" />
            </PhotoBlock>
          </BoardsTr>
          <BoardsTr>
            <PhotoBlock>
              <Photo src="/assets/test2.png" />
            </PhotoBlock>
            <PhotoBlock>
              <Photo src="/assets/test2.png" />
            </PhotoBlock>
            <PhotoBlock>
              <Photo src="/assets/test2.png" />
            </PhotoBlock>
          </BoardsTr>
        </tbody>
      </BoardsLayout>
    </Layout>
  );
};

const TagBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;
const PhotoBlock = styled.td`
  border: 2px solid #fff;
  border-top: none;
  height: content-fit;
  font-size: 0;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;

const BoardsLayout = styled.table`
  width: 100%;
`;
const BoardsTr = styled.tr`
  height: 100%;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;
const Photo = styled.img`
  width: 100%;
  background-size: cover;
  cursor: pointer;
`;

const ChatBg = styled.div`
  background-image: url("/assets/chat-bg.svg");
  background-repeat: no-repeat;
  padding: 8px 8px 8px 15px;
  margin-left: 8px;
  display: flex;
  justify-content: end;
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default Explore;
