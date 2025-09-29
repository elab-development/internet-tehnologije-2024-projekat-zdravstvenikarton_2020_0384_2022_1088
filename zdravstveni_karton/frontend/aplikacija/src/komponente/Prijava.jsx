import React from "react";

export default function Prijava({prijava}) {
  return (
    <div className="pocetna">
      <div className="teloPocetne">
        <h3>Forma za prijavu</h3>
        <p> Dobro došli !</p>
        <form className="formaPrijava" >
          <input type="text" id="mejl" placeholder="Mejl"></input>
          <input type="password" id="lozinka" placeholder="Lozinka"></input>
          <button type="button" onClick={prijava}> Prijavite se </button>
        </form>
      </div>
    </div>
  );
}
