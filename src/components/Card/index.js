import { useState } from "react";
import Button from "../Button";

const Card = () => {

  const [value, setValue] = useState(2);
  function Adicionar() {setValue(value + 1)}
  function Subtrair() {setValue(value - 1)}
    return(
        <div className="card">
        <h5 className="card-header">Tipo de Card</h5>
        <div className="card-body">
          <h5 className="card-title">Título do card</h5>
          <p className="card-text">{value}</p>
          
          <Button
          className="btn btn-success"
          onClick={Adicionar}>
            - Subtrair
          </Button>
          
          <Button
          className="btn btn-danger"
          onClick={Subtrair}>
            - Subtrair
          </Button>

        </div>
      </div>
    )
}
export default Card;