import { useEffect } from "react";
import Pregled from "./Pregled";

function RedCekanja({ prikazReda, redCekanja }) {
  useEffect(() => {
    prikazReda();
  }, []);
  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        RED ČEKANJA
      </h3>

      <div className="kontejner">
        {redCekanja.map((p) => {
          return <Pregled pregled={p} />;
        })}
      </div>
    </>
  );
}

export default RedCekanja;
