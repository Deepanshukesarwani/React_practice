import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

function App() {
  return (
    <>
      <div
        id="mainwrapper"
        className=" w-screen h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center"
      >
        <div
          id="container"
          className=" bg-blue-300 w-1/2 h-1/2 rounded-md flex flex-col justify-between shadow-zinc-900"
        >
          <InputField />

          <div id="swap"></div>
          <InputField />
          <div id="button"></div>
        </div>
      </div>
    </>
  );
}

export default App;
