import axios from "axios";

// MORAĆE DA SE NAPRAVE RAZLIČITE FUNKCIJE ZA PRIKAZ PREGLEDA
// PO SVAKOJ ULOZI

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
      window.sessionStorage.setItem("prijavljen_korisnik", JSON.stringify(res.data.user));
      setPrijavljenKorisnik(res.data.user);
      console.log("OBRADA -> Uspešna prijava: ", res.data);
      navigate("/pregledi");
    })
    .catch((err) => {
      console.log("OBRADA -> Greška prilikom prijave: ", err);
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
      window.sessionStorage.removeItem("prijavljen_korisnik");
      navigate("/");
      console.log("OBRADA -> Uspešna odjava: ", res.data);
    })
    .catch((err) => {
      console.log("OBRADA -> Greška prilikom odjave: ", err);
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
      console.log("OBRADA -> Uspešna registracija: ", res.data);
      navigate("/");
    })
    .catch((err) => {
      console.log("OBRADA -> Greška prilikom registracije: ", err);
    });
}

export function prikazPregledaObrada(prijavljenKorisnik, setPregledi) {
  axios
    .get(`http://127.0.0.1:8000/api/lekar/${prijavljenKorisnik.id}/pregledi`, {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    })
    .then((res) => {
      setPregledi(res.data.data);
      console.log("OBRADA -> Uspešan prikaz pregleda: ", res.data);
    })
    .catch((err) => {
      console.log("OBRADA -> Greška u prikazu pregleda: ", err);
    });
}

export function prikazPacijenataObrada(prijavljenKorisnik, setPacijenti) {
  axios
    .get(`http://127.0.0.1:8000/api/lekar/${prijavljenKorisnik.id}/pacijenti`, {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    })
    .then((res) => {
      setPacijenti(res.data.data);
      console.log("OBRADA -> Uspešan prikaz pacijenata: ", res.data);
    })
    .catch((err) => {
      console.log("OBRADA -> Greška u prikazu pacijenata: ", err);
    });
}

export function prikazRedaObrada(setPacijenti) {
  axios
    .get(`http://127.0.0.1:8000/api/med-osoblje/red-cekanja`, {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    })
    .then((res) => {
      setPacijenti(res.data.data);
      console.log("OBRADA -> Uspešan prikaz reda čekanja: ", res.data);
    })
    .catch((err) => {
      console.log("OBRADA -> Greška u prikazu reda čekanja: ", err);
    });
}

export function prikazKartonaObrada(prijavljenKorisnik, setKarton) {
  axios
    .get(`http://127.0.0.1:8000/api/pacijent/${prijavljenKorisnik.id}/z-karton`, {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    })
    .then((res) => {
      setKarton(res.data.data);
      console.log("OBRADA -> Uspešan prikaz kartona: ", res.data);
    })
    .catch((err) => {
      console.log("OBRADA -> Greška u prikazu kartona: ", err);
    });
}
