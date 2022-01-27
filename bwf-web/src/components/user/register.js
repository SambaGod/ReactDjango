import { useState } from "react";
import { auth } from '../../services/userServices';
import { Link, useNavigate } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Email from '@mui/icons-material/Email';
import { register } from "../../services/userServices";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {

    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const passMatch = () => {return password === passwordConfirm};

    const handleSubmit = async e => {
        e.preventDefault();
        if (passMatch()) {
            const regData = await register({username, email, password, profile:{is_premium:false}});
            if(regData){
                const data = await auth({username, password});
                setAuth(data);
                navigate('/account');
            }
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
                        id="username"
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
                        id="email"
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
                        id="password"
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
                        id="confirmpassword"
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
