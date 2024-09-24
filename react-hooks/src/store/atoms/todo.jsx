import { atom, selector } from "recoil";

export const todoAtom=atom({
    key:"todoAtom",
    default:[]
})
export const filterTodo=selector({
    key:"filterTodo",
    get:({get})=>{
        const todo=get(todoAtom)
        const filter=get(filterAtom)

        return todo.filter(x=>x.title.includes(filter) || x.description.includes(filter))
    }
})