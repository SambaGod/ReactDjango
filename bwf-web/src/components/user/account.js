import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Email from '@mui/icons-material/Email';
import { register } from "../../services/userServices";

export default function Account() {

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Account</h1>
        </div>
    )
}
