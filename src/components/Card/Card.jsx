import { useState, react } from "react";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";

function Card({}) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardImg src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/40/c6/df/40c6df4d-1897-8602-7a97-36c399049baa/190374824859.jpg/1200x1200bb.jpg" />
        <Info>
          <Title>Rozes</Title>
          <p style={{ margin: 0 }}>Hangin' on</p>
          <p style={{ margin: 0 }}>2016</p>
        </Info>
      </CardHeader>
      <CardFooter>
        <CardRating>
          <div>Rate this album</div>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </CardRating>
      </CardFooter>
    </CardWrapper>
  );
}
export default Card;
const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
//===========================//
const Star = styled(FaRegStar)`
  margin: 0px, 2px;
  font-size: 20px;
`;

const CardWrapper = styled(StyledFlexColumn)`
  margin: 1.5rem;
  width: 29%;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #8080802b;
  background-color:white;
`;
const CardHeader = styled(StyledFlexRow)`
  width: 100%;
  border-bottom: solid 1px #8080802b;
`;
const Info = styled(StyledFlexColumn)`
  font-size: 16px;
  width: 70%;
  padding: 1rem;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;
const CardFooter = styled(StyledFlexColumn)`
  width: 100%;
`;
const CardRating = styled(StyledFlexRow)`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
`;
const CardImg = styled.img`
  width: 30%;
  border-radius: 10px 0px 0px 0px;
`;
