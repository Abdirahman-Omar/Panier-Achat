import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

 function Produit(props){
     return(
         <li className="Produit">
             <div className="image">
                  <img src={'images-produits/'+ props.id +'.webp'} alt={props.nom}/> 
             </div>
                <div className="info">
                     <h3>{props.nom}</h3>
                     <p className="Prix">{props.prix} CA$</p>
                      <BtnAjoutPanier/>
                </div>
         </li>
     );

}

export default Produit;