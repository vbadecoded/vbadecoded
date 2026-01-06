import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import { articleObj } from "@/misc/articleTypes";
import ArticleLink from "@/misc/articleLink";

import { fullArticle as encryptArticle } from "./encrypt-database/page";
import { fullArticle as enableShiftArticle } from "./force-reenable-shift-key-bypass/page";
import { fullArticle as findPwArticle } from "./find-encryption-password/page";
import { fullArticle as grabLatestVersion } from "./always-grab-latest-version/page";
import { fullArticle as userThemes } from "./user-themes/page";

export const allArticles: articleObj[] = [
  enableShiftArticle,
  encryptArticle,
  findPwArticle,
  grabLatestVersion,
  userThemes
]

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VBA Decoded - MS Access VBA',
  description: 'Articles for developers on how to best use MS Access.',
}

export default function Home() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ textAlign: 'center', minHeight: '500px', alignContent: 'center' }}>
            <Image
              height='300'
              width='300'
              src='/images/ms_access_logo.svg'
              style={{ width: '150px', height: 'auto' }}
              alt='Microsoft Access Logo'
              loading="lazy"
            />
            <Typography
              sx={{ fontWeight: '100', letterSpacing: 7 }}
              variant={'h3'}
              color='text.secondary'
              component="h1"
            >
              Microsoft Access + VBA
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ borderRadius: '10px', p: 3, m: 2, textAlign: 'center' }}>
            <Stack spacing={3}>
              <Typography variant="h3">
                My bread and butter!
              </Typography>
              <Typography variant="h5">
                MS Access Specific VBA is where my knowledge goes a bit deeper.
              </Typography>
              <Typography variant="body2">
                (Though some of the articles may not be about VBA...)
              </Typography>
            </Stack>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, m: 2, textAlign: 'center' }}>
            <Typography variant="h5" color='text.secondary'>All MS Access VBA Articles:</Typography>
            <ArticleLink articleInfo={allArticles} />
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}