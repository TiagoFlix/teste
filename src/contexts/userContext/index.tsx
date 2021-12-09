import { useReducer, createContext, ReactNode, useEffect, Dispatch } from 'react'
import { User } from '../../interfaces/user'

interface ProvidersProps { children: ReactNode }

type UserState = {
    users: User[],
}

type UserAction =
    | {
        type: "NewUser";
        payload: User;
    }
    | {
        type: "DeleteUser";
        payload: User;
    }
    | {
        type: "SetInitialState";
        payload: User;
    };


const Actions = {
    NewUser(State: UserState, Action: UserAction): UserState {
        const user = Action.payload

        const storeData = (value: User[]) => {
            localStorage.setItem('@storage_users', JSON.stringify(value))
        }

        const newListUsers: User[] = [...State.users, user]
        storeData(newListUsers)

        return {
            ...State,
            users: newListUsers
        }
    },
    DeleteUser(State: UserState, Action: UserAction): UserState {
        const user = Action.payload

        const storeData = (value: User[]) => {
            localStorage.setItem('@storage_users', JSON.stringify(value))
        }
        const deleteItemList = State.users.filter((userStorage: User) => {
            return userStorage.cpf !== user.cpf
        })

        storeData(deleteItemList)

        return {
            ...State,
            users: deleteItemList,
        };
    },
    SetInitialState(State: UserState, Action: UserAction): UserState {
        return {
            ...State,
            users: [Action.payload],
        };
    }
}

const initialState: UserState = {
    users: [],
};

export const UsersContext = createContext<{ state: UserState; dispatch: Dispatch<UserAction>; }>({ state: initialState, dispatch: () => null });

export function UserProvider({ children }: ProvidersProps) {

    function reducer(state: UserState, action: UserAction) {
        const fn = Actions[action.type]
        console.log(state)
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    function getUsers() {
        try {
            const jsonValue = localStorage.getItem('@storage_users')
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        (() => {
            const users = getUsers()

            dispatch(
                {
                    type: 'SetInitialState',
                    payload: users
                }
            )
        })()
    }, [])

    return (
        <UsersContext.Provider value={{ state, dispatch }} >
            {children}
        </UsersContext.Provider>
    )
}