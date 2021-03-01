import { put, del } from "../xhr/xhr";

export function updateTodoItem(itemToUpdate) {
    const url = "/todoItem/" + itemToUpdate.id;
    return put( url , itemToUpdate)//get some url
}

export function deleteTodoItem(itemToDelete) {
    const url = "/todoItem/" + itemToDelete.id;
    return del( url , itemToDelete)//get some url
}