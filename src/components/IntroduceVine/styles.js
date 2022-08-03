import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroduceHeading = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  animation: neon 3s ease infinite alternate;
  @keyframes neon {
    0% {
      color: #999999;
    }
    100% {
      text-shadow: 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 1px #ffffff;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IntroduceMain = styled.p`
  font-size: 1.1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
