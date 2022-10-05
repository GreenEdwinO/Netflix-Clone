import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner"
import Nav from './Nav'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      < Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS      (Swipe Left or Right to view more. Click any to watch preview)" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
