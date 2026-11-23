const Order =
require("../models/Order");

exports.createOrder =
async (req, res) => {
  try {

    const count =
    await Order.countDocuments();

    const order =
    await Order.create({

      ...req.body,

      orderNumber:
      `ORD${1000 + count + 1}`,

      createdBy:
      req.user.id
    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

exports.getOrders =
async(req,res)=>{

 try{

  const orders =
  await Order.find()
  .populate(
   "customerId",
   "companyName"
  );

  res.status(200).json(
   orders
  );

 }catch(error){

  res.status(500).json({
   message:error.message
  });
 }
};

exports.updateOrderStatus =
async(req,res)=>{

 try{

  const order =
  await Order.findByIdAndUpdate(

   req.params.id,

   {
    orderStatus:
    req.body.orderStatus
   },

   {
    new:true
   }
  );

  res.status(200).json(
   order
  );

 }catch(error){

  res.status(500).json({
    message:error.message
  });
 }
};

