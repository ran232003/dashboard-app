import { Box, FormControl, InputLabel, Select } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import MySelect from "../components/MySelect";

export const dataGridHeadersTeams = [
  { field: "id", headerName: "ID", width: 90, flex: 1 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 110,
    editable: true,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,
    type: "email",
    flex: 1,
  },
  {
    field: "access",
    headerName: "Access Level",
    sortable: false,
    width: 160,
    type: "singleSelect",
    editable: true,
    valueOptions: ["admin", "user", "manager"],
    flex: 1,
  },
  //   {
  //     field: "access",
  //     headerName: "Access Level",
  //     sortable: false,
  //     flex: 1,
  //     width: 160,
  //     renderCell: ({ row: { access } }) => {
  //       return <MySelect value={access} />;
  //     },
  //   },
];
export const dataGridHeadersInvoices = [
  { field: "id", headerName: "ID", width: 90, flex: 1 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 110,
    editable: true,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,

    flex: 1,
  },
  {
    field: "date",
    headerName: "Date",
    sortable: false,
    width: 160,
    type: "singleSelect",
    flex: 1,
  },
  //   {
  //     field: "access",
  //     headerName: "Access Level",
  //     sortable: false,
  //     flex: 1,
  //     width: 160,
  //     renderCell: ({ row: { access } }) => {
  //       return <MySelect value={access} />;
  //     },
  //   },
];
export const dataGridHeadersContacts = [
  { field: "id", headerName: "ID", width: 90, flex: 1 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 110,
    editable: true,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,

    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    sortable: false,
    width: 160,
    type: "singleSelect",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    sortable: false,
    width: 160,
    type: "singleSelect",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    sortable: false,
    width: 160,
    type: "singleSelect",
    flex: 1,
  },
  {
    field: "registrarId",
    headerName: "Registrar Id",
    sortable: false,
    width: 160,
    type: "singleSelect",
    flex: 1,
  },
  //   {
  //     field: "access",
  //     headerName: "Access Level",
  //     sortable: false,
  //     flex: 1,
  //     width: 160,
  //     renderCell: ({ row: { access } }) => {
  //       return <MySelect value={access} />;
  //     },
  //   },
];
