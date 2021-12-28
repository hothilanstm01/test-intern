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
    
  ];
  
  export default routes;