import './App.css';
import Cards from "./components/Cards"
import {Routes,Route}  from "react-router-dom"
import PlaceDetails from "./components/PlaceDetails"
import NotFound from "./components/NotFound"



function App() {
  return (
    <div className="App">


  {/* <PlaceDetails /> */}

  <Routes>
    <Route path = "/" element = {<Cards />}></Route>
    <Route path = "/islands/:islandId" element = {<PlaceDetails />}></Route>
    <Route path = "*" element = {<NotFound />}></Route>
  </Routes>

  </div>
  );
}

export default App;
