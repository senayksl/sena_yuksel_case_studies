import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {TextField} from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function ResponsiveAppBar( props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar style={{backgroundColor: '#2a59fe'}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            color: 'inherit',
                            marginLeft:"10vh",
                            textDecoration: 'none',
                        }}
                    >
                        Eteration
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >

                            <MenuIcon />
                        </IconButton>

                            <Box sx={{ flexGrow: 1 }}>
                                <TextField
                                    placeholder="Search"
                                    variant="standard"
                                    InputProps={{ disableUnderline: true }}
                                    value={props?.search}
                                    onChange={(e)=>{
                                        {
                                            console.log(e.target.value)
                                            props.setSearch(e.target.value)
                                        }}}
                                    style={{
                                        position: "relative",
                                        marginLeft:"50px",
                                        fontWeight: "500",
                                        // width: "300px",
                                        backgroundColor:"white",
                                        background:"#fff",
                                        webkitBackgroundClip: "#ffffff",
                                        webkitTextFillColor: "black",
                                    }}
                                >
                                </TextField>
                            </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                placeholder="Search"
                                variant="standard"
                                InputProps={{ disableUnderline: true }}
                                value={props?.search}
                                onChange={(e)=>{
                                    {
                                        console.log(e.target.value)
                                        props.setSearch(e.target.value)
                                    }}}
                                style={{
                                    position: "relative",
                                    marginLeft:"50px",
                                    fontWeight: "500",
                                    width: "300px",
                                    backgroundColor:"white",
                                    background:"#fff",
                                    webkitBackgroundClip: "#ffffff",
                                    webkitTextFillColor: "black",
                                }}
                            >
                            </TextField>
                            <div
                                style={{
                                    flexDirection:"row",
                                    display: "flex",
                                    position: "absolute",
                                    top: "15px",
                                    left: "1180px",
                                    fontSize: "16px",
                                }}
                            >
                               <div style={{ flexDirection:"row",display: "flex",marginRight:"3vh"}}> < PermIdentityIcon/> Kerem</div>
                               <div style={{marginRight:"3vh", flexDirection:"row",display: "flex",}}> <WorkOutlineIcon/>117.000₺</div>



                            </div>

                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;