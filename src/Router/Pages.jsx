import Delete from "../Components/Delete/Delete";
import Detal from "../Components/Detal/Detal";
import Filter from "../Components/Employees/Components/Filter";
import Employees from "../Components/Employees/Employees";

const routes = [
  {
    path: "/",
    component: Employees,
    exact: true,
  },
  {
    path: "/filter",
    component: Filter,
    exact: true,
  },
  {
    path: "/detail/:id",
    component: Detal,
    exact: true,
  },
  {
    path: "/del",
    component: Delete,
    exact: true,
  },
];

export default routes;
