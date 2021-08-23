export default{
    addToCart(context,payload){
      //1.查找之前判断数组中是否有该商品
      let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
      //2.判断oldProduct
      if(oldProduct){
        context.commit('addCount',oldProduct)
      }else{
        payload.count = 1
        context.commit('addToCart',payload)
      }
    }
}