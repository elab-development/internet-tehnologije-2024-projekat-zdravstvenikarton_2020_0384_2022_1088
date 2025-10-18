import { useEffect } from "react";
import Karton from "./Karton";

const Kartoni = ({ karton, prikazKartona }) => {
  useEffect(() => {
    prikazKartona();
  }, [])

  return (
    <>
      <h3 style={{ marginBottom: "50px", marginTop: "100px" }}>
        VAŠ KARTON  
      </h3>
      <div className="kontejner">
        <Karton zk={karton}  key={karton.id}/>
      </div>
    </>
  );
};

export default Kartoni;
