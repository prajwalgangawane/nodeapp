import { express } from "./libs/index.js";
import { initialize_app, load_config } from "./utils/app.js";

const app = express();

load_config(app);

app.initialize = (...e) => initialize_app(app, ...e);

app.listen(app.PORT, app.initialize);
