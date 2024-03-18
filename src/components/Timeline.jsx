import { Box, Typography, Grid, Modal } from '@mui/material';
import { useState } from 'react';

function TimelineCard() {
    const contenttop = [
        {
            id: 1,
            year: '2019 - 2023',
            title: 'Licenciatura en Ingeniería de Sistemas',
            office: 'UTEPSA',
            text: '',
        },
        {
            id: 2,
            year: '2012 - 2016',
            title: 'Inglés Nivel Avanzado Programa de Estudios',
            office: 'CBA (Centro Boliviano Americano)',
            text: '',
        },
        {
            id: 3,
            year: '11/2016',
            title: 'TOEFL ITP (Test of English as a Foreign Language)',
            office: 'CBA (Centro Boliviano Americano)',
            text: '',
        },
        {
            id: 4,
            year: '09/2016',
            title: 'TOEIC (Test of English for International Communication)',
            office: 'CBA (Centro Boliviano Americano)',
            text: '',
        },
        {
            id: 5,
            year: '2018',
            title: 'Bachiller en Humanidades',
            office: 'Colegio Boliviano Americano',
            text: '',
        },
        {
            id: 6,
            year: '10/2023 - 12/2023',
            title: 'Prácticas como Desarrollador Web',
            office: 'AssureSoft, Santa Cruz de la Sierra',
            text: 'Construir interfaces de aplicaciones web front-end utilizando Angular y TypeScript para lógica del lado del cliente y arquitectura basada en componentes. Desarrollar API de back-end robustas y escalables con Node.js, Express y base de datos MySQL para proporcionar datos al front-end. Desarrollar código bien diseñado, probado y documentado siguiendo las mejores prácticas para el desarrollo de software. Colaborar con equipos interfuncionales utilizando la metodología Scrum.',
        },
        {
            id: 7,
            year: '08/2023 - 10/2023',
            title: 'Prácticas como Desarrollador Web',
            office: 'Biopetrol EE.SS., Santa Cruz de la Sierra',
            text: 'Construir sitios web y aplicaciones web receptivas para clientes utilizando PHP, CodeIgniter y Flutter con base de datos SQL Server, PostgreSQL y MySQL. Trabajar en estrecha colaboración con los clientes para comprender los requisitos del proyecto y diseñar soluciones personalizadas. Participar en todas las etapas del desarrollo, incluida la planificación, implementación y despliegue.',
        },
        {
            id: 8,
            year: '06/2020 - 05/2023',
            title: 'Desarrollador Tecnológico',
            office: 'Firma de Consultoría Contable y Tributaria "Solución"',
            text: 'Desarrollar scripts de automatización y macros utilizando Visual Basic para agilizar los procesos y flujos de trabajo empresariales. Programar soluciones para minimizar la entrada manual de datos y maximizar la productividad del equipo de contabilidad.',
        },
    ];

    // const [expandedText, setExpandedText] = useState({});

    // const toggleExpandedText = (id) => {
    //     setExpandedText(prevState => ({ ...prevState, [id]: !prevState[id] }));
    // };
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const handleOpen = (title, text) => {
        setModalTitle(title);
        setModalContent(text);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
        >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalTitle}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalContent}
            </Typography>
        </Box>
    );

    return (
        <Grid container spacing={3}>
            {contenttop.map((data) => {
                const titleWithoutBraces = data.title.replace(/ *\([^)]*\) */g, " ");
                return (
                    <Grid item xs={12} sm={6} md={4} key={data.id}>
                        <Box
                            sx={{
                                padding: 2,
                                marginBottom: 2,
                                backgroundColor: 'grey.200',
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {data.year}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                {titleWithoutBraces}
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: 1, fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleOpen(data.title, data.text)}>
                                Details...
                            </Typography>
                        </Box>
                    </Grid>
                );
            })}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {body}
            </Modal>
        </Grid>
    );
}

export default TimelineCard;