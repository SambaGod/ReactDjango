import {useState} from 'react';
import { auth } from '../../services/userServices';
import { useAuth } from '../../hooks/useAuth';
import { Button, Grid, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from 'react-router-dom';

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
            <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{mt:2}}
            >Login</Button>
            <p>
                <Link to={'/register'}>Don't have an account? register here</Link>
            </p>
            </form>
            :
            <div>
                <div>
                    <img src={'http://127.0.0.1:8000'+authData.user.profile.image} alt={authData.user.username} width={100} />
                </div>
                <p><strong>{authData.user.username}</strong></p>
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
