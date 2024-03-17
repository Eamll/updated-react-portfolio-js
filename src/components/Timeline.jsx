import PropTypes from "prop-types"
import { useState, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const timelineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'scroll',
    gap: '20px',
    padding: '20px 0',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For Internet Explorer and Edge
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

const Timeline = ({ events }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const timelineRef = useRef();

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - timelineRef.current.offsetLeft);
        setScrollLeft(timelineRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - timelineRef.current.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        timelineRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            style={{ ...timelineStyle, '&::-webkit-scrollbar': { display: 'none' } }} // For Chrome, Safari and Opera
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            ref={timelineRef}
        >
            {events.map((event, index) => (
                <TimelineItem key={index} title={event.title}>
                    {event.description}
                </TimelineItem>
            ))}
        </div>
    );
};

Timeline.propTypes = {
    events: PropTypes.shape({
        map: PropTypes.func
    })
}

export default Timeline;