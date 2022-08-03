import React from "react";

import LogoVideo from "../LogoVideo";
import IntroduceVine from "../IntroduceVine";
import Footer from "../Footer";
import "./style.scss";
import { Container, Contents } from "./styles";

const Template = () => {
  function snowCreate() {
    const snow = [];
    for (var i = 0; i < 200; i++) {
      snow.push(<div className="snow"></div>);
    }
    return snow;
  }
  return (
    <Container>
      {snowCreate()}
      <Contents>
        <LogoVideo />
        <IntroduceVine />
        <Footer />
      </Contents>
    </Container>
  );
};

export default Template;
