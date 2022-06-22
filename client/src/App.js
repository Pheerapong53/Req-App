import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageForm from "./pages/PageForm";
import PagePdf from "./pages/PagePdf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageForm />} />
        <Route path="/pdf" element={<PagePdf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
