import Pregled from "./Pregled"

function RedCekanja({pregledi}) {

    let nizZaPrikaz = pregledi.filter((p) => p.status === "na čekanju")

  return (
    <div className="kontejner">
      {
        nizZaPrikaz.map(p => {
            return <Pregled pregled={p}/>
        })
      }
    </div>
  )
}

export default RedCekanja
