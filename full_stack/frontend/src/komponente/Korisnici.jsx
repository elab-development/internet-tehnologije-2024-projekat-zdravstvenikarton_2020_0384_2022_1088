import Korisnik from "./Korisnik";
import { useEffect } from "react";

function Korisnici({ prikazPacijenata, pacijenti }) {

  useEffect(() => {
    prikazPacijenata();
  }, []);

  return (
    <>
      <h3 style={{ marginBottom: "50px", marginTop: "100px" }}>
        VAŠI PACIJENTI
      </h3>

      <div className="kontejner">
        {

          pacijenti.map((p) => {
            return <Korisnik korisnik={p} key={p.id} />
          })
        }
      </div>
    </>
  );
}

export default Korisnici;
