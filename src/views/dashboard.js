import { taskHeaderAdmin } from "../components/taskHeaderAdmin.js";
import { TaskListAdmin } from "../components/taskListAdmin.js";

export function taskAdminView(){
    const taskView = document.createElement("div");
    taskView.className = "container py-4 mt-6";

    taskView.append(taskHeaderAdmin(),TaskListAdmin())
    return taskView;
}