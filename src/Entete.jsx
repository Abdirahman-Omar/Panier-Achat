import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

export default function Entete(props){
    
     return(
        <header className="Entete">
          <div>Logo</div>
          <ul className="NavPrincipale">
             <li>Produits</li>
             <li>A propos de nous</li>
             <li>Contactez nous</li>
          </ul>
          <ul className="NavUtil">
             <li>
                <Badge badgeContent="5" color="primary">
                   <ShoppingCartIcon/>
                </Badge>
             </li>
             <li>Mon compte</li>
             </ul>
      </header>
     );

}

