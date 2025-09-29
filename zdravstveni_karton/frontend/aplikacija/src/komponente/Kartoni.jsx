import React from "react";
import Karton from "./Karton";

const Kartoni = ({ kartoni }) => {
  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        VAŠI KARTONI
      </h3>
      <div className="kontejner">
        {kartoni.map((k) => {
          return <Karton zk={k} />;
        })}
      </div>
    </>
  );
};

export default Kartoni;
