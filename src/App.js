import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
      <h1>hello roony</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumantaries}/>
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
