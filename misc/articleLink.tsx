import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Chip from '@mui/material/Chip';

import { articleObj } from './articleTypes';

interface articleProps {
    articleInfo: articleObj[]
}

export default function ArticleLink(articleProp: articleProps) {
    const articleArr: articleObj[] = articleProp.articleInfo
    return (
        <List>
            {
                articleArr.sort(
                    (a, b) => {
                        return b.header.publishDate - a.header.publishDate;
                    }
                ).map((x, xIndex) => (
                    <Box
                        href={x.header.url}
                        component={Link}
                        key={xIndex}
                    >
                        <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt={x.header.imageAlt} src={x.header.imageSrc} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            {x.header.title + ' '}
                                            <Chip label={dayjs(x.header.publishDate).format('MMMM YYYY')} size='small' />
                                        </Box>

                                    }
                                    secondary={
                                        <React.Fragment>
                                            {x.content[1].contents[0].text.slice(0, 65) + '...'}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                ))
            }

        </List>
    )
}