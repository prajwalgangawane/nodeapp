import { path, express } from "../libs/index.js";
import testRoutes from "./todo.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

router.get("/api", (req, res) => {
  res.json({ message: "Hello" });
});

router.use("/api/todos", testRoutes);

export default router;
