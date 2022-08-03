import styled from "@emotion/styled";

export const Container = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  width: 100%;
  height: 100%;
  padding: 0 3rem 0;
  filter: drop-shadow(0 0 10px white);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  color: white;
  animation: tutsFade 4s;
  @keyframes tutsFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
