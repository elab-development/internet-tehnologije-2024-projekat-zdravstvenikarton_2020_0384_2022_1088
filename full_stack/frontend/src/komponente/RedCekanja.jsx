import { useEffect } from "react";
import Korisnik from "./Korisnik";

function RedCekanja({ prikazReda, redCekanja }) {
  useEffect(() => {
    prikazReda();
  }, []);
  return (
    <>
      <h3 style={{ marginBottom: "50px", marginTop: "100px" }}>
        RED ČEKANJA
      </h3>

      <div className="kontejner">
        {redCekanja.map((k) => {
          return <Korisnik korisnik={k} key={k.id} />;
        })}
      </div>
    </>
  );
}

export default RedCekanja;
