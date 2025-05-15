// pages/cgu.tsx ou app/cgu/page.tsx selon ton setup Next.js

export default function CGU() {
    return (
      <section className="bg-[#E4E2DD]">
      <main className="max-w-3xl mx-auto p-6 text-sm leading-relaxed bg-[#F8F5F1]">
        <h1 className="text-2xl font-bold mb-6">Conditions Générales d'Utilisation</h1>
  
        <p>
          Le site HeidiDev.fr est édité par [Heidi Gouider], micro-entrepreneuse déclarée sous le numéro SIRET [XXXXXXXXXXXXX], dont le siège est situé à Amiens.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Objet</h2>
        <p>
          Les présentes conditions régissent l’utilisation du site par tout utilisateur. En accédant à ce site, vous acceptez sans réserve les présentes CGU.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Propriété intellectuelle</h2>
        <p>
          Le contenu du site, incluant (de manière non limitative) les textes, images, graphismes, logo, nom, et charte graphique, est la propriété exclusive de [Ton nom ou Nom du projet].
          Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Responsabilité</h2>
        <p>
          Le site est accessible 24h/24 sauf en cas de force majeure ou d’interruption programmée. Heidi Gouider ne saurait être tenu responsable en cas de dysfonctionnement ou interruption du site.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée sans votre consentement. En cas de formulaire, vous disposez d’un droit d’accès, de rectification et de suppression en écrivant à [ton e-mail].
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
        <p>
          Le site peut utiliser des cookies à des fins de navigation ou de mesure d’audience. Vous pouvez refuser leur enregistrement dans les paramètres de votre navigateur.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Loi applicable</h2>
        <p>
          Les présentes CGU sont régies par la loi française. En cas de litige, les tribunaux compétents seront ceux de la juridiction du siège de l’éditeur.
        </p>
      </main>
      </section>
    );
  }
  