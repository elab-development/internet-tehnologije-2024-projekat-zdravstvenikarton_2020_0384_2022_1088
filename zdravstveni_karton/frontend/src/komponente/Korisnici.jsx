import Korisnik from "./Korisnik";

function Korisnici({ pacijenti, prijavljen, mojiP }) {
  return (
    <>
      <h3 style={{ marginBottom: "50px", marginTop: "50px" }}>
        {mojiP === 1 ? "VAŠI PODACI" : "VAŠI PACIJENTI"}
      </h3>

      <div className="kontejner">
        {mojiP === 1 ? (
          <Korisnik korisnik={prijavljen} mojiP={mojiP} />
        ) : (
          pacijenti.map((p) => {
            if (
              p.izabraniLekar ===
              prijavljen.ime + " " + prijavljen.prezime
            ) {
              return <Korisnik key={p.jmbg} korisnik={p} mojiP={mojiP} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
}

export default Korisnici;
