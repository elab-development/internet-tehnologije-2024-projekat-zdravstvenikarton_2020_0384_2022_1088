import React from "react";
import Korisnik from "./Korisnik";

function Korisnici({ korisnici, prijavljen }) {
  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        SVI KORISNICI
      </h3>

      <div className="kontejner">
        {korisnici.map((k) => {
          if((k.ime + " " + k.prezime) === (prijavljen.ime + " " + prijavljen.prezime)) {
            return <Korisnik korisnik={k} />;
          }
        })}
      </div>
    </>
  );
}

export default Korisnici;
