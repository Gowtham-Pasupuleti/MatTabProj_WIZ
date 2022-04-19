import React from "react"
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const ports=()=> {
   const [tableData,setTableData]= React.useState([

   ])
    React.useEffect(()=>{
        fetch("https://staging-api.wizfreight.com/v1/ports")
            .then(res => res.json())
            .then(data => setTableData(data.ports))
    },[])
    


    
    return (
      <div>
       <h1>HERE ARE PORTS</h1>
       <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.info.city.code}</TableCell>
              <TableCell align="right">{row.info.state}</TableCell>
              <TableCell align="right">{row.info.city.info.country.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  
        </div>
    )
  }
  export default ports;
  