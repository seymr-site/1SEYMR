export const metadata = { title: "FAQ — SEYMR®" };
export default function Page() {
  return (
    <main style={{padding:32, maxWidth:900}}>
      <h1>FAQ</h1>
      <h3>Les œuvres sont-elles en stock ?</h3>
      <p>Non. Éditions limitées et production à la commande, numérotées et certifiées.</p>
      <h3>Délais ?</h3>
      <p>Indiqués à la commande selon la pièce (mobilier, accessoires, œuvres...).</p>
      <h3>Paiements ?</h3>
      <p>Stripe (carte), virement haut montant sur demande, options privées possibles.</p>
      <h3>Certificat & NFT ?</h3>
      <p>Chaque pièce est accompagnée d’un certificat, NFT (sur option) comme preuve d’authenticité digitale.</p>
    </main>
  );
}
