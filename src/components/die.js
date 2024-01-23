import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isheld ? "#59E391" : "white",
  }

  return (
    <div className="container--die"
     style={styles}
     onClick={props.holddice}

      >
      <h3  >{props.value} </h3>
    </div>
  );
}
