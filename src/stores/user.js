export const initialStore = () => { 
    return{ 
        user:{
            is_login: false,
            name: "",
            lastname: "",
        }
    }
}

export const storeReducer = (store, action = {}) => {
    switch(action.type){
        case 'update':
            const data= action.payload;
            return {...store, user: {is_login: true, ...data}}
        default:
            throw Error ('Unknown action.');    
        }
}