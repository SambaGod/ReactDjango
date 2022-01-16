import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Grid, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Email from '@mui/icons-material/Email';

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const { authData } = useAuth();

    const passMatch = () => {return password === passwordConfirm};

    const handleSubmit = async e => {
        e.preventDefault();
        if (passMatch()) {
            console.log('all good', username, password, email);
        } else {
            console.log('pass didn\'t match');
        }
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={1}>
                    <AccountCircleIcon/>
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id="input-with-item-grid"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={1}>
                    <Email/>
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id="input-with-item-grid"
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={1}>
                    <VpnKeyIcon/>
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id="input-with-item-grid"
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={1}>
                    <VpnKeyIcon/>
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id="input-with-item-grid"
                        label="Confirm Password"
                        type="password"
                        onChange={e => setPasswordConfirm(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit">Register</Button>
            </form>
        </div>
    )
}
