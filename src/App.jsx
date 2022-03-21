import React from "react";
import PreLoadedVideo from "./components/videoComponents/PreLoadedVideo";
import Navbar from "./pages/navbar/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <PreLoadedVideo />
      </main>
    </>
  );
};

export default App;
