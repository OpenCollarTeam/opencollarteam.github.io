import React from "react";

const NotFound = (props) => {
  console.log("Props: " + props);
  return (
    <h2>
      Your requested page could not be found :(
      <br />
      {props.match.url}
    </h2>
  );
};

export default NotFound;
