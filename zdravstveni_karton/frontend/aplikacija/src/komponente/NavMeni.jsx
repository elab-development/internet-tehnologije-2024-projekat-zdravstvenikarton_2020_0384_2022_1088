import React from "react";
import { Link } from "react-router-dom";

function NavMeni() {
  return (
    <div className="navMeni">

      <Link to="/pregledi"> Moji pregledi </Link>
      <Link to="/korisnici"> Moji pacijenti </Link>
      <Link to="/kartoni"> Moji karton/i </Link>
      <Link> Red čekanja </Link>
      <Link to="/moji-podaci"> Moji podaci </Link>
      <Link> Obavljenje pregleda </Link>
      
    </div>
  );
}

export default NavMeni;
