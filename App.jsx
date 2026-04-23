import { useState } from "react";
import ContactoForm from "./components/ContactoForm";
import ContactoCard from "./components/ContactoCard";
import "./App.css";

function App() {
  const [contactos, setContactos] = useState([]);

  const agregarContacto = (nuevo) => {
    setContactos([...contactos, nuevo]);
  };

  const eliminarContacto = (id) => {
    const nuevos = contactos.filter((c) => c.id !== id);
    setContactos(nuevos);
  };

  return (
    <div className="container">
      <h1>Mi agenda</h1>

      <ContactoForm onAgregar={agregarContacto} />

      <p>Total: {contactos.length}</p>

      <div className="lista">
        {contactos.map((c) => (
          <ContactoCard
            key={c.id}
            contacto={c}
            onEliminar={eliminarContacto}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
