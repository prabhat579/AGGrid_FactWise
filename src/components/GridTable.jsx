// GridTable.jsx
import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";

// ✅ Correct imports for v31+
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

// ✅ Register all community modules
ModuleRegistry.registerModules([AllCommunityModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const GridTable = ({ rowData }) => {
  const gridRef = useRef();

  const columnDefs = [
    { field: "id", sortable: true, filter: true },
    { field: "firstName" },
    { field: "lastName" },
    { field: "email" },
    { field: "department" },
    { field: "position" },
    { field: "salary", sortable: true, filter: "agNumberColumnFilter" },
    { field: "performanceRating", headerName: "Rating" },
    { field: "isActive", cellRenderer: (p) => (p.value ? "🟢 Active" : "🔴 Inactive") },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        animateRows={true}
      />
    </div>
  );
};

export default GridTable;
