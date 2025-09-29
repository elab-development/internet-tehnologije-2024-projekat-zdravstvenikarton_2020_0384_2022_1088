import React from "react";
import Korisnik from "./Korisnik";

function Korisnici({ korisnici }) {
  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        SVI KORISNICI
      </h3>

      <div className="kontejner">
        {korisnici.map((k) => {
          return <Korisnik korisnik={k} />;
        })}
      </div>
    </>
  );
}

export default Korisnici;
