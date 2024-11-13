import { Link } from "react-router-dom";
import Vector from '../assets/Vector.svg'

export const ReturnImag = ({rota, classLink}) => {
  return (
      <Link to={rota} className={classLink}>
         <img src={Vector} alt="Retorne a tela anterior"/>  
     </Link>
  )
}
