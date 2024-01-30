import { Box, Container, Typography, Button, Grid } from '@mui/material';

export const HeroSection = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Container>
                <Box textAlign="left">
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
    )
}