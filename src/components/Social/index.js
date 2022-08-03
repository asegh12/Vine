import React from "react";
import { Container, SocialIcons } from "./styles";

const Social = () => {
  return (
    <Container>
      <a
        href="mailto:frogpartygames@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcons src="images/icons8-mail-90.png" />
      </a>
      <a
        href="https://store.steampowered.com/app/1832130/VINE/"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcons src="images/icons8-steam-96.png" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCVnE83Ai_EG9AyZKTkxgs6g"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcons src="images/icons8-youtube-90.png" />
      </a>
    </Container>
  );
};

export default Social;
