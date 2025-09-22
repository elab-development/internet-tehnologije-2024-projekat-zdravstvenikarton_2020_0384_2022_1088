import logo from './logo.svg';
import './App.css';
import NavMeni from './komponente/NavMeni';
import Korisnik from './komponente/Korisnik';
import Korisnici from './komponente/Korisnici';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";


const nizKorisnik = [
  {
    jmbg: "0101990123456",
    ime: "Marko",
    prezime: "Marković",
    username: "marko123",
    uloga: "lekar"
  },
  {
    jmbg: "1203996789123",
    ime: "Ana",
    prezime: "Petrović",
    username: "ana_p",
    uloga: "pacijent"
  },
  {
    jmbg: "2505983456123",
    ime: "Nikola",
    prezime: "Medić",
    username: "nikola_med",
    uloga: "med_osoblje"
  },
  {
    jmbg: "1502957890123",
    ime: "Jovana",
    prezime: "Jović",
    username: "jovana77",
    uloga: "pacijent"
  },
  {
    jmbg: "3004884567891",
    ime: "Dragan",
    prezime: "Đurić",
    username: "dragan_d",
    uloga: "lekar"
  },
  {
    jmbg: "0407991234567",
    ime: "Ivana",
    prezime: "Simić",
    username: "ivana_s",
    uloga: "med_osoblje"
  },
  {
    jmbg: "2801969876543",
    ime: "Petar",
    prezime: "Petrović",
    username: "petarx",
    uloga: "pacijent"
  },
  {
    jmbg: "1704926543210",
    ime: "Mila",
    prezime: "Milić",
    username: "mila88",
    uloga: "lekar"
  },
  {
    jmbg: "0905014567890",
    ime: "Vuk",
    prezime: "Vukić",
    username: "vuk_v",
    uloga: "med_osoblje"
  },
  {
    jmbg: "2212017896543",
    ime: "Sofija",
    prezime: "Sofronić",
    username: "sofija",
    uloga: "pacijent"
  }
];


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Pocetna />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
