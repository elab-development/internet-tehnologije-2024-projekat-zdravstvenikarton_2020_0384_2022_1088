
export default function Korisnik({korisnik, mojiP}) {
  return (
    <div className= "kartica">
     <div> <label> JMBG: </label>  <label>{korisnik.jmbg} </label> </div>
     <div> <label> Ime: </label>  <label>{korisnik.ime} </label> </div>
     <div> <label> Prezime: </label>  <label>{korisnik.prezime} </label> </div>
     <div> <label> Mejl: </label>  <label>{korisnik.email} </label> </div>
     <div> <label> Uloga: </label>  <label>{korisnik.uloga} </label> </div>
    </div>
  );
}
