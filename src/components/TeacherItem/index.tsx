import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
interface TeacherItemProps{
  name: string;
  price:string;
  subjects:string;
}
const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/28574438?s=460&u=109d19ed306db7282f905dafb6e9dccd7c5ae029&v=4"
          alt={props.name}
        />
        <div>
          <strong>{props.name}</strong>
          <span>{props.subjects}</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de fisica avançada.
        <br/><br/>
        Apaixonado  por fazer experimentos cientificos e por mudar a vida das pessoas.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R${props.price}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export {TeacherItem}
