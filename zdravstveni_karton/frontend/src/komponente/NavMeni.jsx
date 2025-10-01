import React from "react";
import { Link } from "react-router-dom";

function NavMeni({odjava, uloga}) {

  if(uloga === "lekar") {
    return(
      <div className="navMeni">

      <Link to="/pregledi"> Moji pregledi </Link>
      <Link to="/pacijenti"> Moji pacijenti </Link>
      <Link to="/kartoni"> Moji kartoni </Link>
      <Link to="/red-cekanja"> Red čekanja </Link>
      <Link to="/moji-podaci"> Moji podaci </Link>
      <button onClick={odjava}> Odjavi se</button>
    
    </div>
    );
  } else if(uloga === "pacijent") {
    return(
      <div className="navMeni">
        <Link to="/pregledi"> Moji pregledi </Link>
        <Link to="/kartoni"> Moj karton </Link>
        <Link to="/moji-podaci"> Moji podaci </Link>
        <button onClick={odjava}> Odjavi se</button>
      </div>
    );
  } else if(uloga === "med_osoblje") {
    return(
      <div className="navMeni">
        <Link to="/pregledi"> Moji pregledi </Link>
        <Link to="/kartoni"> Moji kartoni </Link>
        <Link to="red-cekanja"> Red čekanja </Link>
        <Link to="/moji-podaci"> Moji podaci </Link>
        <button  onClick={odjava}> Odjavi se</button>
    </div>
    );
  }
}

export default NavMeni;
