import React from "react";

export default function Pregled({pregled}) {
  return (
    <div className="kartica">
      <div> <label> Id pregleda: </label> <label>{pregled.id} </label> </div>
      <div> <label> Datum završetka: </label> <label>{pregled.datumZavrsetka} </label> </div>
      <div> <label> Status: </label> <label>{pregled.status} </label> </div>
      <div> <label> Dijagnoza: </label> <label>{pregled.dijagnoza} </label> </div>
      <div> <label> Terapija: </label> <label>{pregled.terapija} </label> </div>
      <div> <label> Lekar: </label> <label>{pregled.lekar_id} </label> </div>
      <div> <label> Medicinsko osoblje: </label> <label>{pregled.med_osoblje_id} </label> </div>
      <div> <label> Pacijent: </label> <label>{pregled.pacijent_id} </label> </div>
    </div>
  );
}