import { useEffect, useState } from "react";
import Korisnik from "./Korisnik";

function RedCekanja({ prikazReda, redCekanja }) {
  useEffect(() => {
    prikazReda();
  }, []);

  const [trenutnaStrana, postaviTrenutnuStranu] = useState(1);
  const brojPoStrani = 4; // koliko korisnika prikazuje jedna stranica

  // 12 ukupno / 4 po strani / na 2 strani
  // Računanje opsega za prikaz
  const indeksNakonPoslednjeg = trenutnaStrana * brojPoStrani; // 8 -> 9. element
  const indeksPrvog = indeksNakonPoslednjeg - brojPoStrani;  // 4 -> 5. element
  const prikazaniRed = redCekanja.slice(indeksPrvog, indeksNakonPoslednjeg);

  // Ukupan broj stranica
  const ukupanBrojStrana = Math.ceil(redCekanja.length / brojPoStrani);

  return (
    <>
      <h3 className="naslov" >
        RED ČEKANJA
      </h3>

      <div className="kontejner">
        {prikazaniRed.map((k) => {
          return <Korisnik korisnik={k} key={k.id} />;
        })}
      </div>

      {/* Dugamd za narednu i prethodnu stranu za paginaciju */}
      <div style={{ marginTop: "70px" }}>
        <button
          disabled={trenutnaStrana === 1}
          onClick={() => postaviTrenutnuStranu(trenutnaStrana - 1)}
          className="paginacija"
        >
          Prethodna
        </button>

        <span style={{ margin: "0 10px" , color:"black" }}>
          Strana {trenutnaStrana} / {ukupanBrojStrana}
        </span>

        <button
          disabled={trenutnaStrana === ukupanBrojStrana}
          onClick={() => postaviTrenutnuStranu(trenutnaStrana + 1)}
          className="paginacija"
        >
          Sledeća
        </button>
      </div>
    </>
  );
}

export default RedCekanja;
