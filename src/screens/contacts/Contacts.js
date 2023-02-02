import { Box, useTheme } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Header from "../../components/Header";
import "../Screens.css";
import { tokens } from "../../theme";
import { dataGridHeadersContacts } from "../../data/dataGrid";
import { mockDataContacts } from "../../data/mockData";
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="dashboardMain">
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for future Refrence"
      />
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
          rows={mockDataContacts}
          columns={dataGridHeadersContacts}
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

export default Contacts;
