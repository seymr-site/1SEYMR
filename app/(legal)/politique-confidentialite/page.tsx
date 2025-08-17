export const metadata = { title: "Politique de confidentialité — SEYMR®" };
export default function Page() {
  return (
    <main style={{padding:32, maxWidth:900}}>
      <h1>Politique de confidentialité</h1>
      <h2>1. Responsable & base légale</h2>
      <p>SEYMR® traite des données pour gérer les commandes, la relation client, la sécurité des accès privés...</p>
      <h2>2. Données collectées</h2>
      <ul>
        <li>Identité & contact (commande, service client)</li>
        <li>Données de paiement (via Stripe, non conservées par SEYMR)</li>
        <li>Télémétrie technique/analytics anonymisés (GA4 si accepté)</li>
      </ul>
      <h2>3. Destinataires & sous-traitants</h2>
      <p>Stripe (paiement), SendGrid (e-mail), Vercel (hébergement)... contrats conformes RGPD/transfer impact.</p>
      <h2>4. Durée de conservation</h2>
      <p>Durées proportionnées (ex : facturation 10 ans, e-mails transactionnels 3 ans)...</p>
      <h2>5. Droits des personnes</h2>
      <p>Accès, rectification, effacement, opposition, portabilité : contact@seymr.art</p>
      <h2>6. Cookies</h2>
      <p>Cookie de session “sid” (salon privé), préférences de langue (i18n), mesure d’audience...</p>
      <h2>7. Sécurité</h2>
      <p>Chiffrement TLS, politiques d’accès minimales, journaux de sécurité, revues régulières.</p>
      <p style={{marginTop:24,opacity:.7}}>Dernière mise à jour : 2025-08-17.</p>
    </main>
  );
}
