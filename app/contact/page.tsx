import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BYAC from '../../public/images/bmc-full-logo.svg'; // Adjust path to your SVG

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VBA Decoded - Contact',
  description: 'Contact VBA Decoded to suggest a correction or article.',
}

export default function Home() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>
      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2, maxWidth: '800px' }}>
            <Box>
              <Typography variant="h3" component="h1" sx={{ p: 1 }}>
                Hey there!
              </Typography>
              <Typography variant="h5" sx={{ p: 1 }}>
                Have a question? Maybe an idea for a new article?
              </Typography>
              <Typography variant="body1" sx={{ p: 1 }}>
                OK yeah I guess there's also the possibility there's a mistake somewhere. Please reach out if you find an error or think an article could be improved.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mt: 5, p: 1 }}>
                Contact us here:
              </Typography>
              <Button href='mailto:contactvbadecoded@gmail.com' variant='contained'>contactvbadecoded@gmail.com</Button>
            </Box>
          </Paper>
        </Grow>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2, maxWidth: '800px' }}>
            <Typography variant="h3" component="h2" sx={{ p: 1 }}>
              Want to support me?
            </Typography>
            <Typography variant="body1" sx={{ p: 1 }}>
              In reality this money will go to website/business costs - and I thank you greatly for it.
            </Typography>
            <Typography variant="body1" sx={{ p: 1 }}>
              Also, I want to keep this website ad free. This will help me do so!
            </Typography>
            <Button href='https://buymeacoffee.com/jacobbrown' target='_blank' variant='contained' color='success'>
              <Image src={BYAC} alt={""} style={{ width: '150px', height: 'auto' }} />
            </Button>
            <Typography variant="body1" sx={{ p: 1 }}>
              Thanks for your support.
            </Typography>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}