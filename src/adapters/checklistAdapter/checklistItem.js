import { put, del } from "../xhr/xhr";

export function updateTodoItem(itemToUpdate) {
    return put("/updateTodoItem", itemToUpdate)//get some url
}

export function deleteTodoItem(itemToPost) {
    return del("/deleteTodoItems", itemToPost)//get some url
}