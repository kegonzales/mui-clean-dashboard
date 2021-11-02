import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link as RouterLink} from 'react-router-dom';
import Box from "@mui/material/Box";

export default function NavBar(props) {
    const { handleDrawerToggle } = props;
    return (
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { md: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box sx={{
                        display: { xs: 'none', md: 'block' }}}>
                        <Button component={RouterLink} to="/" color="inherit">Home</Button>
                        <Button component={RouterLink} to="/contact" color="inherit">Contact</Button>
                    </Box>
                </Toolbar>
            </AppBar>
    );
}