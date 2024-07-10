import React from 'react';
import Nav from "../../Components/Header/Nav";
import Banner from "./Banner";


import requests from './Requests';
import Row from "./Row";
import Footer from '../../Components/Footer/Footer';




const HomeScreen = () => {
  // console.log(requests.fetchNetflixOriginals); 
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovie} />
      <Footer />
    </div>
  );
}

export default HomeScreen;