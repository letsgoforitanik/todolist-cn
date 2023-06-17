import { Schema, model } from "mongoose";
import { ConstructedType } from "../type";

export enum Category {
    Personal,
    Work,
    School,
    Cleaning,
    Other,
}

const todoSchema = new Schema(
    {
        description: {
            type: Schema.Types.String,
            required: true,
        },
        category: {
            type: Schema.Types.String,
            required: true,
            enum: Category,
        },
        dueDate: {
            type: Schema.Types.Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Todo = model("Todo", todoSchema);
export type TodoInfo = ConstructedType<typeof Todo>;
export default Todo;
