const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  deleteTask,
  updatedTask,
} = require("../controllers/taskController");

router.route("/").get(getTasks)
router.route("/add").post(createTask);
router.route("/:id").delete(deleteTask).put(updatedTask);
module.exports = router;
