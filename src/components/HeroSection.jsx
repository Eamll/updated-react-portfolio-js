import { Box, Container, Typography, Button, Grid } from '@mui/material';

export const HeroSection = () => {
    return (
        <Grid container direction={'column'}>
            <Grid item xs={12} sm={8} md={6}>
                <Container>
                    <Box sx={{ my: 30 }}>
                        <Typography variant="body1" gutterBottom>
                            Web Developer.
                        </Typography>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Hello, I&apos;m Alexander Morales
                        </Typography>
                        <Typography variant="body1">
                            I like to create interactive user interfaces using Material-UI.
                        </Typography>
                        <Button variant="outlined" sx={{ my: 3 }}>Download CV</Button>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    )
}
