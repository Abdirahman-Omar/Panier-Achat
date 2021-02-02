import './ListeProduits.css';
import Produit from './Produit';
import tabProduits from './data/produits.json'

 function ListeProduits(props){
     return(
         <div className="ListeProduits">
             <h2>Produits disponibles</h2>
             <ul>
                 {
                    tabProduits.map((prd) =>
                       <Produit id={prd.id} nom={prd.nom} prix={prd.prix} />
                    )
                 }

                 {/* <Produit nom="T-Shirt à col rond" prix="13.99" id="prd0001"/> */}
                
             </ul>
         </div>
     );

}

export default ListeProduits;