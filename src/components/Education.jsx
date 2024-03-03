import { Typography, Box, Container, Grid } from "@mui/material";
import 'animate.css';
import Timeline from "./Timeline";



const Education = () => {
    const events = [
        { title: 'Started School', description: 'I started school in 2000.' },
        { title: 'Graduated High School', description: 'I graduated high school in 2012.' },
        { title: 'Started University', description: 'I started university in 2013.' },
        { title: 'Graduated University', description: 'I graduated university in 2017.' },
        // Add more events here...
    ];
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
                        <Grid item xs={6}>
                            <Box textAlign="left">
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Education & Experience
                                </Typography>
                                <Timeline events={events}></Timeline>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Grid>
        </>
    );
}

export default Education;