import logo from './logo.svg';
import './App.css';
import NavMeni from './komponente/NavMeni';
import Korisnik from './komponente/Korisnik';
import Korisnici from './komponente/Korisnici';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";
import Pregledi from './komponente/Pregledi';
import Kartoni from './komponente/Kartoni';

const korisnici = [
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
    status: "završen",
    dijagnoza: "Grip",
    terapija: "Amoksicilin",
    pacijent: "Marko Marković",
    lekar: "Dr. Pera Perić",
    medicinskoOsoblje: "Jovan Jovanović",
  },
  {
    id: 2,
    datumZavrsetka: "2025-09-02",
    status: "na čekanju",
    dijagnoza: "Povišena temperatura",
    terapija: "Paracetamol",
    pacijent: "Ana Petrović",
    lekar: "Dr. Jelena Jelić",
    medicinskoOsoblje: "Milan Ilić",
  },
  {
    id: 3,
    datumZavrsetka: "2025-09-03",
    status: "na čekanju",
    dijagnoza: "Bol u leđima",
    terapija: "Fizioterapija",
    pacijent: "Nikola Nikolić",
    lekar: "Dr. Ivana Ivković",
    medicinskoOsoblje: "Maja Majić",
  },
  {
    id: 4,
    datumZavrsetka: "2025-09-04",
    status: "završen",
    dijagnoza: "Alergija",
    terapija: "Antihistaminici",
    pacijent: "Milica Milić",
    lekar: "Dr. Tamara Tanasić",
    medicinskoOsoblje: "Stefan Stojković",
  },
  {
    id: 5,
    datumZavrsetka: "2025-09-05",
    status: "na čekanju",
    dijagnoza: "Prehlada",
    terapija: "Vitamin C i čaj",
    pacijent: "Stefan Stefanović",
    lekar: "Dr. Marija Marić",
    medicinskoOsoblje: "Ivana Ilić",
  },
  {
    id: 6,
    datumZavrsetka: "2025-09-06",
    status: "na čekanju",
    dijagnoza: "Migrena",
    terapija: "Analgetici",
    pacijent: "Jelena Jelić",
    lekar: "Dr. Aleksandar Aleksić",
    medicinskoOsoblje: "Nenad Nikolić",
  },
  {
    id: 7,
    datumZavrsetka: "2025-09-07",
    status: "završen",
    dijagnoza: "Upala grla",
    terapija: "Antibiotici",
    pacijent: "Luka Lukić",
    lekar: "Dr. Katarina Katić",
    medicinskoOsoblje: "Miloš Milojević",
  },
  {
    id: 8,
    datumZavrsetka: "2025-09-08",
    status: "na čekanju",
    dijagnoza: "Stomačne tegobe",
    terapija: "Probiotici",
    pacijent: "Teodora Todorović",
    lekar: "Dr. Milan Milićević",
    medicinskoOsoblje: "Jasna Jovanović",
  },
  {
    id: 9,
    datumZavrsetka: "2025-09-09",
    status: "na čekanju",
    dijagnoza: "Povišen pritisak",
    terapija: "Beta blokatori",
    pacijent: "Nemanja Nedić",
    lekar: "Dr. Bojana Bojić",
    medicinskoOsoblje: "Petar Petrović",
  },
  {
    id: 10,
    datumZavrsetka: "2025-09-10",
    status: "završen",
    dijagnoza: "Dijabetes",
    terapija: "Insulin",
    pacijent: "Sara Sarić",
    lekar: "Dr. Vuk Vukić",
    medicinskoOsoblje: "Mira Mirić",
  }
];

const kartoni = [
  {
    id: 1,
    status: "završen",
    poslednjaTerapija: "Amoksicilin",
    poslednjaDijagnoza: "Grip",
    pacijent: "Marko Marković",
    lekar: "Dr. Pera Perić",
    medicinskoOsoblje: "Jovan Jovanović",
  },
  {
    id: 2,
    status: "na čekanju",
    poslednjaTerapija: "Paracetamol",
    poslednjaDijagnoza: "Povišena temperatura",
    pacijent: "Ana Petrović",
    lekar: "Dr. Jelena Jelić",
    medicinskoOsoblje: "Milan Ilić",
  },
  {
    id: 3,
    status: "završen",
    poslednjaTerapija: "Fizioterapija",
    poslednjaDijagnoza: "Bol u leđima",
    pacijent: "Nikola Nikolić",
    lekar: "Dr. Ivana Ivković",
    medicinskoOsoblje: "Maja Majić",
  },
  {
    id: 4,
    status: "na čekanju",
    poslednjaTerapija: "Antihistaminici",
    poslednjaDijagnoza: "Alergija",
    pacijent: "Milica Milić",
    lekar: "Dr. Tamara Tanasić",
    medicinskoOsoblje: "Stefan Stojković",
  },
  {
    id: 5,
    status: "završen",
    poslednjaTerapija: "Vitamin C i čaj",
    poslednjaDijagnoza: "Prehlada",
    pacijent: "Stefan Stefanović",
    lekar: "Dr. Marija Marić",
    medicinskoOsoblje: "Ivana Ilić",
  },
  {
    id: 6,
    status: "na čekanju",
    poslednjaTerapija: "Analgetici",
    poslednjaDijagnoza: "Migrena",
    pacijent: "Jelena Jelić",
    lekar: "Dr. Aleksandar Aleksić",
    medicinskoOsoblje: "Nenad Nikolić",
  },
  {
    id: 7,
    status: "završen",
    poslednjaTerapija: "Antibiotici",
    poslednjaDijagnoza: "Upala grla",
    pacijent: "Luka Lukić",
    lekar: "Dr. Katarina Katić",
    medicinskoOsoblje: "Miloš Milojević",
  },
  {
    id: 8,
    status: "na čekanju",
    poslednjaTerapija: "Probiotici",
    poslednjaDijagnoza: "Stomačne tegobe",
    pacijent: "Teodora Todorović",
    lekar: "Dr. Milan Milićević",
    medicinskoOsoblje: "Jasna Jovanović",
  },
  {
    id: 9,
    status: "završen",
    poslednjaTerapija: "Beta blokatori",
    poslednjaDijagnoza: "Povišen pritisak",
    pacijent: "Nemanja Nedić",
    lekar: "Dr. Bojana Bojić",
    medicinskoOsoblje: "Petar Petrović",
  },
  {
    id: 10,
    status: "završen",
    poslednjaTerapija: "Insulin",
    poslednjaDijagnoza: "Dijabetes",
    pacijent: "Sara Sarić",
    lekar: "Dr. Vuk Vukić",
    medicinskoOsoblje: "Mira Mirić",
  }
];


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMeni/>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/pregledi" element={<Pregledi pregledi = {pregledi} />} />
          <Route path="/korisnici" element={<Korisnici korisnici = {korisnici} />} />
          <Route path="/kartoni" element={<Kartoni kartoni = {kartoni} />} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
