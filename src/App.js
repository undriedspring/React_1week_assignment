/*eslint-disable*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import './App.css'
import GlobalFonts from "./fonts/fonts"
import MyWeekRating from "./MyWeekRating";
import Detail from "./Detail";

function App() {
  
  return (
    <div className="App">
      <Container>
        <GlobalFonts />
        <Title>내 일주일. 근데 이제 평점을 곁들인</Title>
        <Line />
        <Routes>
          <Route path="/" element={<MyWeekRating />} />
          <Route path="/detail/:list" element={<Detail />} />
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 450px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 100px auto;
  border-radius:0px 0px 50px 0px;
  border: 1.5px solid #ddd;
  box-shadow: 10px 7px 10px lightgrey;
`;

const Title = styled.h1`
  color: #086A87;
  font-family: 'Cafe24Ohsquareair';
  text-align: center;
  font-size: 30px;
  margin: 40px 10px 40px 10px;
  `;

const Line = styled.hr`
  border-top: .5px dashed #bbb;
  text-align: center;
`;


export default App;