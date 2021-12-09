import { User } from '../../../src/interfaces/user'
import { useContext } from 'react'
import { UsersContext } from '../../../src/contexts/userContext'


export function Card(user: User) {
    const phoneReplaced = user.phone.replace(/[^0-9\.]+/g, "")
    const { dispatch } = useContext(UsersContext);

    return (
        <div className={`master_container animate__animated animate__fadeInRight animate__delay-4s `}>
            <div className="properties"><span>Nome:</span>
            <span>{user.name}</span></div>
            <div className="properties"><span>Email:</span>
            <a href={`mailto:${user.email}`}><span>{user.email}</span></a></div>
            <div className="properties"><span>Telefone:</span> <a href={`tel:${parseInt(phoneReplaced)}`} target="_blank"><span>{user.phone}</span></a> </div>
            <div className="properties"><span>CPF:</span> <span >{user.cpf}</span> </div>
            <div className="excluir" onClick={() => {
                dispatch?.(
                    {
                        type: 'DeleteUser',
                        payload: user
                    }
                )
            }}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
            </div>
        </div>
    )

}

