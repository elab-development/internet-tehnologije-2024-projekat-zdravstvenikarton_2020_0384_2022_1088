import React from "react";

export default function Pocetna() {
  return (
    <div className="pocetna">
      <h3>Forma za prijavu</h3>
      <p> Dobro došli !</p>
      <form className="formaPrijava">
        <input type="text" id="email" placeholder="Mejl"></input>
        <input type="password" id="lozinka" placeholder="Lozinka"></input>
        <button type="submit"> Prijavite se </button>
      </form>
      
    </div>
  );
}
