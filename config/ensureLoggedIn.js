
module.exports = (req, res, next) => {
  // adding in an extra component for put request when adding driver. Its showing user
  // as false in req.user. To get around this, an extra user component was
  // added in the front end put request
  if (!req.user && !req.body.user) return res.status(401).json('Unauthorized')
  next()
}
