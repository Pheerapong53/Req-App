import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageForm from "./pages/PageForm";
import PagePdf from "./pages/PagePdf";
import PageTable from "./pages/PageTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageForm />} />
        <Route path="/pdf" element={<PagePdf />} />
        <Route path="/table" element={<PageTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
