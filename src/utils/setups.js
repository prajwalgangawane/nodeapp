import { express, cors, mongoose } from "../libs/index.js";
import router from "../routes/index.js";
import middleware from "./middleware.js";

export function setup_routes(app) {
  app.use("/", router);
  return app;
}

export function setup_cors(app) {
  app.use(cors());
  return app;
}

export function setup_middleware(app) {
  // Middleware to parse JSON bodies
  app.use(express.json());
  // Custom Middleware
  app.use(middleware);
  return app;
}

export async function setup_database(app) {
  return await new Promise((resolve, reject) => {
    return mongoose
      .connect(app.DB)
      .then((mongo) => {
        app.mongo = mongo;
        console.log("Database Connected Successfully");
        console.log(`Server is running on port ${app.PORT}`);
        resolve(app);
      })
      .catch(reject);
  });
}
