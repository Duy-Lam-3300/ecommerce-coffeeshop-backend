
const BaseService=require("./BaseService");
const order=require("../models/Order");

class OrderService extends BaseService{
    constructor(){
        super(order);
    }
}


module.exports= new OrderService();