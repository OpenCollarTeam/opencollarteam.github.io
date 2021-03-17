import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import "./App.css";
const MarkdownDocViewer = (props) => {


  var xhr = null;
  const [downloadDone, setDownloadDone] = useState(false);
  const [MDText, setMDText] = useState("download did not occur");
  const [workingPath, setWorkingPath] = useState("");
  if (!downloadDone) {
    xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://opencollar.cc/docs/" + props.match.params.doc + ".md",
      false
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.addEventListener("load", () => {
      if (xhr.readyState === 4) {
        if (MDText !== xhr.responseText && MDText !== "download did not occur")
          window.location.reload();
        setMDText(xhr.responseText);
      }
    });

    xhr.send();
    setDownloadDone(true);
    setWorkingPath(props.match.params.doc);
  }

  const checkWorkingPath = () => {
    if (workingPath !== props.match.params.doc) {
      setMDText("download did not occur");
      setDownloadDone(false);
    }
  };
  return (
    <div>
      {downloadDone && checkWorkingPath()}
      <div
        style={{
          width: "75vw",
          height: "100vh",
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        <Card className={props.dark ? "bg-dark text-light" : "bg-light"}>
          <Card.Body>
            <ReactMarkdownWithHtml
              plugins={[gfm]}
              children={MDText}
              allowDangerousHtml
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MarkdownDocViewer;
