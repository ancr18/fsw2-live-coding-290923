const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

router.route("/").get(adminController.getAllTours)

router
  .route("/create")
  .get(adminController.createPage)

// router
//   .route("/edit")
//   .get(adminController.editPage)

router
  .route("/action")
  .post(adminController.createTour)

module.exports = router
