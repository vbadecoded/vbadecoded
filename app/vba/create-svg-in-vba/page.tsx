import React from "react";
import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'
import VideoLink from "@/misc/article_videoLink";

import { headerObj, cardObj, videoLinkObj, articleObj } from '@/misc/articleTypes'

const headerData: headerObj = {
  title: 'Create an SVG from VBA',
  subTitle: `From SVG code, here's how you do it. No PowerPoint!`,
  note: 'Written by Jacob, January 2026',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown',
  publishDate: dayjs('01/10/26').valueOf(),
  url: '/vba/create-svg-in-vba'
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VBA Editor Dark Mode',
  description: 'Switch your theme to Dark Mode on the default VBA Editor.',
}

const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

const articleData: cardObj[] = [
  {
    title: 'The ugly VBE',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `The out-of-the-box editing experience is a little hard to use in my opinion... and most others...
                Not only is there no 'Dark Mode' switch built in, but even the font is hard to read. Exhibit A, the below screenshot.`,
        image: '/images/vba/vba-editor-dark-mode/lightMode_window.png'
      }
    ]
  },
  {
    title: 'Dark Mode?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `This is super easy to set up, but not quite the simple checkbox that I would want it to be.
                Here's what my VBE looks like. You can see not quite everything is dark-themed. The toolbars are still light even with these settings applied.`,
        image: '/images/vba/vba-editor-dark-mode/darkMode_window.png'
      },
    ]
  },
  {
    title: 'First, head up to the Tools-Options area',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Click on Tools, then Options:`,
        image: '/images/vba/vba-editor-dark-mode/howTo_0.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Then this pop-up should appear:`,
        image: '/images/vba/vba-editor-dark-mode/howTo_1.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `All you need to do is edit each line item in the Code Colors area, using the Foreground and Background color dropdowns.
                This is also the area where you can change the font size and type if you so desire.
                If you want to know my preferences, see below, I took a screenshot of each item.`,
      },
    ]
  },
  {
    title: 'My Preferences',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Here are the settings I use. Feel free to copy.`
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Normal Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_0.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Selection Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_1.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Syntax Error Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_2.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Execution Point Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_3.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Breakpoint Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_4.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Comment Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_5.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Keyword Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_6.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Indentifier Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_7.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Bookmark Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_8.png',
        customXs: 'auto'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Call Return Text`,
        image: '/images/vba/vba-editor-dark-mode/theme_9.png',
        customXs: 'auto'
      },
    ]
  },
  {
    title: 'That\'s it!',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Honestly, a bit dissapointing that this is the only option inside the VBE for dark mode. You can always edit your code 
          in something like VS Code or Notepad++ or NeoVim or something like that, but the ease of using the VBE usually outranks those options for me personally.`,
      },
    ]
  },
]

const videoDataObj: videoLinkObj = {
  title: 'Click here to watch the YouTube video!',
  link: 'https://youtu.be/YRpptzMkuHc'
}

export const fullArticle: articleObj = {
  header: headerData,
  content: articleData
}


export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      <ArticleHeader headerInfo={headerData} />

      <VideoLink videoInfo={videoDataObj} />

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid>
  );
}