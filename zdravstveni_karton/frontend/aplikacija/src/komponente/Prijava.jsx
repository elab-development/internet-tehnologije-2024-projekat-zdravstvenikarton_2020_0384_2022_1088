import React from "react";

export default function Prijava({prijava}) {
  return (
    <div className="prijava">
      <div className="teloPrijava">
        <h3>Technomedic</h3>
        <p> Dobro došli !</p>
        <form className="formaPrijava" >
          <input type="email" required id="mejl" placeholder="Mejl"></input>
          <input type="password" required id="lozinka" placeholder="Lozinka"></input>
          <button type="button" onClick={prijava}> Prijavite se </button>
        </form>
      </div>
    </div>
  );
}
