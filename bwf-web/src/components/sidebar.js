import {useState} from 'react';
import { auth } from '../services/userServices';
import { useAuth } from '../hooks/useAuth';
import { Button, Grid, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Sidebar() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {authData, setAuth} = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await auth({username, password});
        setAuth(data);
    }

    const logout = () => setAuth(null);

    return (
        <div className='sidebar'>
            <h2>Sidebar</h2>
            {!authData ?
            <form onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={2}>
                    <AccountCircleIcon/>
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="input-with-item-grid"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={2}>
                    <VpnKeyIcon/>
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        id="input-with-item-grid"
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
            :
            <div>
                <p>{authData.user.username}</p>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => logout()}
                >Logout</Button>
            </div>
            }
        </div>
    )
}
