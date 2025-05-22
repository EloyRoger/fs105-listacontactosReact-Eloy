import { useUserReducer } from "../hooks/useUserReducer"

export const User= () => {

    const { userStore, userDispacht } = useUserReducer ();

    const onClick = () =>{
        userDispacht({
            type: 'update',
            payload: {
                name: 'Eloy',
                lastname: 'Roger'
            }
        })
    }
    return (
        <div>
            <div>
                <h1>USER:</h1>
                <p> user is login: {userStore.user.is_login ? 'TRUE' : 'FALSE'}</p>
                <p> Name: {userStore.user.name}</p>
                <p> Lastname: {userStore.user.lastname}</p>
            </div>
            <div>
                <button onClick={onClick}> update user</button>
            </div>
        </div>
    )
};