import "./App.css";
import NavMeni from "./komponente/NavMeni";
import Korisnici from "./komponente/Korisnici";
import Prijava from "./komponente/Prijava";
import Pregledi from "./komponente/Pregledi";
import Kartoni from "./komponente/Kartoni";
import RedCekanja from "./komponente/RedCekanja";
import Registracija from "./komponente/Registracija";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

///////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [pregledi, setPregledi] = useState([]);
  const [pacijenti, setPacijenti] = useState([]);
  const [kartoni, setKartoni] = useState([]);

  const navigate = useNavigate();
  const lokacija = useLocation();
  const [prijavljenKorisnik, setPrijavljenKorisnik] = useState(null);

  useEffect(() => {
    const token = window.sessionStorage.getItem("auth_token");
    if (token) {
      setPrijavljenKorisnik(token);
    }
  }, []);

  //const [uloga, setUloga] = useState();
  const [uloga,setUloga] = useState(null);

  /////////////////////////////////////////////////////////////
  //// FUNKCIJA ZA PRIJAVU
  function prijava(e) {
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
        setPrijavljenKorisnik(true);
        setUloga(res.data.user.uloga);
        navigate("/pregledi");
      })
      .catch((err) => {
        console.log(err);
        console.log("Nije uspelo :(");
      });
  }

  /////////////////////////////////////////////////////////////
  //// FUNKCIJA ZA ODJAVU
  function odjava() {
    axios
      .post(
        "http://127.0.0.1:8000/api/logout",
        {}, // telo zahteva (prazno)
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
      })
      .finally(() => {});
  }

  /////////////////////////////////////////////////////////////
  //// FUNKCIJA ZA REGISTRACIJA
  function registracija(e) {
    e.preventDefault();
    //podaci iz forme
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
        username: username,
        email: email,
        password: password,
        uloga: uloga,
        jmbg: jmbg,
        datum_rodjenja: datum_rodjenja,
        ime: ime,
        prezime: prezime,
        pol: pol,
      })
      .then((res) => {
        console.log("Odgovor sa server: ", res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  /* Prikaz NavMeni-a osim na početnoj */
  let meni = null;
  if (prijavljenKorisnik !== null && lokacija.pathname !== "/") {
    meni = <NavMeni odjava={odjava} uloga={uloga} />;
  }

  return (
    <div className="App">
      {meni}

      <Routes>
        <Route path="/" element={<Prijava prijava={prijava} prijavljen={prijavljenKorisnik} />} />

        <Route
          path="/registracija"
          element={
            prijavljenKorisnik === null ? <Registracija registracija={registracija} /> : null
          }
        />

        <Route
          path="/pregledi"
          element={
            prijavljenKorisnik !== null ? (
              <Pregledi pregledi={pregledi} prijavljen={prijavljenKorisnik} uloga={uloga} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />
        <Route
          path="/pacijenti"
          element={
            prijavljenKorisnik !== null ? (
              <Korisnici pacijenti={pacijenti} prijavljen={prijavljenKorisnik} uloga={uloga} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />
        <Route
          path="/kartoni"
          element={
            prijavljenKorisnik !== null ? (
              <Kartoni kartoni={kartoni} prijavljen={prijavljenKorisnik} uloga={uloga} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />
        <Route
          path="/moji-podaci"
          element={
            prijavljenKorisnik !== null ? (
              <Korisnici prijavljen={prijavljenKorisnik} mojiP={1} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />
        <Route
          path="/red-cekanja"
          element={
            prijavljenKorisnik !== null ? (
              <RedCekanja pregledi={pregledi} />
            ) : (
              <Prijava prijava={prijava} />
            )
          }
        />
        <Route path="*" element={<h2>Stranica nije pronađena (404)</h2>} />
      </Routes>
    </div>
  );
}

export default App;
