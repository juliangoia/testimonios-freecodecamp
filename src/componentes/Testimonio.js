import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} /*Con las comillas `` me permite escribir codigo de javascript dentro de la cadena de caracteres. Y para hacerlo tengo que usar ${}*/
        alt={"Foto de " + props.nombre}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}".</p>
      </div>
    </div> /*La etiqueta "strong" es para indicar que esa parte va a tener mayor importancia en el texto y se pone en negrita. Si no quisieramos que tenga mayor importancia y solo lo queremos mostrar en negrita, se usa la etiqueta "b"*/
  );
}

export default Testimonio;
