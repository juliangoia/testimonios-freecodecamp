import "./App.css";
import Testimonio from "./componentes/Testimonio.js";
import personas from "./datos/datos-personas.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {personas.map((persona) => (
          <Testimonio
            nombre={persona.nombre}
            pais={persona.pais}
            imagen={persona.imagen}
            cargo={persona.cargo}
            empresa={persona.empresa}
            testimonio={persona.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
