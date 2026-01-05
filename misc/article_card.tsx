import React from 'react';
import Typography from "@mui/material/Typography";
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import CodeBlock from '../misc/codeBlock'
import { cardObj } from './articleTypes'

interface cardProps {
    cardInfo: cardObj
}

export default function ArticleCard(cardProp: cardProps) {
    const card: cardObj = cardProp.cardInfo
    return (
        <Grid size={{ xs: 12 }}>
            <Grow in={true}>
                <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1, pb: 3 }}>
                    <Grid sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1} container>
                        <Grid size={{ xs: 12 }}>
                            <Typography sx={{ pt: 2, textAlign: 'center' }} variant="h5" color='text.secondary'>{card.title}</Typography>
                        </Grid>
                        {card.contents.map((x, xIndex) => (
                            <Grid key={xIndex} size={x.customXs ? x.customXs : { xs: 12 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'center' }}>
                                <Typography color={x.color} variant={x.variant} sx={{ maxWidth: '800px', pt: 2, justifySelf: 'center' }}>{x.text}</Typography>
                                {x.linkTitle && x.linkLocation ? <Button variant='outlined' target='blank' href={x.linkLocation}>{x.linkTitle}</Button> : null}
                                {x.image !== undefined ?
                                    <Card elevation={1} sx={{ borderRadius: '10px' }}>
                                        <CardMedia
                                            component="img"
                                            src={x.image}
                                            sx={{ maxHeight: 600 }}
                                        />
                                    </Card>
                                    : null}
                                {x.alert !== undefined ?
                                    <Alert sx={{ maxWidth: '800px', justifySelf: 'center', mt: 2 }} severity={x.alert.severity}>{x.alert.title}</Alert>
                                    : null}
                                {x.list !== undefined ?
                                    <List
                                        sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
                                    >
                                        {x.list.map((y, yIndex) => (
                                            <Box key={yIndex}>
                                                <ListItem >
                                                    <ListItemText primary={y.primaryText} secondary={y.secondaryText} />
                                                </ListItem>
                                                {
                                                    y.image !== undefined ?
                                                        <ListItem>
                                                            <Card elevation={1} sx={{ borderRadius: '10px' }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    src={y.image}
                                                                    sx={{ maxHeight: 600 }}
                                                                />
                                                            </Card>
                                                        </ListItem>

                                                        : null
                                                }
                                            </Box>
                                        ))}

                                    </List>
                                    : null}
                                {x.code !== undefined ?
                                    <CodeBlock code={x.code} />
                                    : null}
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Grow>
        </Grid >
    )
}