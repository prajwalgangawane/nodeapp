import { Schema, model as Model } from "../libs/index.js";
import { schema as AuditorModel } from "./common.js";

export const schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
  audit: {
    type: AuditorModel,
    required: true,
  },
});

export const model = Model("user", schema);
