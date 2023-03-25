const addDb=id=>{
    let shoppingCart={};
    const storedCart=localStorage.getItem("shoppingCart")
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }
    const quantity=shoppingCart[id];
    console.log(quantity);
    if(quantity){
        const newQuantity=quantity+1;
        shoppingCart[id]=newQuantity;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))
}
export {addDb};