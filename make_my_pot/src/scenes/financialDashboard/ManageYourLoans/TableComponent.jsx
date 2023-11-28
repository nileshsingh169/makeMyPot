import React from "react";
import {Input } from "@mui/material";
import InputtableComponent from "./InputtableComponent";

const TableComponent = ({gap,heading,or}) => {
  return (
    <div style={{padding:"10px" , backgroundColor:"white", width:"90%", marginBottom:"10px"}}>
      <p style={{fontSize:"18px", color:"green", marginTop:"5px"}} >{heading}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: gap, width:"600px" }}>
        
        <InputtableComponent text={"Pre-payment amount"} width={250} />
        {or}
        <InputtableComponent text={"Pre-payment penality if any"} width={300} />

      </div>
    </div>
  );
};

export default TableComponent;
