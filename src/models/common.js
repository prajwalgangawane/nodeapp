import { Schema, model as Model } from "../libs/index.js";

export const schema = new Schema({
  created: {
    by: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    at: {
      type: Date,
      default: Date.now,
    },
  },
  updated: {
    by: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    at: Date,
  },
});

export const model = new Model("auditor", schema);
