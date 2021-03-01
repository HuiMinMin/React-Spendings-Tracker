import { get, post, del } from "../xhr/xhr";

export function getTodoItems() {
    return get("/todoList")//get some url
}

export function postTodoItem(itemToPost) {
    return post("/todoItem", itemToPost)//get some url
}

export function deleteAllCompletedItem(itemToDelete) {
    return del( "/todoItem" , itemToDelete)//get some url
}