import PropTypes from 'prop-types';
import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger, Button, Box, useTheme } from '@mui/material';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    const theme = useTheme();

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: trigger ? theme.palette.primary.main : 'transparent',
        },
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

const Header = () => {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    <Typography style={{ color: trigger ? theme.palette.background.default : theme.palette.primary.main }}>
                        My Portfolio
                    </Typography>
                    <Box flexGrow={1}></Box>
                    <Button style={{ color: trigger ? theme.palette.background.default : theme.palette.primary.main }}>
                        Inicio
                    </Button>
                    <Button style={{ color: trigger ? theme.palette.background.default : theme.palette.primary.main }}>
                        Proyectos
                    </Button>
                    <Button style={{ color: trigger ? theme.palette.background.default : theme.palette.primary.main }}>
                        Contacto
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;