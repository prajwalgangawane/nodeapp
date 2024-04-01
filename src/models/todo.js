import { Schema, model as Model } from "../libs/index.js";

import { schema as AuditorSchema } from "./common.js";

export const schema = new Schema({
  title: {
    type: String,
  },
  status: {
    type: Number,
    default: 1,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  audit: {
    type: AuditorSchema,
    required: true,
  },
});

export const model = Model("todo", schema);
