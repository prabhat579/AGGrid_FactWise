import { useEmployees } from "../hooks/useEmployees";
import GridTable from "../components/GridTable";
import ChartsPanel from "../components/ChartsPanel";

const Dashboard = () => {
  const { data: employees, loading } = useEmployees();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Dashboard</h2>
      <GridTable rowData={employees} />
      <ChartsPanel employees={employees} />
    </div>
  );
};

export default Dashboard;
