import axios from "axios";

export function prijavaObrada(e, setPrijavljenKorisnik, navigate) {
  e.preventDefault();
  const inpMejl = document.querySelector("#mejl").value;
  const inpLozinka = document.querySelector("#lozinka").value;

  axios
    .post("http://127.0.0.1:8000/api/login", {
      email: inpMejl,
      password: inpLozinka,
    })
    .then((res) => {
      window.sessionStorage.setItem("auth_token", res.data.access_token);
      setPrijavljenKorisnik(res.data.user);
      navigate("/pregledi");
    })
    .catch((err) => {
      console.log(err);
      console.log("Nije uspelo :(");
    });
}

export function odjavaObrada(setPrijavljenKorisnik, navigate) {
  axios
    .post(
      "http://127.0.0.1:8000/api/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
      }
    )
    .then((res) => {
      setPrijavljenKorisnik(null);
      window.sessionStorage.removeItem("auth_token");
      navigate("/");
      console.log(res.data);
    })
    .catch((err) => {
      console.error("Greška pri odjavi:", err);
    });
}

export function registracijaObrada(e, navigate) {
  e.preventDefault();

  const username = e.target.elements.korisnicko_ime.value;
  const email = e.target.elements.mejl.value;
  const password = e.target.elements.lozinka.value;
  const uloga = e.target.elements.uloga.value;
  const jmbg = e.target.elements.jmbg.value;
  const datum_rodjenja = e.target.elements.datum_rodjenja.value;
  const ime = e.target.elements.ime.value;
  const prezime = e.target.elements.prezime.value;
  const pol = e.target.elements.pol.value;

  axios
    .post("http://127.0.0.1:8000/api/register", {
      username,
      email,
      password,
      uloga,
      jmbg,
      datum_rodjenja,
      ime,
      prezime,
      pol,
    })
    .then((res) => {
      console.log("Odgovor sa servera: ", res.data);
      navigate("/");
    })
    .catch((err) => console.log(err));
}

export function prikazPregledaObrada(prijavljenKorisnik, setPregledi) {
  axios.get(`http://127.0.0.1:8000/api/${prijavljenKorisnik.id}/pregledi`, {})
  .then((res) => {
    console.log(res.data);
    console.log("Radi");
    setPregledi(res.data);
    //setPregledi(res.data);
  })
  .catch((err) => {
    console.log(err);
    console.log("Ne radi");
  })
}