import React from 'react';
import {AppBar, Typography, Toolbar} from '@material-ui/core';

function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4">
                        COVID-19 Tracker Webapp
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;