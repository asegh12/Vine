import React from "react";
import { Container, Logo, Title } from "./styles";

import Social from "../Social";
import Video from "../Video";

const LogoVideo = () => {
  return (
    <Container>
      <Logo src="/images/vine.png" />
      <Social />
      {/* <Title>트레일러 영상</Title> */}
      <Video style={{ margin: "2rem" }} />
    </Container>
  );
};

export default LogoVideo;
