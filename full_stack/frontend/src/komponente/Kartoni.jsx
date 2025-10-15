import { useEffect } from "react";
import Karton from "./Karton";

const Kartoni = ({ karton, prikazKartona}) => {
  useEffect(()=>{
    prikazKartona();
  },[])

  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        VAŠI KARTONI
      </h3>
      <div className="kontejner">
          <Karton zk={karton}/>
      </div>
    </>
  );
};

export default Kartoni;
