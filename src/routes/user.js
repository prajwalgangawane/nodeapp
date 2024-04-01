import { express } from "../libs/index.js";

const router = express.Router();

router.get("", (req, res) => {
  res.json({
    message: "Test",
    params: "No params",
    query: req.query ?? "none",
  });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Test", params: req.params || "none", query: req.query });
});

export default router;
