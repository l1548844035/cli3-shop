export default{
    addCount(state,paylaod){
      paylaod.count+=1
    },
    addToCart(state,payload){
      payload.checked= true
      state.cartList.push(payload)
    }
}