import React from 'react'
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/logo.png'
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { profileAtom } from '../../recoil/profileAtom';
import { useRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Nav = () => {
    const [profile, setProfile] = useRecoilState(profileAtom)

    return (
        <AppBar sx={{ backgroundColor: 'white', color: 'black', padding: '1.5%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Avatar src={logo} sx={{ borderRadius: '50%' }} />
            <InputBase type='text' sx={{ borderRadius: '20px', padding: '0.3% 1%', width: '50%', backgroundColor: '#EEEEEE' }} placeholder='search for high images' />
            <Typography sx={{ margin: 'auto 1%', cursor: 'pointer', color: '#76787A' }}>Explore</Typography>
            <Typography sx={{ margin: 'auto 1%', cursor: 'pointer', color: '#76787A' }}>Advertise</Typography>
            <Typography sx={{ margin: 'auto 1%', cursor: 'pointer', color: '#76787A' }}>superCom+</Typography>
            {
                profile.isLoggedIn ? (<Typography sx={{ margin: 'auto 1%', cursor: 'pointer', color: '#76787A' }}>profile</Typography>) : (<CreateAccountBtn />)
            }
            {
                profile.role === 'ADMIN' ? (<Typography sx={{ margin: 'auto 1%', cursor: 'pointer', color: '#76787A' }}>admin</Typography>) : <Button variant='outlined' sx={{ marginLeft: '1%', color: '#76787A' }}>submit an image</Button>
            }
        </AppBar>
    )
}

const CreateAccountBtn = () => {
    return (
        <Box>
            <Typography sx={{ margin: 'auto 1%', cursor: 'pointer', color: '#76787A', width: '100%' }}>Login/ Signup</Typography>
        </Box>
    )
}

export default Nav