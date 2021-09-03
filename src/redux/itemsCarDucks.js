/* eslint-disable */
// mas de un ducks productos login 

// constantes
const dataProducts = [

]
    // si es un objeto

//types
const COUNT_PRODUCTS_BUY = 'COUNT_PRODUCTS_BUY'

// reducer va a hapetar lista de pokemosnes y los envia a l estado o contante para poderlo consumir en algun componente
export default function countProdutReducer(state = dataProducts, action){
    switch(action.type){  //si va cmamabiando esta variable y a este le queremos generar acciones
        case COUNT_PRODUCTS_BUY:
            return [...state, action.payload]
        default:
            return state
    }
}

// actions la axion cosume la api, modificar pasar a otra pagina

export const getProductBuyAction =(itemName) => (dispatch, getState) =>{  //todo esto es action
// primer arrw recibimos prametros para enviar a esta funcion algunas si otras no
//dispatch:activar el reducer
// obtener la data del estate
    dispatch({
        type: COUNT_PRODUCTS_BUY,
        payload: itemName
    })
}

