function ContactoCard({ contacto, onEliminar }) {
  return (
    <div className="card">
      <div>
        <h3>{contacto.nombre}</h3>
        <p>{contacto.telefono}</p>
      </div>

      <button onClick={() => onEliminar(contacto.id)}>
        ✕
      </button>
    </div>
  );
}

export default ContactoCard;
