const addDb=id=>{
    console.log(id);
    let shoppingCart={};
    const storedCart=localStorage.getItem("shoppingCart")
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }
    const quantity=shoppingCart[id];
    if(quantity){
        const newQuantity=quantity+1;
        shoppingCart[id]=newQuantity;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))
}
const removeCart=id=>{
    const storedCart=localStorage.getItem("shoppingCart")
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
        }
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))
    }
}
export {addDb,removeCart};