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

            <br></br>
          <button type="submit" >Prijavite se</button>
        </form>
      </div>
    </div>
  );
}
