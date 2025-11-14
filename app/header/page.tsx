"use client";

import Header from "../components/header";

export default function Page() {
  return (
    <div className="w-full max-w-md mx-auto mt-6 border rounded-xl overflow-hidden">
      <Header role="Administrador" />
      
      <div className="p-4">
        <p>Este es el contenido de prueba debajo del header.</p>
      </div>
    </div>
  );
}


