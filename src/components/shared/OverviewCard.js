import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../../styles/globalStyle.css';

export default function OverviewCard({title, number, onClick}) {
    const cardRootClass = "minCardWidth cardWidth cardMargin";
    
    return (
        <Card className={cardRootClass}>
            <CardContent className="flexOne">
            <Typography className="genericFontSize" color="textSecondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" component="h2">
                {number}
            </Typography>
            </CardContent>
        </Card>
    )
}
