import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import Title from "../components/Title";
import Image from "../components/Image";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
const Search = styled.div`
  width: 790%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 74px;
  & + & {
    margin-left: 25px;
  }
  ul {
    width: 125px;
    display: none;
    padding-left: 0px;
    border: 1px solid #56be9c;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    margin-top: 108px;
  }
  li {
    padding: 5px 10px;
    list-style: none;
    display: none;
    border-radius: 10px;
    :hover {
      border: 1px solid #56be9c;
    }
  }
  :hover {
    ul,
    li {
      display: block;
      cursor: pointer;
      background-color: white;
      z-index: 1;
    }
  }
`;
const List = styled.div`
  width: 1520px;
  display: flex;
  flex-direction: column;
`;
const Study = styled.div`
  width: 1520px;
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #56be9c;
`;
const State = styled.div`
  width: 105px;
  height: 45px;
  border: ${(props) => props.color || "black"} 1px solid;
  color: ${(props) => props.color || "black"};
  font-size: 20px;
  font-family: "NotoSans";
  border-radius: 10px;
  text-align: center;
  padding: 7px 0px;
`;

const StudyList = () => {
  const [studies, setStudies] = useState([
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
  ]);
  return (
    <Fix>
      <Header />
      <Search>
        <Item>
          <Title>스터디 이름</Title>
          <Input
            placeholder="검색어를 입력하세요."
            width="368"
            inputwidth="300"
            marginTop="18"
            validinput="true"
          >
            <img
              alt="search"
              src={require("../assets/search.png").default}
              style={{ width: "16px", height: "18px", cursor: "pointer" }}
            />
          </Input>
        </Item>
        <Item>
          <Title>모집상태</Title>
          <Input placeholder="검색어를 입력하세요." width="127" marginTop="18">
            <Title size="20" weight="400">
              전체
            </Title>
            <img
              alt="dropdown"
              src={require("../assets/dropdown.png").default}
              style={{ marginLeft: "21px" }}
            />
          </Input>
          <ul>
            <li>
              <Title size="20" weight="400">
                전체
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                모집 중
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                활동 중
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                활동 종료
              </Title>
            </li>
          </ul>
        </Item>
        <Item>
          <Title>진행방식</Title>
          <Input placeholder="검색어를 입력하세요." width="127" marginTop="18">
            <Title size="20" weight="400">
              전체
            </Title>
            <img
              alt="dropdown"
              src={require("../assets/dropdown.png").default}
              style={{ marginLeft: "21px" }}
            />
          </Input>
          <ul>
            <li>
              <Title size="20" weight="400">
                전체
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                온라인
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                오프라인
              </Title>
            </li>
          </ul>
        </Item>
        <Item>
          <Title>매너온도</Title>
          <Input placeholder="검색어를 입력하세요." width="127" marginTop="18">
            <Title size="20" weight="400">
              전체
            </Title>
            <img
              alt="dropdown"
              src={require("../assets/dropdown.png").default}
              style={{ marginLeft: "21px" }}
            />
          </Input>
        </Item>
        <Item>
          <Title>최대인원</Title>
          <Input
            placeholder="Search"
            width="134"
            marginTop="18"
            validinput="true"
            inputwidth="80"
          ></Input>
        </Item>
        <Item>
          <Title>스터디장</Title>
          <Input
            placeholder="Search"
            width="267"
            marginTop="18"
            validinput="true"
            inputwidth="200"
          ></Input>
        </Item>
        <Item>
          <Title>태그</Title>
          <Input
            placeholder="Search"
            width="220"
            marginTop="18"
            validinput="true"
            inputwidth="170"
          ></Input>
        </Item>
      </Search>
      <List>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "65px",
          }}
        >
          <div>
            <Title>검색결과</Title>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: "14.7px",
                height: "25px",
                marginRight: "72px",
              }}
              onClick={() => console.log("왼쪽")}
            >
              <Image
                alt="left arrow"
                src={require("../assets/leftarrow.png").default}
                width="14.7px"
                height="25px"
              />
            </div>
            <Title color="#56BE9C">2/11</Title>
            <div
              style={{
                width: "14.7px",
                height: "25px",
                marginLeft: "72px",
              }}
              onClick={() => console.log("오른쪽")}
            >
              <Image
                alt="right arrow"
                src={require("../assets/rightarrow.png").default}
                width="14.7px"
                height="25px"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1520px",
            border: "3px solid #56BE9C",
            marginTop: "19px",
            background: "#56BE9C",
          }}
        ></div>
        {studies.map((study, i) => {
          if (i > 5) return false;
          let statecolor = "#FFE600";
          if (study.state === "활동중") statecolor = "#56BE9C";
          else if (study.state === "활동종료") statecolor = "#C70000";
          return (
            <Study key={i}>
              <img
                alt="study profile"
                src={require("../assets/rectangle.png").default}
                style={{ width: "60px", height: "60px", marginRight: "24px" }}
              />
              <div style={{ width: "223px" }}>
                <Title size="20" weight="400">
                  {study.name}
                </Title>
              </div>
              <State color={statecolor}>{study.state}</State>
              <div style={{ width: "158px", marginLeft: "71px" }}>
                <Title size="20" weight="400">
                  {study.onoff}
                </Title>
              </div>
              <div style={{ width: "159px" }}>
                <Title size="20" weight="400">
                  {study.temperature}°C
                </Title>
              </div>
              <div style={{ width: "164px" }}>
                <Title size="20" weight="400">
                  {study.people}/{study.max}
                </Title>
              </div>
              <img
                alt="study profile"
                src={require("../assets/circle.png").default}
                style={{ width: "60px", height: "60px", marginRight: "24px" }}
              />
              <div style={{ width: "169px" }}>
                <Title size="20" weight="400">
                  {study.owner}
                </Title>
              </div>
              {study.tags.map((tag, i) => {
                if (i > 3) return false;
                return (
                  <Title key={i} size="20" weight="400">
                    {tag}&nbsp;
                  </Title>
                );
              })}
            </Study>
          );
        })}
      </List>
      <div
        style={{
          width: "1520px",
          marginTop: "29px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Title size="20" weight="400" color="#56BE9C">
          조건에 맞는 스터디를 찾지 못하셨나요?
        </Title>
        <button
          style={{
            width: "342px",
            height: "70px",
            background: "#56Be9c",
            border: "none",
            borderRadius: "10px",
            fontSize: "24px",
            color: "#ffffff",
            fontWeight: "700",
            fontFamily: "NotoSans",
            marginLeft: "12px",
          }}
        >
          스터디 개설하기
        </button>
      </div>
    </Fix>
  );
};

export default StudyList;
