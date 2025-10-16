import Korisnik from "./Korisnik";
import { useEffect } from "react";

function Korisnici({ prikazPacijenata, pacijenti }) {
  
  useEffect(() => {
    prikazPacijenata();
  }, []);

  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        VAŠI PACIJENTI
      </h3>

      <div className="kontejner">
        {

          pacijenti.map((p) => {
            return <Korisnik korisnik={p} />
          })
        }
      </div>
    </>
  );
}

export default Korisnici;
