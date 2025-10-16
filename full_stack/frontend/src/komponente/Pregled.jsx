import React from "react";

export default function Pregled({pregled}) {
  return (
    <div className="kartica">
      <div> <label> Id pregleda: </label> <label>{pregled.id} </label> </div>
      <div> <label> Vreme završetka: </label> <label>{pregled.vreme_zavrsetka} </label> </div>
      <div> <label> Status: </label> <label>{pregled.status} </label> </div>
      <div> <label> Dijagnoza: </label> <label>{pregled.dijagnoza} </label> </div>
      <div> <label> Terapija: </label> <label>{pregled.terapija} </label> </div>
      <div> <label> Lekar: </label> <label>{pregled.lekar} </label> </div>
      <div> <label> Medicinsko osoblje: </label> <label>{pregled.med_osoblje} </label> </div>
      <div> <label> Pacijent: </label> <label>{pregled.pacijent} </label> </div>
    </div>
  );
}