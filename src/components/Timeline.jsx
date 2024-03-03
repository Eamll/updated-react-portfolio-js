import PropTypes from "prop-types"
// import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const timelineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'auto',
    gap: '20px',
    padding: '20px 0',
};

const timelineItemStyle = {
    flex: '0 0 auto',
};

const TimelineItem = ({ title, children }) => (
    <Card style={timelineItemStyle}>
        <CardContent>
            <Typography variant="h6" component="h2">
                {title}
            </Typography>
            <Typography color="textSecondary">
                {children}
            </Typography>
        </CardContent>
    </Card>
);

TimelineItem.propTypes = {
    children: PropTypes.any,
    title: PropTypes.any
}

const Timeline = ({ events }) => (
    <div style={timelineStyle}>
        {events.map((event, index) => (
            <TimelineItem key={index} title={event.title}>
                {event.description}
            </TimelineItem>
        ))}
    </div>
);

Timeline.propTypes = {
    events: PropTypes.shape({
        map: PropTypes.func
    })
}

export default Timeline;