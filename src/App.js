import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode } from "./theme";
import { Route, Routes } from "react-router-dom";

import TopBar from "./global/TopBar";
import SearchIcon from "@mui/icons-material/Search";
import MySideBar from "./global/SideBar";
import Dashboard from "./screens/dashboard/Dashboard";
import Team from "./screens/team/Team";
import Invoices from "./screens/invoices/Invoices";
import Contacts from "./screens/contacts/Contacts";
import Pie from "./screens/pie/Pie";
import Line from "./screens/line/Line";
import Gyography from "./screens/geography/Gyography";
import Faq from "./screens/faq/Faq";
import Calender from "./screens/calender/Calender";
import Bar from "./screens/bar/Bar";
import Form from "./screens/form/Form";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <MySideBar />
        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/gyography" element={<Gyography />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>
      </div>{" "}
    </ThemeProvider>
  );
}

export default App;
