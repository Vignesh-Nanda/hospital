import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Services from '../Service/Services';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Patient() {

    const navigate = useNavigate();
    const eventEdit= (event,id) => {
        event.preventDefault();
        navigate(`/edit/${id}`);
    }
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () =>
        {
            try{
                const response = await Services.showPatient();
                setdata(response.data);
            }catch(e){console.log(e);
        }
    };fetchData();
    }, []);

    // const eventEdit = (event, id) => {
    //     event.preventDefault();
    //     navigate(`/SignUp/${id}`);
    // };

    const eventDelete = (event, id) => {
        event.preventDefault();
        console.log(id);
        Services.delete(id).then((res) => {
            if (data) {
                setdata((prevElement) => {
                    return prevElement.filter(
                        (patient) => patient.id != id
                    );
                });
            }
        });
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">FirstName</StyledTableCell>
                        <StyledTableCell align="right">LastName</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Gender</StyledTableCell>
                        <StyledTableCell align="right">Mobile</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">MaritalStatus</StyledTableCell>
                        <StyledTableCell align="right">EmergencyContact</StyledTableCell>
                        <StyledTableCell align="right">Address</StyledTableCell>
                        <StyledTableCell align="right">Zipcode</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((ele) => (

                        <StyledTableRow key={ele.id}>
                            <StyledTableCell component="th" scope="row">
                                {ele.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{ele.fname}</StyledTableCell>
                            <StyledTableCell align="right">{ele.lname}</StyledTableCell>
                            <StyledTableCell align="right">{ele.age}</StyledTableCell>
                            <StyledTableCell align="right">{ele.gen}</StyledTableCell>
                            <StyledTableCell align="right">{ele.mob}</StyledTableCell>
                            <StyledTableCell align="right">{ele.email}</StyledTableCell>
                            <StyledTableCell align="right">{ele.mstatus}</StyledTableCell>
                            <StyledTableCell align="right">{ele.econ}</StyledTableCell>
                            <StyledTableCell align="right">{ele.add}</StyledTableCell>
                            <StyledTableCell align="right">{ele.zip}</StyledTableCell>
                            <IconButton
                                name={ele.id}
                                onClick={(e, id) => eventEdit(e, ele.id)}
                                size="small"
                            >
                                <VisibilityIcon />
                            </IconButton >
                            <IconButton
                                name={ele.id}
                                onClick={(e, id) => eventDelete(e, ele.id)}
                                size="small"
                            >
                                <DeleteIcon />
                            </IconButton >
                        </StyledTableRow>

                    ))};

                </TableBody>
            </Table>
        </TableContainer>
    );
}
