import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
// import { DeleteOutline } from "@material-ui/icons";
import Axios from "axios";

function Table() {
  const server = "http://localhost:3001";
  const [CustomerList, setCustomerList] = useState([]);
  useEffect(() => {
    Axios.get(`${server}/Table`).then((response) => {
      setCustomerList(response.data);
    });
  }, []);

  const columns = [
    {
      field: "softname",
      headerName: "ชื่อซอฟต์แวร์",
      width: 300,
      
    },
    { field: "type", headerName: "ประเภทซอฟต์แวร์", width: 300 },
    {
      field: "cname",
      headerName: "ชื่อผู้ประสานงาน",
      width: 200,
      
    },
    { field: "ctel", headerName: "โทร", width: 200 },
    { field: "dmy", headerName: "วัน/เดือน/ปี", width: 200 },
    {
      field: "doc",
      headerName: "เอกสาร",
      width: 100,
      renderCell: (CustomerList) => {
        return (
          <>
            <button>
              Doc
            </button>
          </>
        );
      },
    },
    {
      // field: "delete",
      // headerName: "เอกสาร",
      width: 100,
      renderCell: (CustomerList) => {
        return (
          <>
            <button>
              Delete
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>ตารางรายการซอฟต์แวร์รอประเมิน</h1>
      <Container sx={{height:400, width: '100%'}}>
      <DataGrid
        rows={CustomerList}
        columns={columns}
        pageSize={[10]}
        rowsPerPageOptions={[10]}
      />
      </Container>
    </div>
  );
}

export default Table;
