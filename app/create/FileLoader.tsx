"use client";
import { ChangeEvent, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { createBoard } from "../../axios/boards/index";
import Link from "next/link";
import styled from "styled-components";

interface filesType {
  selectedFiles: File[];
  urls: string[];
}

const FileLoader = () => {
  const [showImages, setShowImages] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  // 이미지 상대경로 저장
  const handleAddImages = (event: any) => {
    const imageLists = event.target.files;
    if (event.target.files.length > 1) {
      alert("여러장의 사진을 올릴 수 있도록 준비하고 있어요.");
    }
    let imageUrlLists = [...showImages];
    let images = [];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
      images.push(imageLists);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }
    setImages(images);
    setShowImages(imageUrlLists);
  };

  const makeBoard = () => {
    const formData = new FormData();

    images.forEach((image) => {
      formData.append("files", image);
    });
    formData.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            title,
            contents,
          }),
        ],
        { type: "application/json" }
      )
    );
    const res = createBoard(formData);
    res.then((info) => {
      if (info.code !== 200) console.log(info.message);
      else {
        console.log(info);
      }
    });
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };
  //   const items = showImages.map((image, id) => (
  //     <div className={"imageContainer"} key={id}>
  //       <Image src={image} alt={`${image}-${id}`} />
  //       <div onClick={() => handleDeleteImage(id)}>삭제</div>
  //     </div>
  //   ));
  //   const responsive = {
  //     0: {
  //       items: 2,
  //     },
  //   };

  return (
    <div>
      <AbsoluteIcon onClick={makeBoard}>등록</AbsoluteIcon>
      <div style={{ flex: 1 }}>
        {!showImages.length ? (
          <ImgBox className="input-file-button" htmlFor="input-file">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0002 8.33337V31.6667M8.3335 20H31.6668"
                stroke="#435065"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ImgBox>
        ) : (
          <RelativeContainer>
            <Image src={showImages[0]} alt="선택된 이미지" />
            <AbsoluteIcon onClick={() => handleDeleteImage(0)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use href="#image0_1001_818" transform="scale(0.03125)" />
                  </pattern>
                  <image
                    id="image0_1001_818"
                    width="32"
                    height="32"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cKCQo1J/qBJLoAAAURSURBVFjDzVd/aBNXHP++96JNsrokimMj1nSNsZUx8EdLWSXb6pwMrG1P1g3ntHS7kg1R1lkQhRoqilY7N7DFnt5W8AduCL1OFLYxq9KCq46o61hjf7hyxRaRNv0xTTp77+2PeGmS3mWxCtuDL4/k3fH58f1xdwD/8UJPeDkq35adjXvdbsNYRgbOnzsX5zJG8oaH8YneXsNga+uBAz4fAGPPlMDHLzock1JlJR7kOHzBbicEAGMArR3t6u8nsiThttrafVv6+5+KQCmzWhWhqgq9v2UL/iwlBSEAhLSBp+2/h0IG/5EjE+v37as5ODr6xAQ2jLpc+OK5c6gpK0sFVgPjJAioe0NPz+znCgur5M7OpAm8dzo/H/dLEv7NYokHjyaRFAEMQCoCAYOd43ZPXLkSj4Xj/ygpycyEtKYmuGmxMBYuJ71QFABKk4ivbLbJu5LkZYsXJ3SgiFmts764dg21u1wYayuPdkAvHbpO3Pf7oSE3txqNjWk6QIZ372ZXXS6AxMqjz7UU6zrzQlYWzNm5U9OB9XUOBwvdvo2vTlV7IuXxkUw9EAKAh0IhfDQzsxrJcowDdH9lJWtLSdFV3bB27aNHZjMtbWzUOqcUgD7f2GjcZDZTvqBA15l5RiPlKiriUoAQreI4Xeuxokzyly6dPRsMulbzPN0litMK8hNRtB/i+S/zgkFjsKWFvq4oukWZxnFh3x4TWPdOdja7YLfr5n2SEDhYX+9lGFcjSl1LPJ4YEm2imJ7j8VQjSr0M4wfr6utpCyG6BFIdjqqPli4FADAAADCb243+SjzB8Y6yMv9yRfEyFcjj6d4FgM8AZJyYApc/FwRcXFYGVPVWe6cP3G6AGzfCBN5wOuG8PjhCj8n5eN5fAxBNAvYAqOB91wUBBXieIn1gdVdOL1oE36kO9FmtkEB9jDM+nr89B2MvKy+vRjSi886dujpUx/NqXylKYgLgs9kiNUArJiaS6flIxZdqkLzHmFZnqDMhfjawbVFdwPwDA/82diMxIIpL6sLqvQxjL8MYgDHna1u3svTY7kg0pJS/R0am2nDW4GBS6vNF8ZW2qYLz1wiCv0YQ1O5w7vF4okmo92sSqe7piXSBsri9nWjUQHTu0bnGxlebpsD/kAUB+XgeIYD4wuzdSAgylJWp91OtjrjV2goQGcUIvX1flvGHCxZojtwixujS1NTz2Q8fehnGHfWCgC+HwdWAZaKYtSNMoqTEZDKmj4+je4RojutPZfnosvR0AMawqhXlSpKu9d8jhBoKCgp+NZtvDhw/Di08Py1dN3i+K00US0pMppSOVavYICGa45oC0HWSpCJFHkarNtvt5IPubnTYZEr2UTyTczw/FDKMZGYeOx5+GBGVwJ+3xsczfrFakS0vDxKsSB/P8BzW1tZ+vb2pSf0Z+0bk2LuXvdvVlXRLJjEzYs5lv//RD/v3R0PGEPj54ujopKmwkG0YGZkJQMJwBgLMUlR0+sjU21BMCtTVJw0Nvdzc3o6U4mLoMBqfjfWBADZy3MlvfL74E6x1+UV0+TKuyslh9s7OGStW48fubsWycuXJQ9PfiDUdUFfv2PBwxrxTp9hmQrBlxQqQDYYnUx8MwpuHDxte2rTpTP3du7r3QhJr9VsLF+KN27fjPo5D19PSErUdHJNlZGlunl1QW/vtT0/5aaaldc2a5cvJHbcbtTidYLbZDOkAwAUCkNrTQ/a0tkrzp+f5f73+AdQUtjpaw2bcAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </AbsoluteIcon>
          </RelativeContainer>
        )}
        <input
          type="file"
          multiple
          onChange={handleAddImages}
          id="input-file"
          style={{ display: "none" }}
        />
        <Container>
          <Content>
            <div>제목 입력</div>
            <InputStyle
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </Content>
          <Content>
            내용 입력
            <Textarea
              onChange={(e) => {
                setContents(e.target.value);
              }}
              value={contents}
            />
          </Content>
          {/* <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls={false}
            responsive={responsive}
            items={items}
          /> */}
        </Container>
      </div>
    </div>
  );
};

const ImgBox = styled.label`
  width: 375px;
  height: 375px;
  border: 1px dashed #a9b6cb;
  margin: 12px auto;
  display: block;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #6b6b6b;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Image = styled.img`
  object-fit: cover;
  width: 375px;
  height: 375px;
`;
const AbsoluteIcon = styled.button`
  position: absolute;
  right: 16px;
  top: 14px;
  color: #6f85a8;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    color: #141414;
  }
`;
const Next = styled.div`
  position: absolute;
  right: 160px;
  top: 129px;
  z-index: 100;
`;
const RelativeContainer = styled.div`
  width: 375px;
  height: 375px;
  margin: 12px auto;
  position: relative;
`;
const InputStyle = styled.input`
  flex: 1;
  padding-left: 20px;
`;
const Textarea = styled.textarea`
  flex: 1;
  padding-left: 20px;
  height: 170px;
`;
const Content = styled.div`
  border-bottom: 1px solid #e2e7ee;
  padding: 12px 20px;
  color: #141414;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  height: auto;
`;
const Container = styled.div`
  border-top: 1px solid #e2e7ee;
`;
export default FileLoader;
