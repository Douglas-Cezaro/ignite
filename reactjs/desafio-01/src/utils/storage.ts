import { TaskInterface } from "./types";

export function saveStorage(tasks: TaskInterface[]) {
  localStorage.setItem("task", JSON.stringify(tasks));
}

export function getStorage() {
  try {
    const jsonValue = localStorage.getItem("task");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
}

export function deleteStorage() {
  localStorage.removeItem("task");
}
