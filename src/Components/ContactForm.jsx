import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ succeeded: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const response = await fetch("/send", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      setState({ succeeded: true });
    }
  };

  if (state.succeeded) {
    return <p>¡Gracias por enviar tu mensaje!</p>;
  }

  return (
    <div className="m-8 flex h-full w-full flex-col items-center justify-start gap-2">
      <h2>Formulario de contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-start gap-6 bg-purewhite p-10"
        encType="multipart/form-data"
      >
        <div className="flex w-full flex-col">
          <label>Nombre:</label>
          <input type="text" name="name" required />
        </div>
        <div className="flex w-full flex-col">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="flex w-full flex-col">
          <label>Teléfono:</label>
          <input type="tel" name="phone" required />
        </div>
        <div className="flex w-full flex-col">
          <label>Entidad:</label>
          <input type="text" name="entity" required />
        </div>
        <div className="flex w-full flex-col">
          <label>Mensaje:</label>
          <textarea name="message" required></textarea>
        </div>
        <div className="flex w-full justify-end">
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
