import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Header from "../../components/Header";
import { faqData } from "../../data/mockData";
import "../Screens.css";
import { tokens } from "../../theme";
const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="dashboardMain">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Box sx={{ margin: "20px" }}>
        {faqData.map((item) => {
          return (
            <Accordion key={item.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: colors.greenAccent[400] }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.data}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </div>
  );
};

export default Faq;
