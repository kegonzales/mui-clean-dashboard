import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";

export default function SimpleContainer() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            Contact
        </Box>
    );
}