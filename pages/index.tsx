import "animate.css";
import { Card } from '../components/elements/card';
import { useContext } from 'react'
import { UsersContext } from '../src/contexts/userContext'

export default function HomePage() {
  const { state } = useContext(UsersContext);

  return (
    <>
      <div className="cadastrar-content container">
        <a className="cadastrar" href="/cadastro">Cadastrar</a>
      </div>

      <section id="card-list">
        <div className="container">
          {
            state &&  state.users.map(({ cpf , email , phone , name  }) => 
              <Card
                key={cpf}
                name={name}
                email={email}
                phone={phone}
                cpf={cpf}
              />
            )
          }

          {
            !state && (<p>Nada por aqui ;(</p>)
          }
        </div>
      </section>
      </>
  )
};