"use client";
import { useEffect, useState } from "react";

export default function SalonPrive() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // Le middleware protège déjà l’accès via cookie "sid".
    // Ici on vérifie juste que la page se charge.
    setOk(true);
  }, []);

  return (
    <main>
      <h1>Salon Privé — SEYMR®</h1>
      <p>Accès réservé. {ok ? "Session active." : "Contrôle..."} </p>
    </main>
  );
}
