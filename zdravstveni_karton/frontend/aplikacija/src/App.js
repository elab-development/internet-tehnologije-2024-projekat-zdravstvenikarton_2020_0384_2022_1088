import './App.css';
import NavMeni from './komponente/NavMeni';
import Korisnici from './komponente/Korisnici';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
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
    uloga: "lekar"
  },
  {
    jmbg: "2505983456123",
    ime: "Nikola",
    prezime: "Medić",
    username: "nikola_med",
    uloga: "lekar"
  },
  {
    jmbg: "1502957890123",
    ime: "Jovana",
    prezime: "Jović",
    username: "jovana77",
    uloga: "med_osoblje"
  },
  {
    jmbg: "3004884567891",
    ime: "Dragan",
    prezime: "Đurić",
    username: "dragan_d",
    uloga: "med_osoblje"
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
    uloga: "pacijent"
  },
  {
    jmbg: "0905014567890",
    ime: "Vuk",
    prezime: "Vukić",
    username: "vuk_v",
    uloga: "pacijent"
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
    pacijent: "Petar Petrović",
    lekar: "Dr. Marko Marković",
    medicinskoOsoblje: "Jovana Jović",
  },
  {
    id: 2,
    datumZavrsetka: "/",
    status: "na čekanju",
    dijagnoza: "/",
    terapija: "/",
    pacijent: "Petar Petrović",
    lekar: "Dr. Ana Petrović",
    medicinskoOsoblje: "Jovana Jović",
  },
  {
    id: 3,
    datumZavrsetka: "/",
    status: "na čekanju",
    dijagnoza: "/",
    terapija: "/",
    pacijent: "Mila Milić",
    lekar: "Dr. Ana Petrović",
    medicinskoOsoblje: "Dragan Đurić",
  },
  {
    id: 4,
    datumZavrsetka: "2025-09-04",
    status: "završen",
    dijagnoza: "Alergija",
    terapija: "Antihistaminici",
    pacijent: "Vuk Vukić",
    lekar: "Dr. Nikola Medić",
    medicinskoOsoblje: "Ivana Simić",
  },
  {
    id: 5,
    datumZavrsetka: "/",
    status: "na čekanju",
    dijagnoza: "/",
    terapija: "/",
    pacijent: "Sofija Sofronić",
    lekar: "Dr. Marko Marković",
    medicinskoOsoblje: "Jovan Jović",
  },
  {
    id: 6,
    datumZavrsetka: "/",
    status: "na čekanju",
    dijagnoza: "/",
    terapija: "/",
    pacijent: "Petar Petrović",
    lekar: "Dr. Ana Petrović",
    medicinskoOsoblje: "Dragan Đurić",
  },
  {
    id: 7,
    datumZavrsetka: "2025-09-07",
    status: "završen",
    dijagnoza: "Upala grla",
    terapija: "Antibiotici",
    pacijent: "Mila Milić",
    lekar: "Dr. Nikola Medić",
    medicinskoOsoblje: "Dragan Đurić",
  },
  {
    id: 8,
    datumZavrsetka: "/",
    status: "na čekanju",
    dijagnoza: "/",
    terapija: "/",
    pacijent: "Vuk Vukić",
    lekar: "Dr. Nikola Medić",
    medicinskoOsoblje: "Ivana Simić",
  },
  {
    id: 9,
    datumZavrsetka: "/",
    status: "na čekanju",
    dijagnoza: "/",
    terapija: "/",
    pacijent: "Sofija Sofronić",
    lekar: "Dr. Ana Petrović",
    medicinskoOsoblje: "Jovana Jović",
  },
  {
    id: 10,
    datumZavrsetka: "2025-09-10",
    status: "završen",
    dijagnoza: "Dijabetes",
    terapija: "Insulin",
    pacijent: "Vuk Vukić",
    lekar: "Dr. Marko Marković",
    medicinskoOsoblje: "Jovana Jović",
  }
];

const kartoni = [
  {
    id: 1,
    status: "aktivan",
    poslednjaTerapija: "Amoksicilin",
    poslednjaDijagnoza: "Grip",
    pacijent: "Petar Petrović",
    lekar: "Marko Marković",
    medicinskoOsoblje: "Jovana Jović",
  },
  {
    id: 2,
    status: "neaktivan",
    poslednjaTerapija: "Paracetamol",
    poslednjaDijagnoza: "Prehlada",
    pacijent: "Mila Milić",
    lekar: "Ana Petrović",
    medicinskoOsoblje: "Ivana Simić",
  },
  {
    id: 3,
    status: "aktivan",
    poslednjaTerapija: "Ibuprofen",
    poslednjaDijagnoza: "Upala grla",
    pacijent: "Vuk Vukić",
    lekar: "Nikola Medić",
    medicinskoOsoblje: "Dragan Đurić",
  },
  {
    id: 4,
    status: "aktivan",
    poslednjaTerapija: "Aspirin",
    poslednjaDijagnoza: "Glavobolja",
    pacijent: "Sofija Sofronić",
    lekar: "Marko Marković",
    medicinskoOsoblje: "Jovana Jović",
  },
  {
    id: 5,
    status: "neaktivan",
    poslednjaTerapija: "Vitamin C",
    poslednjaDijagnoza: "Umor",
    pacijent: "Petar Petrović",
    lekar: "Ana Petrović",
    medicinskoOsoblje: "Ivana Simić",
  },
  {
    id: 6,
    status: "aktivan",
    poslednjaTerapija: "Antibiotik",
    poslednjaDijagnoza: "Upala pluća",
    pacijent: "Mila Milić",
    lekar: "Nikola Medić",
    medicinskoOsoblje: "Dragan Đurić",
  },
  {
    id: 7,
    status: "neaktivan",
    poslednjaTerapija: "Kapi za nos",
    poslednjaDijagnoza: "Sinusitis",
    pacijent: "Vuk Vukić",
    lekar: "Marko Marković",
    medicinskoOsoblje: "Jovana Jović",
  },
  {
    id: 8,
    status: "aktivan",
    poslednjaTerapija: "Magnezijum",
    poslednjaDijagnoza: "Grčevi",
    pacijent: "Sofija Sofronić",
    lekar: "Ana Petrović",
    medicinskoOsoblje: "Ivana Simić",
  },
  {
    id: 9,
    status: "neaktivan",
    poslednjaTerapija: "Kortikosteroid",
    poslednjaDijagnoza: "Alergija",
    pacijent: "Petar Petrović",
    lekar: "Nikola Medić",
    medicinskoOsoblje: "Dragan Đurić",
  },
  {
    id: 10,
    status: "aktivan",
    poslednjaTerapija: "Antiseptik",
    poslednjaDijagnoza: "Posekotina",
    pacijent: "Mila Milić",
    lekar: "Marko Marković",
    medicinskoOsoblje: "Jovana Jović",
  }
];


function App() {
  const lokacija = useLocation(); // mora biti const

  return (
    <div className="App">
      {lokacija.pathname === "/" ? null : <NavMeni />}
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/pregledi" element={<Pregledi pregledi={pregledi} />} />
        <Route path="/korisnici" element={<Korisnici korisnici={korisnici} />} />
        <Route path="/kartoni" element={<Kartoni kartoni={kartoni} />} />
      </Routes>
    </div>
  );
}

export default App;
