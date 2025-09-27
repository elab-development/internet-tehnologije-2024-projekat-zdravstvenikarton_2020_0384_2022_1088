import React from "react";

export default function Pregled({pregled}) {
  return (
    <div className="karticaPregled">
      <div> <label> Id pregleda </label>  <label>{pregled.jmbg} </label> </div>
      <div> <label> Datum završetka </label>  <label>{pregled.jmbg} </label> </div>
      <div> <label> Status </label>  <label>{pregled.jmbg} </label> </div>
      <div> <label> Dijagnoza </label>  <label>{pregled.jmbg} </label> </div>
      <div> <label> Pacijent  </label>  <label>{pregled.jmbg} </label> </div>
      <div> <label> Medicinsko osoblje </label>  <label>{pregled.jmbg} </label> </div>
    </div>
  );
}