import { useState, react } from "react";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";

function Card({ album, albums }) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardImg src={album.image} />
        <Info>
          <Title>{album.artist}</Title>
          <p style={{ margin: 0 }}>{album.title}</p>
          <p style={{ margin: 0 }}>{album.year}</p>
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
        <CardSuggestions>
          <h5 style={{ margin: 0 }}>Album suggestion:</h5>
          <CardAlbumsGallery>
            {albums.map((suggestedAlbum, i) =>
              suggestedAlbum !== album &&
              suggestedAlbum.artist === album.artist ? (
                <CardAlbumSmall
                  key={i + "-" + suggestedAlbum.title + "sug" + album.title}
                  suggestedAlbum={suggestedAlbum}
                >
                  <CardImgSmall src={suggestedAlbum.image} />
                  <h5 style={{ margin: 0 }}>{suggestedAlbum.title}</h5>
                </CardAlbumSmall>
              ) : (
                ""
              )
            )}
          </CardAlbumsGallery>
        </CardSuggestions>
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
  background-color: white;
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
const CardImgSmall = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const CardSuggestions = styled(StyledFlexColumn)`
  width: 100%;
  padding: 1rem;
`;
const CardAlbumsGallery = styled(StyledFlexRow)`
justify-content: flex-start`;
const CardAlbumSmall = styled(StyledFlexColumn)`
  width: 22%;
  align-items: center;
  text-align:center;
  margin:1rem;
`;
