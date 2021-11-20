/*eslint-disable*/
import React, { useState, useMemo } from 'react';
import styled from "styled-components";

function SmileIcon(props) {
  const { fill = 'none' } = props;
  return (
    <Icon>
    <svg class="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    </Icon>
  );
}

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return '#F4FA58';
    } else if (!hoverRating && rating >= index) {
      return '#F4FA58';
    }
    return 'none';
  }, [rating, hoverRating, index]);
return (
      <div 
        className="cursor-pointer"
        onMouseEnter={() => onMouseEnter(index)} 
        onMouseLeave={() => onMouseLeave()} 
        onClick={() => onSaveRating(index)}>
        <SmileIcon fill={fill} />
      </div>
  )
} 

const RatingSystem = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  return(
    <div className="box_flex">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon 
            index={index} 
            rating={rating} 
            hoverRating={hoverRating} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            onSaveRating={onSaveRating} />
        )
      })}
    </div>
  );
}

const Icon = styled.button`
width: 90px;
height: 90px;
background: none;
border: none;
float: left;
display: inline-block;
margin: 15px 0px 0px 0px;

&:hover{
cursor: pointer;
transform: scale(1.2);
}
`

export default RatingSystem;