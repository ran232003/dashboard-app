import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
export const data = [
  { title: "Manage Team", path: "/team", icon: <PeopleOutlinedIcon /> },
  {
    title: "Contacts Information",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balences",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
];
export const pages = [
  { title: "Profile Form", path: "/form", icon: <PersonOutlinedIcon /> },
  { title: "Calender", path: "/calender", icon: <CalendarTodayOutlinedIcon /> },
  { title: "FAQ Page", path: "/faq", icon: <HelpOutlineOutlinedIcon /> },
];
export const charts = [
  { title: "Bar Chart", path: "/bar", icon: <BarChartOutlinedIcon /> },
  { title: "Pie Chart", path: "/pie", icon: <PieChartOutlineOutlinedIcon /> },
  { title: "Line Chart", path: "/line", icon: <TimelineOutlinedIcon /> },
  { title: "Geography Chart", path: "/gyography", icon: <MapOutlinedIcon /> },
];
