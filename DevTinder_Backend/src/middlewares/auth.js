const adminAuth =  (req,res,next) => {
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized) {
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
}

const userAuth =  (req,res,next) => {
    const token = "xyzabc";
    const isUserAuthorized = token === "xyz";
    if(!isUserAuthorized) {
        res.status(401).send("Unauthorized user request");
    } else {
        next();
    }
}

module.exports = {
    adminAuth, userAuth
}