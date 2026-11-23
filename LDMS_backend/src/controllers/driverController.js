const Driver =
require("../models/Driver");

const User =
require("../models/User");

exports.createDriver =
async (req,res)=>{

 try{

   const count =
   await Driver.countDocuments();

   const driver =
   await Driver.create({

    ...req.body,

    employeeId:
    `DRV${1000+count+1}`
   });

   res.status(201).json(driver);

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

exports.getDrivers =
async(req,res)=>{

 try{

   const drivers =
   await Driver.find()
   .populate(
    "userId",
    "firstName lastName email phone"
   );

   res.status(200).json(drivers);

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

exports.updateDriverStatus =
async(req,res)=>{

 try{

   const driver =
   await Driver.findByIdAndUpdate(

      req.params.id,

      {
       availabilityStatus:
       req.body.availabilityStatus
      },

      {
       new:true
      }
   );

   res.status(200).json(driver);

 }catch(error){

   res.status(500).json({
    message:error.message
   });
 }
};

