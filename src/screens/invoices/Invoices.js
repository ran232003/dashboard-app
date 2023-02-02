import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { dataGridHeadersInvoices } from "../../data/dataGrid";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";

import "../Screens.css";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="dashboardMain">
      <Header title="INVOICES" subTitle="List of invoices Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          className="grid"
          rows={mockDataInvoices}
          columns={dataGridHeadersInvoices}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default Invoices;
