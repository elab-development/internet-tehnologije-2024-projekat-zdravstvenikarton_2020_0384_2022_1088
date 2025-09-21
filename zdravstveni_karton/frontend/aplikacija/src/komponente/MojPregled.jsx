import React from "react";

export default function MojPregled({korisnik}) {
  return (
    <div>
     <> <label> Id pregleda </label>  <label>{korisnik.jmbg} </label> </>
     <> <label> Datum završetka </label>  <label>{korisnik.jmbg} </label> </>
     <> <label>  Status </label>  <label>{korisnik.jmbg} </label> </>
     <> <label> Dijagnoza </label>  <label>{korisnik.jmbg} </label> </>
     <> <label> Pacijent  </label>  <label>{korisnik.jmbg} </label> </>
     <> <label> Medicinsko osoblje </label>  <label>{korisnik.jmbg} </label> </> 
    </div>
  );
}
