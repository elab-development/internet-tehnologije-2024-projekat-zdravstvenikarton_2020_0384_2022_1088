import React from "react";
import Karton from "./Karton";

const Kartoni = ({ kartoni, prijavljen, uloga }) => {

  let kartoniZaPrikaz = [];
  if(uloga === "lekar") {
    kartoniZaPrikaz = kartoni.filter(k => k.lekar === prijavljen.ime + " " + prijavljen.prezime);
  } else if(uloga === "med_osoblje") {
    kartoniZaPrikaz = kartoni.filter(k => k.medicinskoOsoblje === prijavljen.ime + " " + prijavljen.prezime);
  } else if(uloga === "pacijent") {
    kartoniZaPrikaz = kartoni.filter(k => k.pacijent === prijavljen.ime + " " + prijavljen.prezime);
  }

  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        VAŠI KARTONI
      </h3>
      <div className="kontejner">
        {kartoniZaPrikaz.map((k) => {
          return <Karton zk={k} />;
        })}
      </div>
    </>
  );
};

export default Kartoni;
