import Link from "next/link";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <Title>나의 다이어리 입니다.</Title>
      <ProfileBox>
        <ProfileImg />
        <FlexBox>
          <div>
            <div>0</div>
            <SmallText>게시글</SmallText>
          </div>
          <div>
            <div>0</div>
            <SmallText>팔로워</SmallText>
          </div>
          <div>
            <div>0</div>
            <SmallText>팔로우</SmallText>
          </div>
        </FlexBox>
      </ProfileBox>
      <InfoBox>
        <div>Tester</div>
        <InfoText>
          다이어리 공유 플렛폼
          <br />
          www.dearmydiary.com
        </InfoText>
      </InfoBox>
      <StyledButton>홈편집</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(180deg, #c7cfff 0%, #697096 100%);
  padding: 121px 4.25% 29px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: -0.24px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-bottom: 28px;
`;

const ProfileImg = styled.div`
  height: 48px;
  width: 48px !important;
  background: #d9d9d9;
  border-radius: 50%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  padding: 0 15px;
  text-align: center;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: start;
`;

const SmallText = styled.div`
  color: #f5f5f5;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const InfoBox = styled.div`
  margin: 12px 0 28px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: -0.24px;
`;

const InfoText = styled.div`
  color: #ebebeb;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-top: 4px;
`;

const StyledButton = styled.div`
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  backdrop-filter: blur(2px);
`;
export default Profile;
