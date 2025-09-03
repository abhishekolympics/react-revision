import { model, Schema } from "mongoose";

const counterSchema = Schema(
    counterA: Number,
    counterB: Number,
);

export const counter = model(counterSchema);
