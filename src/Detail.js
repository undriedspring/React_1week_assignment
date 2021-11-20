/*eslint-disable*/
import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import RatingSystem from './RatingSystem';

function Detail() {

    const navigate = useNavigate();
    const params = useParams();

    return (
        <Container>
            <h2 style={{ textAlign: "center" }}>
            당신의 <span
            style={{
              color: "white",
              fontWeight: "900",
              background: "#FF8000",
              padding: "0.2rem",
              borderRadius: "4px",
              fontFamily: "GowunDodum-Regular",
            }}
          >
            {params.list}요일
          </span>에 점수를 준다면?
        </h2>
            <Smiles>
                <RatingSystem element={RatingSystem} />
            </Smiles>
            <EnterTheRating>
                <p><Button onClick={() => navigate(-1)}>평점 남기기</Button></p>
            </EnterTheRating>
        </Container>
    );
}

const Container = styled.div`
`


const Smiles = styled.div`
position: relative;
top: 0px`

const EnterTheRating = styled.button`
position: relative;
border: none;
background: none;
top: 0px;
left: 145px; 
fontFamily: "GowunDodum-Regular";
`
const Button = styled.button`
width: 150px;
height: 50px;
background-color: #E6E6E6;
border: 1px solid #EFF5FB;
box-shadow: 3px 2px 5px lightgrey;
font-size: 20px;

&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`

export default Detail;