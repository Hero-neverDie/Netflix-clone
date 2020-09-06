import React from "react";

import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner></Banner>
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action movies " fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy movies " fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="horror movies " fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance movies " fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentary " fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
