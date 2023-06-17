import express from "express";
import moment from "moment";
import { todoRepo } from "../repositories";

const router = express.Router();

router.get("/", async function (_, response) {
    const categories = todoRepo.getCategories();
    const todosResult = await todoRepo.getAllTodos();

    const todos = todosResult.map((todo) => ({
        id: todo.id,
        description: todo.description,
        dueDate: moment(todo.dueDate).format("MMMM Do YYYY"),
        category: todo.category,
    }));

    response.render("todo/index", {
        pageTitle: "Home",
        categories,
        todos,
    });
});

router.post("/add-todo", async function (request, response) {
    const { description, category, dueDate } = request.body;
    await todoRepo.addTodo(description, Number(category), new Date(dueDate));
    response.redirect("/");
});

router.post("/remove-todos", async function (request, response) {
    const { todoIds } = request.body;
    const idList: string[] = todoIds.split(",");
    await todoRepo.removeTodos(idList);
    response.redirect("/");
});

export { router };
