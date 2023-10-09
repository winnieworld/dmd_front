/* eslint-disable react/jsx-key */
import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/navigation";

interface FrandType {
  id: number;
  nickName: string;
  img: string;
}

interface Props {
  Friends?: FrandType[];
}

const FriendsList: React.FC<Props> = ({ Friends, ...props }) => {
  const router = useRouter();

  return (
    <FlexBox>
      <ProfileBox>
        <ProfileImg />
        <ProfileName>내스토리</ProfileName>
      </ProfileBox>
      {Friends?.map((data: FrandType, idx: number) => {
        return (
          <ProfileBox
            onClick={() => {
              router.push(`fid/${data.id}`);
            }}
            style={{ marginRight: Friends.length - 1 === idx ? "0px" : "12px" }}
          >
            <ProfileImg />
            <ProfileName>{data.nickName}</ProfileName>
          </ProfileBox>
        );
      })}
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  margin-bottom: 8px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileBox = styled.div`
  margin-right: 12px;
`;

const ProfileImg = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #d9d9d9;
`;

const ProfileName = styled.div`
  color: #141414;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export default FriendsList;
