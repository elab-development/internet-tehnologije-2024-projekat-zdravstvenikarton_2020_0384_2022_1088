import Pregled from "./Pregled";

function RedCekanja({ pregledi }) {
  let nizZaPrikaz = pregledi.filter((p) => p.status === "na čekanju");

  return (
    <>
      <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}>
        RED ČEKANJA
      </h3>

      <div className="kontejner">
        {nizZaPrikaz.map((p) => {
          return <Pregled pregled={p} />;
        })}
      </div>
    </>
  );
}

export default RedCekanja;
