import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Menu" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
