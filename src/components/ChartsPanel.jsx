import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { salaryByDepartment, activeStatusData, performanceData } from "../utils/chartData";

const COLORS = ["#4CAF50", "#FF5722"];

const ChartsPanel = ({ employees }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Salary by Department */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Salary by Department</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salaryByDepartment(employees)}>
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="salary" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Active vs Inactive */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Active vs Inactive</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={activeStatusData(employees)}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {activeStatusData(employees).map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Ratings */}
      <div className="bg-white shadow-md p-4 rounded-lg md:col-span-2">
        <h3 className="text-lg font-semibold mb-2">Performance Ratings</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={performanceData(employees)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="rating" fill="#009688" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsPanel;
