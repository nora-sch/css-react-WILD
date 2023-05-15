import { useState, react } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Container>
        <Card />
        <Card />
        <Card />
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
background-color:grey;
`;
