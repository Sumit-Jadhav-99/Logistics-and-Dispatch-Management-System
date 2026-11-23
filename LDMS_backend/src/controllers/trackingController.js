const TrackingEvent =
    require("../models/TrackingEvent");

exports.createTrackingEvent =
    async (req, res) => {

        try {

            const {
                dispatchId,
                orderId,
                status,
                remarks,
                location
            }
                =
                req.body;

            if (
                !dispatchId ||
                !orderId ||
                !status
            ) {
                return res.status(400).json({
                    message:
                        "Dispatch, Order and Status are required"
                });
            }
            console.log(req.body);

            const tracking =
                await TrackingEvent.create({

                    dispatchId,
                    orderId,
                    status,
                    remarks,
                    location,

                    updatedBy:
                        req.user.id

                });

            res.status(201).json({
                success: true,
                tracking
            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getTrackingByOrder =
async(req,res)=>{

try{

const trackingEvents =
await TrackingEvent.find({

 orderId:
 req.params.orderId

})
.sort({
 createdAt:1
});

res.status(200).json(
 trackingEvents
);

}catch(error){

res.status(500).json({
 message:error.message
});

}
};

