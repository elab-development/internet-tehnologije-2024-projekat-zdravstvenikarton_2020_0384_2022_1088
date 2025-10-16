
export default function Korisnik({korisnik}) {
  return (
    <div className= "kartica">
      <div> <label> ID: </label>  <label>{korisnik.id} </label> </div>
      <div> <label> JMBG: </label>  <label>{korisnik.jmbg} </label> </div>
      <div> <label> Ime: </label>  <label>{korisnik.ime} </label> </div>
      <div> <label> Prezime: </label>  <label>{korisnik.prezime} </label> </div>
      <div> <label> Pol: </label>  <label>{korisnik.pol} </label> </div>
      <div> <label> Mejl: </label>  <label>{korisnik.email} </label> </div>
      <div> <label> Uloga: </label>  <label>{korisnik.uloga} </label> </div>
      <div> <label> Korisničko ime: </label>  <label>{korisnik.username} </label> </div>
    </div>
  );
}

// <div> <label> Datum rodjenja: </label>  <label>{korisnik.datum_rodjenja} </label> </div>