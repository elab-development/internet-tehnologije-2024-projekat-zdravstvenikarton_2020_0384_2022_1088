import React from "react";

export default function Korisnik({korisnik}) {
  return (
    <div className="kartica">
     <div> <label> JMBG: </label>  <label>{korisnik.jmbg} </label> </div>
     <div> <label> Ime: </label>  <label>{korisnik.ime} </label> </div>
     <div> <label> Prezime: </label>  <label>{korisnik.prezime} </label> </div>
     <div> <label> Username: </label>  <label>{korisnik.username} </label> </div>
     <div> <label> Uloga: </label>  <label>{korisnik.uloga} </label> </div>
    </div>
  );
}
