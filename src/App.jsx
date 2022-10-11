import "./main.css";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  return (
    <div className="">
      <Header />
      <Countries />
    </div>
  );
}

export default App;
