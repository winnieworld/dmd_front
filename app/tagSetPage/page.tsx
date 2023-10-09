"use client";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import { MaxSize, Scroll } from "@/styles/base";
import Layout from "../components/Layout";

const tagSetPage: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <Layout menu="">
      <TagSetHead>
        <div
          onClick={() => {
            router.push("/explore");
          }}
        >
          취소
        </div>
        <TagSetName>관심 주제 설정</TagSetName>
        <div
          onClick={() => {
            router.push("/explore");
          }}
        >
          확인
        </div>
      </TagSetHead>
      <Scroll>
        <TagMenu>
          <div>심플</div>
          <SelectButton selected>1</SelectButton>
        </TagMenu>
        <TagMenu>
          <div>큐트</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu>
          <div>레트로</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu>
          <div>러블리</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu>
          <div>시크</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu>
          <div>키치</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu>
          <div>호러</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu>
          <div>푸드</div>
          <SelectButton selected />
        </TagMenu>
        <TagMenu style={{ border: "none", paddingBottom: "10px" }}>
          <div>럭셔리</div>
          <SelectButton selected />
        </TagMenu>
      </Scroll>
    </Layout>
  );
};

const TagSetHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #c5cedc;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const TagSetName = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
const TagMenu = styled.ul`
  display: flex;
  border-bottom: 1px solid #e2e7ee;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 400;
`;
const SelectButton = styled.button<{ selected: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border: ${(props) => (props.selected ? "none" : "1px solid #e2e7ee")};
  background: ${(props) => (props.selected ? "#6f85a8" : "none")};
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;

export default tagSetPage;
