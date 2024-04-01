import { Types, express } from "../libs/index.js";
import { model } from "../models/todo.js";

const router = express.Router();

// Create
router.post("/", (req, res) => {
  const todo = new model(req.body);
  todo.save();
  // .then(console.log).catch(console.log).finally(console.log);
  res.json({ message: "Todo Created Successfully", todo });
});

// Read 1
router.get("", (req, res) => {
  const cb = (todos) => res.json(todos);
  model.find({}).then(cb);
});

// Read Many
router.get("/:_id", (req, res) => {
  const cb = console.log;
  const todo =
    params._id && Types.ObjectId.isValid(req.params._id)
      ? model.findById(req.params._id).then(cb)
      : null;
  res.json(todo || {});
});

// Update
router.put("/:_id", (req, res) => {
  const todo = req.body;
  todo._id = req.params._id;
  res.json({ message: "Todo Updated Successfully", todo });
});

// Delete
router.delete("/:_id", (req, res) => {
  const todo = {};
  todo._id = req.params._id;
  res.json({ message: "Todo Deleted Successfully", todo });
});

export default router;
