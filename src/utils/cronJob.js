const cron = require("node-cron");
const { subDays, startOfDay, endOfDay } = require("date-fns");
const sendEmail = require('./sendEmail');
const ConnectionRequestModel = require('../models/connectionRequest');

// this job will run 8AM in the morning
cron.schedule("0 8 * * * ", async () => {
    console.log("Hello world!" + new Date());

    //send emails to all the people who got requests the previous day
     try {

        const yesterday = subDays(new Date(), 1);
        const yesterdayStart = startOfDay(yesterday);
        const yesterdayEnd = endOfDay(yesterday);

        const pendingRequests = await ConnectionRequestModel.find({
            status: "interested",
            createdAt: {
                $gte: yesterdayStart,
                $lt: yesterdayEnd,
            },
        }).populate("fromUserId toUserId");

        const listOfEmails = [...new Set(pendingRequests.map(req => req.toUserId.emailId))];

        console.log(listOfEmails);

        for(const email of listOfEmails) {
            // send emails
            try{
                const res = await sendEmail.run("New friend requests pending for " + 
                    toEmailId, "There are so many friend requests pending, Please login to DevTinder.in and accept the requests"
                );
                console.log(res);
            }
            catch(err){
                console.log(err);
            }
        }
     } catch(err) {
        console.log(err);
     }
});