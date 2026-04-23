import { useState } from "react";

function ContactoForm({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") return;

    const nuevo = {
      id: Date.now(),
      nombre,
      telefono,
    };

    onAgregar(nuevo);

    setNombre("");
    setTelefono("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default ContactoForm;
