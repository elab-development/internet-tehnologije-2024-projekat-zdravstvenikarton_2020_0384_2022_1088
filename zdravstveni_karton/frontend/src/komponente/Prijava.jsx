import React from "react";

export default function Prijava({ prijava }) {
  return (
    <div className="prijava">
      <div className="teloPrijava">
        <h3>Technomedic</h3>
        <p> Dobro došli !</p>
       
        <form className="formaPrijava">
          <input type="email" required id="mejl" placeholder="Mejl"></input>
          <input type="password" required id="lozinka" placeholder="Lozinka"></input>

          <div>  
            <input type="radio" id="lekar" name="uloga" value="lekar" />
            <label for="lekar"> lekar</label>
          </div>
          <div>
            <input type="radio" id="med_osoblje" name="uloga" value="med_osoblje"/>
            <label for="med_osoblje"> medicinsko osoblje</label>
          </div>
          <div>
            <input type="radio" id="pacijent" name="uloga" value="pacijent"/>
            <label for="pacijent"> pacijent</label>
          </div>

          <button type="button" onClick={prijava}>Prijavite se</button>
        </form>
      </div>
    </div>
  );
}
