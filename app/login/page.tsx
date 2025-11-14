"use client";

import { FormEvent, useState } from "react";
import Header from "../components/header";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const usuario = formData.get("usuario")?.toString().trim();
    const contraseña = formData.get("contraseña")?.toString().trim();

    if (!usuario || !contraseña) {
      setError("Por favor ingresa usuario y contraseña.");
      return;
    }

    setError(null);
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);
  };

  return (
    <div className="min-h-screen bg-fondoP  flex flex-col items-center">
       <Header role="" />
      {/* Contenedor principal responsivo */}
        <div className="mt-6 bg-fondoS text-textoB rounded-2xl p-6 w-80 sm:w-96 shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-textoB text-center mb-8">
          Inicia Sesión
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="usuario"
              className="block text-textoB font-semibold mb-2"
            >
              Usuario:
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              placeholder="Ingresa tu usuario"
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label
              htmlFor="contraseña"
              className="block text-textoB font-semibold mb-2"
            >
              Contraseña:
            </label>
            <input
              id="contraseña"
              name="contraseña"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {error && (
            <p className="text-sm text-yellow-200 bg-black/40 p-2 rounded-md text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-textoN text-textoB font-semibold py-2 rounded-md hover:bg-gray-800 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Pie de página */}
        <p className="text-center text-textoB mt-6 text-sm opacity-80">
          ¿No tienes cuenta?{" "}
          <a href="#" className="underline hover:text-gray-200">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
