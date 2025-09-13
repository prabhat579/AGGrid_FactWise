import { employees } from "../data/employees";

export const getEmployees = async () => {
  // Mocking an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(employees), 300);
  });
};