import { dotenv } from "../libs/index.js";
import {
  setup_cors,
  setup_database,
  setup_middleware,
  setup_routes,
} from "./setups.js";

export function load_config(app) {
  dotenv.config();
  app.PORT = process.env.PORT || 5000;
  app.DB = process.env.MONGODB_URI;
}

export async function initialize_app(...params) {
  const [app] = params;
  setup_database(app)
    .then(setup_cors)
    .then(setup_middleware)
    .then(setup_routes)
    .catch((...e) => console.error("SERVER ERROR:", ...e));
}
