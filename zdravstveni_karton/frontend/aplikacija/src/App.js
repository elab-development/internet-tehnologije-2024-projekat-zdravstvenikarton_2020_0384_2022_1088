import './App.css';
import NavMeni from './komponente/NavMeni';
import Korisnici from './komponente/Korisnici';
import Prijava from './komponente/Prijava';
import Pregledi from './komponente/Pregledi';
import Kartoni from './komponente/Kartoni';
import Korisnik from './komponente/Korisnik';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';


const korisnici = [
  {
    jmbg: "0101990123456",
    ime: "Marko",
    prezime: "Marković",
    email: "marko123@gmail.com",
    uloga: "lekar",
    lozinka: "mk1234ab"
  },
  {
    jmbg: "1203996789123",
    ime: "Ana",
    prezime: "Petrović",
    email: "ana.p@gmail.com",
    uloga: "lekar",
    lozinka: "ap5678cd"
  },
  {
    jmbg: "2505983456123",
    ime: "Nikola",
    prezime: "Medić",
    email: "nikola.med@gmail.com",
    uloga: "lekar",
    lozinka: "nm9012ef"
  },
  {
    jmbg: "1502957890123",
    ime: "Jovana",
    prezime: "Jović",
    email: "jovana77@gmail.com",
    uloga: "med_osoblje",
    lozinka: "jj3456gh"
  },
  {
    jmbg: "3004884567891",
    ime: "Dragan",
    prezime: "Đurić",
    email: "dragan.d@gmail.com",
    uloga: "med_osoblje",
    lozinka: "dd7890ij"
  },
  {
    jmbg: "0407991234567",
    ime: "Ivana",
    prezime: "Simić",
    email: "ivana.s@gmail.com",
    uloga: "med_osoblje",
    lozinka: "is1122kl"
  },
  {
    jmbg: "2801969876543",
    ime: "Petar",
    prezime: "Petrović",
    email: "petarx@gmail.com",
    uloga: "pacijent",
    lozinka: "pp3344mn"
  },
  {
    jmbg: "1704926543210",
    ime: "Mila",
    prezime: "Milić",
    email: "mila88@gmail.com",
    uloga: "pacijent",
    lozinka: "mm5566op"
  },
  {
    jmbg: "0905014567890",
    ime: "Vuk",
    prezime: "Vukić",
    email: "vuk.v@gmail.com",
    uloga: "pacijent",
    lozinka: "vv7788qr"
  },
  {
    jmbg: "2212017896543",
    ime: "Sofija",
    prezime: "Sofronić",
    email: "sofija@gmail.com",
    uloga: "pacijent",
    lozinka: "ss9900tu"
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

  const [prijavljen, setPrijavljen] = useState(0);
  const navigate = useNavigate();
  const lokacija = useLocation();
  const[prijavljenKorisnik, setPrijavljenKorisnik] = useState();

  function prijava() {
    const inpMejl = document.querySelector('#mejl');
    const inpLozinka = document.querySelector('#lozinka');

    const korisnik = korisnici.find(
      k => k.email === inpMejl.value && k.lozinka === inpLozinka.value
    );

    if (korisnik) {
      setPrijavljen(1);
      setPrijavljenKorisnik(korisnik);
      navigate("/pregledi");  // nakon uspešne prijave
    } else {
      console.log("KREDENCIJALI NISU TAČNI !");
    }
  }


  return (
    <div className="App">
      {/* Prikaz NavMeni-a osim na početnoj */}
      {lokacija.pathname !== "/" && prijavljen === 1 ? <NavMeni/> : null}

      <Routes>
        {/* Početna ruta */}
        <Route path="/" element={<Prijava prijava={prijava} prijavljen={prijavljen} />} />

        {/* Ostale rute dostupne samo ako je korisnik prijavljen */}
        {prijavljen === 1 && (
          <>
            <Route path="/pregledi" element={<Pregledi pregledi={pregledi} />} />
            <Route path="/korisnici" element={<Korisnici korisnici={korisnici} />} />
            <Route path="/kartoni" element={<Kartoni kartoni={kartoni} />} />
            <Route path="/moji-podaci" element={<Korisnik korisnik={prijavljenKorisnik}/>} />

          </>
        )}
        {/* Not Found ruta */}
        <Route path="*" element={<h2>Stranica nije pronađena (404)</h2>} />

      </Routes>
    </div>
  );
}


export default App;
