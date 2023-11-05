import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { loadEffect } from "../../../styles/base";

const fadeEffect = keyframes`
  0% {
    opacity: 1;
    
  }
  100% {
    opacity: 0;
  }

`;
const transEffect = keyframes`
  0% {
    transform: translate(0,0);
    
  }
  100% {
    transform: translate(0,-100px);
  }

`;

const LogoEffect = ({ ...props }) => {
  return props.seconds === 100 ? (
    <Container>
      {props.seconds < 1 ? (
        <FadeEffect>
          <Background style={{ width: "226px", height: "40px" }} />
        </FadeEffect>
      ) : (
        <LodadEffect>
          <div>
            <img src={"/assets/logo.svg"} alt="logo" />
          </div>
        </LodadEffect>
      )}
    </Container>
  ) : (
    <ContainerEffect>
      {props.seconds < 1 ? (
        <FadeEffect>
          <Background style={{ width: "226px", height: "40px" }} />
        </FadeEffect>
      ) : (
        <LodadEffect>
          <img src={"/assets/logo.svg"} alt="DMD" />
        </LodadEffect>
      )}
    </ContainerEffect>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  transform: translate(0, -100px);
  flex: 1;
`;

const Background = styled.div`
  background-image: url("/assets/logo_long.svg");
  background-size: contain;
`;

const ContainerEffect = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  animation: ${transEffect} 0.5s 2.5s linear alternate;
  animation-fill-mode: forwards;
`;

const FadeEffect = styled.div`
  animation: ${fadeEffect} 0.5s 0.5s linear alternate;
  animation-fill-mode: forwards;
  opercity: 0;
`;
const LodadEffect = styled.div`
  animation: ${loadEffect} 1s linear alternate;
  animation-fill-mode: forwards;
  opercity: 0;
`;

export default LogoEffect;
