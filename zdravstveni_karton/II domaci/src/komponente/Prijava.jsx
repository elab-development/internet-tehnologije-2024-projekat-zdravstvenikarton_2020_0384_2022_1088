import logo from '../logoIme.png';

export default function Prijava({ prijava }) {
  return (
    <div className="prijava">

    <img src={logo} id="logo"></img>

      <div className="teloPrijava">
        <h3>PRIJAVA</h3>
        <p> Dobro došli !</p>
       
        <form className="formaPrijava" onSubmit={prijava}>
          <input type="email" required id="mejl" placeholder="Mejl"></input>
          <input type="password" required id="lozinka" placeholder="Lozinka"></input>

          <div>  
            <input type="radio" id="lekar" name="uloga" value="lekar" required/>
            <label htmlFor="lekar"> lekar</label>
          </div>
          <div>
            <input type="radio" id="med_osoblje" name="uloga" value="med_osoblje"/>
            <label htmlFor="med_osoblje"> medicinsko osoblje</label>
          </div>
          <div>
            <input type="radio" id="pacijent" name="uloga" value="pacijent"/>
            <label htmlFor="pacijent"> pacijent</label>
          </div>
            <br></br>
          <button type="submit" >Prijavite se</button>
        </form>
      </div>
    </div>
  );
}
