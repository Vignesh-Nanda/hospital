import React from 'react'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import services from '../Service/Services';
import Appbar from './Appbar';
import { useNavigate, useParams } from 'react-router-dom';
import Services from '../Service/Services';
const theme = createTheme();


const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id);

    const initialState = {
        id: id,
        fname: "",
        lname: "",
        email: "",
        age: "",
        gen: "",
        mob: "",
        econ: "",
        mstatus: "",
        add: "",
        zip: ""
    }
    
    const [hospital, sethospital] = useState(initialState);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await Services.getById(id);
                    sethospital(response.data);
                    console.log(response.data)
                } catch (e) {
                    console.log(e);
                }
            }; fetchData();
        }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        sethospital({ ...hospital, [event.target.name]: value });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        services.update(id,hospital).catch(err => console.log(err))
        navigate("/Patient");
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="fname"
                                    required
                                    fullWidth
                                    id="Fname"
                                    value={hospital.fname}
                                    onChange={(event) => handleChange(event)}
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Lname"
                                    label="Last Name"
                                    value={hospital.lname}
                                    onChange={(event) => handleChange(event)}
                                    name="lname"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={hospital.email}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Age"
                                    label="Age"
                                    name="age"
                                    value={hospital.age}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Age"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Gen"
                                    label="Gender"
                                    name="gen"
                                    value={hospital.gen}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Gender"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Mob"
                                    label="Mobile"
                                    name="mob"
                                    value={hospital.mob}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Mobile"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Econ"
                                    label="Emergency Contact"
                                    name="econ"
                                    value={hospital.econ}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Emergency Contact"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="mstatus"
                                    label="Marital Status"
                                    id="Mstatus"
                                    value={hospital.mstatus}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Marital Status"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="add"
                                    label="Address"
                                    id="Add"
                                    value={hospital.add}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="zip"
                                    label="Zipcode"
                                    id="Zip"
                                    value={hospital.zip}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Zipcode"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                        <Grid container justifyContent="flex-end">
                            {/* <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Update
