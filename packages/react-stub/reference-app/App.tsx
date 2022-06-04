import { DataBrowserRouter, Route } from "react-router-dom";

import Index from "~/routes/Index";
import Parent, { loader as parentLoader } from "~/routes/nested/Parent";
import Child, { loader as childLoader } from "~/routes/nested/Child";
import Root from "~/routes/Root";
import Tasks, {
  action as tasksAction,
  loader as tasksLoader,
} from "~/routes/tasks/Tasks";
import Task, { loader as taskLoader } from "~/routes/tasks/Task";
import NewTask, { action as newTaskAction } from "~/routes/tasks/NewTask";

export default function App() {
  return (
    <DataBrowserRouter fallbackElement={<p>Loading...</p>}>
      <Route path="/" element={<Root />}>
        <Route index element={<Index />} />
        <Route path="parent" loader={parentLoader} element={<Parent />}>
          <Route path="child" loader={childLoader} element={<Child />} />
        </Route>
        <Route
          path="tasks"
          loader={tasksLoader}
          action={tasksAction}
          element={<Tasks />}
        >
          <Route path=":id" loader={taskLoader} element={<Task />} />
          <Route path="new" action={newTaskAction} element={<NewTask />} />
        </Route>
      </Route>
    </DataBrowserRouter>
  );
}
