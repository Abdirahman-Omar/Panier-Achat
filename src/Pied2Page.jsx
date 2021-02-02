import './Pied2Page.css';

export default function Pied2Page(props){
    const annee = (new Date()).getFullYear();
    return(
        <footer>
      &copy; {annee}
    </footer>
    );
}