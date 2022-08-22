import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dialog } from "../pages/Dialog";
// import { Container } from "./Container/Container";
import { Home } from "../pages/Home";
// import { MessageArea } from "./MessageArea/MessageArea";
// import { ChatsList } from "./ChatsList/ChatsList";

export const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="/dialog/:id" element={<Dialog />} />
      </Route>
      {/* <Route index element={<Container />} /> */}
      {/* <Route path="contacts" element={<ChatsList />} />  */}
    </Routes>
  );
};

export default App;
