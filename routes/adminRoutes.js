const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

// api function for render page
router
  .route("/dashboard")
  .get(adminController.toursPage)

router
  .route("/dashboard/create")
  .get(adminController.createPage)

router
  .route("/dashboard/edit/:id")
  .get(adminController.editPage)

// api function for action
router
  .route("/tours/add")
  .post(adminController.createTour)

router
  .route("/tours/delete/:id")
  .post(adminController.removeTour)

router
  .route("/tours/update/:id")
  .post(adminController.editTour)

module.exports = router
