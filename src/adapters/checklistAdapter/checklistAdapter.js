import { get, post } from "../xhr/xhr";

export function getTodoItems() {
    return get("/getTodoItems")//get some url
}

export function postTodoItem(itemToPost) {
    return post("/postTodoItem", itemToPost)//get some url
}