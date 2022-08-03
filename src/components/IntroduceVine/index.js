import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  IntroduceHeading,
  IntroduceMain,
  IntroduceWrapper,
} from "./styles";

const IntroduceVine = () => {
  return (
    <Container>
      {/* <Title>게임 소개</Title> */}
      <Carousel className="d-block w-100" fade>
        <Carousel.Item className="d-block w-100">
          <img
            className="d-block w-100"
            src="images/vine_play_1.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <IntroduceWrapper>
              <IntroduceHeading>새로운 종족 포로</IntroduceHeading>
              <IntroduceMain>
                인류가 사라진 지구. 그곳엔 새로운 종족 '포로'들이 인류를 대신해
                새로운 지구의 주인으로 자리잡았습니다. 당신은 막 겨울잠을 끝낸
                '포로'가 되어 굶주린 배를 채우기 위해벌레를 찾아 다닙니다.
              </IntroduceMain>
            </IntroduceWrapper>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-block w-100">
          <img
            className="d-block w-100"
            src="images/vine_play_2.gif"
            alt="Second slide"
          />

          <Carousel.Caption>
            <IntroduceWrapper>
              <IntroduceHeading>혀를 이용한 게임</IntroduceHeading>
              <IntroduceMain>
                주인공은 혀를 이용하여 벌레를 먹고, 혀를 이용하여 천장에 붙은
                덩쿨을 잡고 이동하고, 혀를 이용하여 상자를 끌어올릴 수 있습니다.
              </IntroduceMain>
            </IntroduceWrapper>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-block w-100">
          <img
            className="d-block w-100"
            src="images/vine_play_3.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <IntroduceWrapper>
              <IntroduceHeading>위험한 위험</IntroduceHeading>
              <IntroduceMain>
                연구소 안에있는 여러가지의 함정이 주인공의 여정을 힘들게 하지만
                플레이어는 자신의 머리와 순발력으로 이를 극복해야 합니다. 혀를
                이용한 퍼즐 어드밴쳐 게임, VINE입니다.
              </IntroduceMain>
            </IntroduceWrapper>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <VinePlayGif src="images/vine_play_1.gif" />
      <IntroduceWrapper>
        <IntroduceHeading>새로운 종족 포로</IntroduceHeading>
        <IntroduceMain>
          인류가 사라진 지구. 그곳엔 새로운 종족 '포로'들이 인류를 대신해 새로운
          지구의 주인으로 자리잡았습니다. 당신은 막 겨울잠을 끝낸 '포로'가 되어
          굶주린 배를 채우기 위해벌레를 찾아 다닙니다. 혀를 이용한 게임입니다.
          주인공은 혀를 이용하여 벌레를 먹고, 혀를 이용하여 천장에 붙은 덩쿨을
          잡고 이동하고, 혀를 이용하여 상자를 끌어올릴 수 있습니다.
        </IntroduceMain>
      </IntroduceWrapper>
      <VinePlayGif src="images/vine_play_2.gif" />
      <VinePlayGif src="images/vine_play_3.gif" />
      <IntroduceWrapper>
        <IntroduceHeading>위험한 위험</IntroduceHeading>
        <IntroduceMain>
          연구소 안에있는 여러가지의 함정이 주인공의 여정을 힘들게 하지만
          플레이어는 자신의 머리와 순발력으로 이를 극복해야 합니다. 혀를 이용한
          퍼즐 어드밴쳐 게임, VINE입니다.
        </IntroduceMain>
      </IntroduceWrapper> */}
    </Container>
  );
};

export default IntroduceVine;
