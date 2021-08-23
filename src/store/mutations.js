export default{
    addCount(state,paylaod){
      paylaod.count+=1
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
}