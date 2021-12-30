import Delete from "../Components/Delete/Delete";
import Detal from "../Components/Detal/Detal";
import Filter from "../Components/Employees/Components/Filter";
import Employees from "../Components/Employees/Employees";
import SelectTemp from "../Components/Select/SelectTemp";

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
  {
    path: "/check",
    component: SelectTemp,
    exact: true,
  },
];

export default routes;
