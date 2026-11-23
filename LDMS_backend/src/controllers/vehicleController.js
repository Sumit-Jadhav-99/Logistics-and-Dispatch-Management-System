const Vehicle =
require("../models/Vehicle");

exports.createVehicle =
async (req,res)=>{

 try{

   const vehicle =
   await Vehicle.create(req.body);

   res.status(201).json(vehicle);

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

exports.getVehicles =
async(req,res)=>{

 try{

   const vehicles =
   await Vehicle.find();

   res.status(200).json(
     vehicles
   );

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

exports.getVehicleById =
async(req,res)=>{

 try{

   const vehicle =
   await Vehicle.findById(
     req.params.id
   );

   if(!vehicle){

     return res.status(404).json({
       message:"Vehicle Not Found"
     });
   }

   res.status(200).json(vehicle);

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

exports.updateVehicle =
async(req,res)=>{

 try{

   const vehicle =
   await Vehicle.findByIdAndUpdate(
     req.params.id,
     req.body,
     {
       new:true
     }
   );

   res.status(200).json(
     vehicle
   );

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

exports.updateVehicleStatus =
async(req,res)=>{

 try{

   const vehicle =
   await Vehicle.findByIdAndUpdate(
     req.params.id,
     {
       status:req.body.status
     },
     {
       new:true
     }
   );

   res.status(200).json(
     vehicle
   );

 }catch(error){

   res.status(500).json({
     message:error.message
   });
 }
};

