import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Title from "../components/Title";
import Image from "../components/Image";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Upper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 74px;
  justify-content: center;
`;
const Lower = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  align-items: center;
`;

const Timer = styled.div`
  width: 1000px;
  height: 350px;
  background-color: #56be9c;
  display: inline-block;
  border-radius: 10px;
  margin-right: 40px;
  margin-top: 18px;
  padding: 97px 220px;
`;

const Time = styled.div`
  width: 560px;
  height: 160px;
  font-size: 110px;
  font-family: "NotoSans";
  font-weight: 700;
  color: white;
  line-height: 159.28px;
  text-align: center;
`;

const Rank = styled.div`
  border: 1px solid #56be9c;
  border-radius: 10px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 350px;
  margin-top: 18px;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "black"};
  display: inline-block;
  margin-right: 8px;
`;
const Slider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-direction: row;
  transition: 0.1s;
`;
const Study = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const MainPage = () => {
  const [ranking, setRanking] = useState([
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
  ]);
  const [studies, setStudies] = useState([
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
  ]);
  const move = useRef(0);
  const move_max = useRef((studies.length - 6) * 260);

  const slideRef = useRef();
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-0%)`;
  }, []);

  const slide = (dir) => {
    if (dir === "left" && move.current !== 0) {
      move.current += 260;
      slideRef.current.style.transform = `translateX(${move.current}px)`;
    } else if (dir === "right" && move.current !== -move_max.current) {
      move.current -= 260;
      slideRef.current.style.transform = `translateX(${move.current}px)`;
    }
  };

  return (
    <Fix>
      <Header />
      <Wrapper>
        <Upper>
          <div>
            <Title>나의 누적 공부 시간</Title>
            <div></div>
            <Timer>
              <Time>00:00:00</Time>
            </Timer>
          </div>
          <div>
            <Title>누적 공부 시간 랭킹</Title>
            <span style={{ float: "right" }}>
              <span style={{ marginRight: "31px" }}>
                <Circle />
                개인
              </span>
              <span style={{ color: "#cccccc" }}>
                <Circle color="#cccccc" />
                스터디
              </span>
            </span>
            <Rank>
              {ranking.map((person, i) => {
                return (
                  <div key={i} style={{ marginBottom: "16px", height: "43px" }}>
                    <Title
                      weight="400"
                      size="24"
                      lineHeight="34.75"
                      marginLeft="24"
                    >
                      {i + 1}위
                    </Title>
                    <Title
                      weight="400"
                      size="24"
                      lineHeight="34.75"
                      marginLeft="114"
                    >
                      {person.name}
                    </Title>
                    <Title
                      weight="700"
                      size="24"
                      lineHeight="34.75"
                      color="#56BE9C"
                    >
                      {person.time}
                    </Title>
                  </div>
                );
              })}
            </Rank>
          </div>
        </Upper>
        <Lower>
          <div
            style={{
              width: "1520px",
              display: "inline-block",
            }}
          >
            <Title marginBottom="18">추천 스터디</Title>
            <span style={{ float: "right" }}>
              <span style={{ marginRight: "31px" }}>
                <Circle />
                온라인
              </span>
              <span style={{ color: "#cccccc" }}>
                <Circle color="#cccccc" />
                오프라인
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "1640px",
            }}
          >
            <div
              style={{
                width: "18.81px",
                height: "31.81px",
                marginTop: "80px",
                marginRight: "40px",
              }}
              onClick={() => slide("left")}
            >
              <Image
                alt="left arrow"
                src={require("../assets/leftarrow.png").default}
                width="18.81"
                height="31.81"
              />
            </div>
            <div style={{ overflowX: "hidden" }}>
              <Slider ref={slideRef}>
                {studies.map((study, i) => {
                  return (
                    <Study key={i}>
                      <Image
                        alt="스터디 이미지"
                        src={require("../assets/books.jpg").default}
                        height="190"
                      />
                      <Title lineHeight="34.75" size="24" marginTop="11">
                        스터디명
                      </Title>
                      <Title size="18" weight="400" lineHeight="26.06">
                        {study.people}명 / 매너온도 {study.temperature}°C
                      </Title>
                      <div>
                        {study.tags.map((tag, i) => {
                          return (
                            <span style={{ size: "18px", color: "#CCCCCC" }}>
                              #{tag}{" "}
                            </span>
                          );
                        })}
                      </div>
                    </Study>
                  );
                })}
              </Slider>
            </div>
            <div
              style={{
                width: "18.81px",
                height: "31.81px",
                marginTop: "80px",
                marginLeft: "40px",
              }}
              onClick={() => slide("right")}
            >
              <Image
                alt="right arrow"
                src={require("../assets/rightarrow.png").default}
                width="18.81"
                height="31.81"
              />
            </div>
          </div>
        </Lower>
      </Wrapper>
    </Fix>
  );
};

export default MainPage;
