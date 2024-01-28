import { HeroSection } from "../components/HeroSection";


import { Typography, Box } from "@mui/material";
import { Container, Button, Grid } from '@mui/material';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Box sx={{ bgcolor: 'background.default' }}>
                <Grid container position="relative">
                    <Grid item xs={12}>
                        <Container>
                            <Box sx={{ my: 15 }}>
                                <Typography variant="body1" gutterBottom>
                                    About Me.
                                </Typography>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Hi, I am here to help
                                    your next project
                                </Typography>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;