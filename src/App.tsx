import React from "react";
import RepositoryList from "./components/RepositoryList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";

function App() {
  return <RepositoryList />;
}

export default App;
