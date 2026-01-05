import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'

import { headerObj, cardObj, articleObj } from '@/misc/articleTypes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Themes',
  description: `That's right. User-set themes in MS Access (Dark Mode included!)`,
}

let codeOg = `@echo off
IF exist myDirName ( echo "C:\\\databaseName\\\" exists ) ELSE ( mkdir "C:\\\databaseName\\\" )
copy \\\\standardCopyLocation\databaseName.accdb "C:\\\databaseName\\\databaseName.accdb"
start "msaccess.exe" "C:\\\databaseName\\\databaseName.accdb"`

const headerData: headerObj = {
  title: 'User Themes',
  subTitle: `That's right. User-set themes in MS Access (Dark Mode included!)`,
  note: 'Written by Jacob, January 2026',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown',
  publishDate: dayjs('01/05/26').valueOf(),
  url: '/ms-access-vba/user-themes'
}

const articleData: cardObj[] = [
  {
    title: 'NOTE',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `This article is currently a work in progress. I wanted to publish it quickly so you can see the basics and start using it while I get more documentation made.`,
      }
    ]
  },
  {
    title: 'THE PROBLEM(S)',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Normal MS Access Looks Old. I think we've all experienced this issue...`,
        list: [
          {
            primaryText: `1. Dark mode is hard to impelement`,
            secondaryText: 'Default method is a Theme file or manually setting all controls. Both are very manual and hard to adjust.'
          },
          {
            primaryText: `2. Users can't set theme at run-time`,
            secondaryText: 'Theme file changes require restart unless done in design view.',
          },
          {
            primaryText: `Overall - If you want a certain look, it's currently 100% manual and not customizable per person.`,
            secondaryText: `Ew.`
          },
        ]
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `I've read about many people (especially executives) not considering MS Access at all simply because it doesn't look modern. Well, here you go. It's fixed. (Mostly)`,
      }
    ]
  },
  {
    title: 'Why does this matter?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Many people will say this is a waste of time. I disagree.`
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `For a good application, it's important that users enjoy the experience and they can easily figure out how to use the app.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Good UI/UX is extremely important, even on internal applications, which is usually the purpose on an MS Access Database.
        It makes your application consistent, easy to predict, and easier and faster to learn how to use.`,
      }
    ]
  },
  {
    title: 'The Setup',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `There's not a ton going on.
        Basically there is a giant Select Case that loops through all the controls on the selected form and sets them to values that are calculated/defined based on the theme table.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Here's the setup...`,
        list: [
          {
            primaryText: `1. Each control must have it's tag set to a defined name (anywhere in the tag string is fine)`,
            secondaryText: 'These values are available in this help doc: https://github.com/vbadecoded/ms-access-theme-editor/wiki/Tags'
          },
          {
            primaryText: '2. There is a table of themes that stored all the values',
            secondaryText: 'Not much here, just ID, theme name, and some colors / scalars.',
          },
          {
            primaryText: '3. When each form is opened, it must call the "setTheme(Me)" VBA global function.',
            secondaryText: `Here's where everything actually happens.`
          },
        ]
      },
    ]
  },
  {
    title: 'How do I implement this?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Fastest way (in my opinion) to understand this setup fully and to implement it yourself is to download the sample database from GitHub.`,
        linkTitle: 'MS Access Theme Editor',
        linkLocation: 'https://github.com/vbadecoded/ms-access-theme-editor/'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `This sample database also includes a theme editor (hence the name) that allows you to edit the default themes and to add new ones.`
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `To add this to an existing MS Access Database, just export the frmThemeEditor and sfrmTheme Editor and the setTheme module to your database.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Then, the time consuming part - add a tag to every control in every form you want to implement this one, then you can put te setTheme command on every form.`,
      },
    ]
  },
  {
    title: 'How do users set their own theme?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `This requires the prerequisite that you are using a split database structure.
        If you are not, and you have multiple users, please do some research and implement a split structure.
        There are plenty of sources out there (I don't have an article about this).`
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `You then need a table in your backend that has a record per user. In this table, add a column for themeId (number, single).
        Then, add a dropdown in a setting form somewhere to allow the user to edit this value based on the themes table.`
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Last, you need to add a line in your startup procedure to pull the theme from this table and set it to the database.
        That's it - done!`
      },
    ]
  },
  {
    title: 'Does it always work?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `I've never actually had issues with this. I've used it in production (~150 user database) since 2023-ish, and have had no issues. Please let me know if you have issues.`,
      }
    ]
  },
]

export const fullArticle: articleObj = {
  header: headerData,
  content: articleData
}


const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

export default function Home() {
  return (
    <Grid
      sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }}
      spacing={3}
      container
    >

      <ArticleHeader headerInfo={headerData} />

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid >
  );
}
