import logo from './logo.svg';
import './App.css';
import NavMeni from './komponente/NavMeni';
import Korisnik from './komponente/Korisnik';
import Korisnici from './komponente/Korisnici';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";
import Pregledi from './komponente/Pregledi';


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

const pregledi = [
  {
    id: 1,
    datumZavrsetka: "2025-09-01",
    status: "Završen",
    dijagnoza: "Grip",
    pacijent: "Marko Marković",
    medicinskoOsoblje: "Dr. Jovan Jovanović",
    jmbg: "0101990123456"
  },
  {
    id: 2,
    datumZavrsetka: "2025-09-02",
    status: "U toku",
    dijagnoza: "Povišena temperatura",
    pacijent: "Ana Petrović",
    medicinskoOsoblje: "Dr. Marija Marić",
    jmbg: "0202990123456"
  },
  {
    id: 3,
    datumZavrsetka: "2025-09-03",
    status: "Zakazan",
    dijagnoza: "Bol u leđima",
    pacijent: "Nikola Nikolić",
    medicinskoOsoblje: "Dr. Stevan Stević",
    jmbg: "0303990123456"
  },
  {
    id: 4,
    datumZavrsetka: "2025-09-04",
    status: "Završen",
    dijagnoza: "Alergija",
    pacijent: "Milica Milić",
    medicinskoOsoblje: "Dr. Tamara Tanasić",
    jmbg: "0404990123456"
  },
  {
    id: 5,
    datumZavrsetka: "2025-09-05",
    status: "U toku",
    dijagnoza: "Prehlada",
    pacijent: "Stefan Stefanović",
    medicinskoOsoblje: "Dr. Ivana Ivanović",
    jmbg: "0505990123456"
  },
  {
    id: 6,
    datumZavrsetka: "2025-09-06",
    status: "Zakazan",
    dijagnoza: "Migrena",
    pacijent: "Jelena Jelić",
    medicinskoOsoblje: "Dr. Aleksandar Aleksić",
    jmbg: "0606990123456"
  },
  {
    id: 7,
    datumZavrsetka: "2025-09-07",
    status: "Završen",
    dijagnoza: "Upala grla",
    pacijent: "Luka Lukić",
    medicinskoOsoblje: "Dr. Maja Majić",
    jmbg: "0707990123456"
  },
  {
    id: 8,
    datumZavrsetka: "2025-09-08",
    status: "U toku",
    dijagnoza: "Stomačne tegobe",
    pacijent: "Teodora Todorović",
    medicinskoOsoblje: "Dr. Milan Milićević",
    jmbg: "0808990123456"
  },
  {
    id: 9,
    datumZavrsetka: "2025-09-09",
    status: "Zakazan",
    dijagnoza: "Povišen pritisak",
    pacijent: "Nemanja Nedić",
    medicinskoOsoblje: "Dr. Katarina Katić",
    jmbg: "0909990123456"
  },
  {
    id: 10,
    datumZavrsetka: "2025-09-10",
    status: "Završen",
    dijagnoza: "Dijabetes",
    pacijent: "Sara Sarić",
    medicinskoOsoblje: "Dr. Vuk Vukić",
    jmbg: "1010990123456"
  }
];


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/pregledi" element={<Pregledi pregledi = {pregledi} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
