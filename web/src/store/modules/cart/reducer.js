import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id)

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;//se o produto tiver no carrinho, aumenta o amount
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,//se não tiver, adiciona ao carrinho e amount = 1
                    })
                }
            })
        default:
            return state;
    }
}