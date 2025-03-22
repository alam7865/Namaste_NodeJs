const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorization = token == "xyz";
  if (isAdminAuthorization) {
    res.send("All Data Send to Admin");
  } else if (!isAdminAuthorization) {
    res.status(401).send("UnAuthorized Request Admin");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyzss";
  const isAdminAuthorization = token == "xyz";
  if (isAdminAuthorization) {
    res.send("All Data Send to Admin");
  } else if (!isAdminAuthorization) {
    res.status(401).send("UnAuthorized Request user");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
