import Korisnik from "./Korisnik";
import { useEffect } from "react";

function Korisnici({ prikazPacijenata, pacijenti }) {

  useEffect(() => {
    prikazPacijenata();
  }, []);

  return (
    <>
      <h3 className="naslov">
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
