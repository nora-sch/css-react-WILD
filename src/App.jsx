import { useState, react } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import styled from "styled-components";

function App() {
  const albums = [
    {
      artist: "Rozes",
      title: "Hangin' on",
      year: "2014",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/40/c6/df/40c6df4d-1897-8602-7a97-36c399049baa/190374824859.jpg/1200x1200bb.jpg",
    },
    {
      artist: "Rozes",
      title: "Under the grave",
      year: "2016",
      image: "https://i.scdn.co/image/ab67616d00001e02d28c08e2734f6bc697c1e817",
    },
    {
      artist: "Rozes",
      title: "Ru Mine",
      year: "2015",
      image:
        "https://lastfm.freetls.fastly.net/i/u/300x300/736bdf8784885d3ea1b9ea87665b0038.jpg",
    },
  ];
  return (
    <div>
      <Container>
        {albums.map((album, i) => (
          <Card key={i + "-" + album.title} album={album} albums={albums} />
        ))}
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap; wrap;
justify-content:center;
width:100%;
`;
