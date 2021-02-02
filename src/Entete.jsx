import './Entete.css';

export default function Entete(props){
     const a = 5;
     return(
        <header>
          <div>Logo</div>
          <ul className="NavPrincipale">
             <li>Produits</li>
             <li>A propos de nous</li>
          </ul>
          <ul className="NavUtil">
             <li>Produits</li>
             <li>A propos de nous</li>
             </ul>
      </header>
     );

}

