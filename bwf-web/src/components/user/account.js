import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Email from '@mui/icons-material/Email';
import { uploadAvatar } from "../../services/userServices";
import { useAuth } from "../../hooks/useAuth";

export default function Account() {

    const { authData } = useAuth();
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setPasswordConfirm] = useState('');
    const [image, setImage] = useState();

    const uploadFile = async e => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('image', image, image.name);

        const profileData = await uploadAvatar(authData.user.profile.id, uploadData);
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Account</h1>
            <form onSubmit={uploadFile}>
                <label htmlFor="avatar">Upload your avatar</label>
                <div>
                    <TextField
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >Upload File</Button>
            </form>
        </div>
    )
}
