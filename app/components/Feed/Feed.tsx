/* eslint-disable react/jsx-key */
import { FlexBox } from "@/styles/base";
import { FeedInfoType } from "@/Types/index";
import styled from "styled-components";

interface Props {
  feeds?: FeedInfoType[];
}

const Feed: React.FC<Props> = ({ feeds }) => {
  return (
    <div>
      {feeds?.map((feed: FeedInfoType, idx: number) => (
        <div style={{ marginTop: idx === 0 ? "0" : "12px" }}>
          <FeedFlex>
            <FlexBox>
              <ProfileImg />
              <FeedNickName>{feed.nickName}</FeedNickName>
            </FlexBox>
            {/* 다음버전
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                fill="#141414"
              />
            </svg> */}
          </FeedFlex>
          <Background>
            <FeedImg src={feed.imageUrl}></FeedImg>
          </Background>
          {/* 다음 버전 */}
          {/* <FeedFlex style={{ margin: "4px 0" }}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
                  fill="#141414"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: "0 8px" }}
              >
                <path
                  d="M16.7088 20.8242L22 22L20.8242 16.7088C21.5746 15.3056 22 13.7025 22 12C22 6.47715 17.5229 2 12 2C6.4772 2 2 6.47715 2 12C2 17.5228 6.4772 22 12 22C13.7025 22 15.3056 21.5746 16.7088 20.8242ZM16.4193 18.711L15.7657 19.0605C14.6175 19.6745 13.3345 20 12 20C7.5817 20 4 16.4183 4 12C4 7.58172 7.5817 4 12 4C16.4183 4 20 7.58172 20 12C20 13.3345 19.6745 14.6175 19.0605 15.7657L18.711 16.4192L19.3658 19.3658L16.4193 18.711Z"
                  fill="#141414"
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
                  fill="#141414"
                />
              </svg>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"
                fill="#141414"
              />
            </svg>
          </FeedFlex> */}
          <div style={{ width: "100%", height: "12px" }} />
          <Content>
            {/* <LikeNum>{`좋아요 ${feed.likeNum}개`}</LikeNum> */}
            <FlexBox>
              <ContentNickName>{feed.nickName}</ContentNickName>
              <Discription>{feed.contents}</Discription>
            </FlexBox>
            <Time>{feed.updated_at}</Time>
          </Content>
        </div>
      ))}
    </div>
  );
};

const FeedFlex = styled.div`
  display: flex;
  padding: 4px 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const Time = styled.div`
  color: #8e8e8e;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #d9d9d9;
  margin-right: 8px;
`;
const Content = styled.div`
  padding: 0 16px;
`;
const LikeNum = styled.div`
  color: #141414;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
`;
const ContentNickName = styled.div`
  color: #141414;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-right: 8px;
`;
const FeedNickName = styled.div`
  color: #141414;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;
const Discription = styled.div`
  color: #141414;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const FeedImg = styled.img`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
  display: block;
`;
const Background = styled.div`
  background: #d7dbe2;
`;
export default Feed;
