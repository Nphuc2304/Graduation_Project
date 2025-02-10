const cart = require("../models/cartModel");

async function createCartForUser(userId){
    try{
        let cartOfUser = await cart.findOne({userId});

        if(!cartOfUser){
            cartOfUser = new cart({
                totalPrice: 0,
                discount: 0,
                finalPrice: 0,
                userId: userId
            });
            await cart.save;
            console.log(`Cart created for user ${userId} successful`);
        }
        else{
            console.log(`Cart of user ${userId} is exist`);
        }
        return cartOfUser;
    }catch(error){
        console.log("There are an error in creating a cart for user" + error);
    }
}

module.exports = createCartForUser;