import React from "react";
import Header from "./components/Header";
import Genres from "./components/Genres";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Route path="/" exact component={Home} />
        <Route path="/genres" component={Genres} />
      </div>
    </BrowserRouter>
  );
}

export default App;
