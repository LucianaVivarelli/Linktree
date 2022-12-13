import './Header.css'
import PerfilImg from '../../assets/Images/perfil-eu.png'
const Header = () => {
    return(
        <div className="perfil_all">
           <div className="perfil-conteaner">
            <img src={PerfilImg} className="image_Perfil" alt="Perfil-Img" />
              <h3>Luciana Vivarelli</h3>
              <p>Conheça minhas redes!</p>
           </div>
        
        </div>
    )
}

export default Header