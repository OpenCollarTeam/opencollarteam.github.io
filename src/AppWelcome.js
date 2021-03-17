import React, { useState } from "react";
import "./App.css";
import MarkdownDocViewer from "./MarkdownDocViewer";

const AppWelcome = (props) => {
  

  return (
    <div class="mainApp">
      <MarkdownDocViewer match={{ params: { doc: "index" } }} dark={props.dark} />
    </div>
  );
};

export default AppWelcome;
