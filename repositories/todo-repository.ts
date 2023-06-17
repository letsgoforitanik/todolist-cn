import { Category } from "../models/todo-model";
import { Todo } from "../models";

export function getCategories() {
    const numKeys = Object.keys(Category).filter((key) => !isNaN(Number(key)));
    return numKeys.map((key) => ({ key: Number(key), value: Category[key] }));
}

export async function addTodo(description: string, categoryId: number, dueDate: Date) {
    await Todo.create({ category: Category[categoryId], description, dueDate });
}

export async function getAllTodos() {
    const todos = await Todo.find();
    return todos;
}

export async function removeTodos(idList: string[]) {
    await Todo.deleteMany({ _id: { $in: idList } });
}
