import { Typography, Box, Container, Grid } from "@mui/material";
import 'animate.css';
import TimelineCard from "./Timeline";



const Education = () => {
    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            // sx={{ bgcolor: 'secondary.main' }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Box textAlign="left">
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Education & Experience
                                </Typography>
                                <TimelineCard />
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Grid>

        </>
    );
}

export default Education;