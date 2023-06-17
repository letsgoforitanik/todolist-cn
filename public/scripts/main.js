const formAddTodo = document.querySelector("#formAddTodo");
const txtDescription = document.querySelector("#description");
const ddlCategory = document.querySelector("#category");
const txtDueDate = document.querySelector("#due-date");
const divErrorMessage = document.querySelector("#error-message");
const btnAddTodo = document.querySelector("#btnAddTodo");
const btnRemoveTodo = document.querySelector("#btnRemoveTodo");
const formRemoveTodo = document.querySelector("#formRemoveTodo");

$(txtDueDate).datepicker({
    dateFormat: "dd/mm/yy",
    altField: "#altDueDate",
    altFormat: "yy-mm-dd",
    minDate: 0,
});

btnAddTodo.onclick = function () {
    const description = $(txtDescription).val();
    const category = $(ddlCategory).val();
    const dueDate = $(txtDueDate).datepicker("getDate");

    $(divErrorMessage).text("");

    if (!description) {
        $(divErrorMessage).text("Please enter description");
        return;
    }

    if (!category) {
        $(divErrorMessage).text("Please enter category");
        return;
    }

    if (!dueDate) {
        $(divErrorMessage).text("Please enter due date");
        return;
    }

    formAddTodo.submit();
};

btnRemoveTodo.onclick = function () {
    const $cbxs = $("input[type=checkbox]:checked");

    if ($cbxs.length === 0) {
        alert("Please select todos first");
        return;
    }

    const parents = $cbxs.toArray().map((cbx) => $(cbx).parent()[0]);
    const idList = parents.map((parent) => parent.children[0].value);
    const ids = idList.join(",");

    $("#txtTodoIds").val(ids);
    formRemoveTodo.submit();
};
