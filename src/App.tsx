import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Privacy from "./pages/Privacy";
import DataDeletionInstruction from "./pages/DataDeletionInstruction";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DataDeletionRequest from "./pages/DataDeletionRequest";
import DeAuthorize from "./pages/Deauthorize";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/ddi" element={<DataDeletionInstruction />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/deauth" element={<DeAuthorize />} />
        <Route path="/ddr" element={<DataDeletionRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
