const adminAuth = (req, res, next) => {
  let password = "sabaz";
  if (password === "sabaz") {
    // res.send("All Data Received");
    next();
  } else {
    res.status(401).send("Un Authorized Request");
  }
};

module.exports = { adminAuth };
