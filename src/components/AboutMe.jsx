import { useState } from 'react';
import { Typography, Box } from "@mui/material";
import { Container, Grid } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { useMediaQuery } from '@mui/material';
import 'animate.css';

const AboutMe = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const [hoverStates, setHoverStates] = useState({
        react: false,
        mongodb: false,
        nodeJs: false,
        express: false
    });

    const handleMouseEnter = (icon) => {
        setHoverStates(prevState => ({ ...prevState, [icon]: true }));
    };

    const handleMouseLeave = (icon) => {
        setHoverStates(prevState => ({ ...prevState, [icon]: false }));
    };

    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
                sx={{ bgcolor: 'background.default' }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box textAlign="left">
                                <Typography variant="body1" gutterBottom>
                                    About Me.
                                </Typography>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Hi, I am here to help your next project!
                                </Typography>
                                <Typography variant="body1">
                                    Graduated from Systems Engineering at Universidad Tecnológica Privada de Santa Cruz de la Sierra (UTEPSA), I have consistently strived for academic excellence and the development of a strong technical skillset. My knowledge base includes proficiency in the MERN stack (MongoDB, Express, React, and Node.js), as well as familiarity with various programming languages and frameworks. Apart from my technical acumen, I pride myself on my English communication skills. In 2016, I graduated from the Centro Boliviano Americano (CBA), successfully completing both the TOEFL and TOEIC examinations. Since then, I have made a conscious effort to immerse myself in English content and incorporate the language into my daily life. This expertise allows me to collaborate effectively with diverse teams and further enrich my professional experiences. I am highly motivated and committed to continuous growth in the field of web development, always eager to learn and expand my skillset.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3} container justifyContent="flex-end" spacing={2}>
                            <Grid item className={`animate__animated ${hoverStates.react ? 'animate__tada' : ''}`} onMouseEnter={() => handleMouseEnter('react')} onMouseLeave={() => handleMouseLeave('react')}>
                                <FaReact style={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100 }} />
                            </Grid>

                            <Grid item className={`animate__animated ${hoverStates.mongodb ? 'animate__tada' : ''}`} onMouseEnter={() => handleMouseEnter('mongodb')} onMouseLeave={() => handleMouseLeave('mongodb')}>
                                <DiMongodb style={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100 }} />
                            </Grid>

                            <Grid item className={`animate__animated ${hoverStates.nodeJs ? 'animate__tada' : ''}`} onMouseEnter={() => handleMouseEnter('nodeJs')} onMouseLeave={() => handleMouseLeave('nodeJs')}>
                                <FaNodeJs style={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100 }} />
                            </Grid>

                            <Grid item className={`animate__animated ${hoverStates.express ? 'animate__tada' : ''}`} onMouseEnter={() => handleMouseEnter('express')} onMouseLeave={() => handleMouseLeave('express')}>
                                <SiExpress style={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100 }} />
                            </Grid>

                            <Grid item className={`animate__animated ${hoverStates.angular ? 'animate__tada' : ''}`} onMouseEnter={() => handleMouseEnter('angular')} onMouseLeave={() => handleMouseLeave('angular')}>
                                <FaAngular style={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100 }} />
                            </Grid>

                            <Grid item className={`animate__animated ${hoverStates.nestjs ? 'animate__tada' : ''}`} onMouseEnter={() => handleMouseEnter('nestjs')} onMouseLeave={() => handleMouseLeave('nestjs')}>
                                <SiNestjs style={{ width: isSmallScreen ? 50 : 100, height: isSmallScreen ? 50 : 100 }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
}

export default AboutMe;