// Group employees by department
export const salaryByDepartment = (employees) => {
  const result = {};
  employees.forEach((e) => {
    result[e.department] = (result[e.department] || 0) + e.salary;
  });
  return Object.entries(result).map(([dept, total]) => ({
    department: dept,
    salary: total,
  }));
};

// Active vs Inactive
export const activeStatusData = (employees) => {
  const active = employees.filter((e) => e.isActive).length;
  const inactive = employees.length - active;
  return [
    { name: "Active", value: active },
    { name: "Inactive", value: inactive },
  ];
};

// Performance rating distribution
export const performanceData = (employees) =>
  employees.map((e) => ({
    name: e.firstName,
    rating: e.performanceRating,
  }));
