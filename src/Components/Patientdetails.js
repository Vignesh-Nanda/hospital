import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom';

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



const Patientdetails = ({ele,eventDelete}) => {

    const navigate= useNavigate(); 
    const eventEdit= (event,id) => {
        event.preventDefault();
        navigate(`/eventEdit/${id}`);
    }

    return (
        <TableBody>
            
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
                        <DeleteIcon />
                    </IconButton >
                    <IconButton
                        name={ele.id}
                        onClick={(e, id) => eventDelete(e, ele.id)}
                        size="small"
                    >
                        <DeleteIcon />
                    </IconButton >
                </StyledTableRow>

        </TableBody>
    )
}

export default Patientdetails
