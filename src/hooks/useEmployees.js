import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

export const useEmployees = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEmployees().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
