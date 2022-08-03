import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-bottom: 8rem;
`;

export const SocialIcons = styled.img`
  width: 3rem;
  margin: 0 1.5rem;

  @media screen and (max-width: 768px) {
    width: 2rem;
    margin: 0 1rem;
  }
`;
