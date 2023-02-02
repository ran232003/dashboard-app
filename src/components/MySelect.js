import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const MySelect = (props) => {
  const { value } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <Select
        className="menu"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        defaultValue={value}
      >
        <MenuItem className="menu" value={10}>
          {value}
        </MenuItem>
        <MenuItem className="menu" value={20}>
          Twenty
        </MenuItem>
        <MenuItem className="menu" value={30}>
          Thirty
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelect;
