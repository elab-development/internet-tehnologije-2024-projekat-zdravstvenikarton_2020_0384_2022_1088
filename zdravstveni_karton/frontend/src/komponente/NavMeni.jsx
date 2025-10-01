import React from "react";
import { Link } from "react-router-dom";

function NavMeni({odjava}) {
  return (
    <div className="navMeni">

      <Link to="/pregledi"> Moji pregledi </Link>
      <Link to="/pacijenti"> Moji pacijenti </Link>
      <Link to="/kartoni"> Moji karton/i </Link>
      <Link> Red čekanja </Link>
      <Link to="/moji-podaci"> Moji podaci </Link>
      <button  onClick={odjava}> Odjavi se</button>

      
    </div>
  );
}

export default NavMeni;
