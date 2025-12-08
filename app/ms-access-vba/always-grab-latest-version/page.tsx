import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'

import { headerObj, cardObj, articleObj } from '@/misc/articleTypes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grab Latest Version',
  description: 'Have users always get the latest version of your MS Access database.',
}

let codeOg = `@echo off
IF exist myDirName ( echo "C:\\\databaseName\\\" exists ) ELSE ( mkdir "C:\\\databaseName\\\" )
copy \\\\standardCopyLocation\databaseName.accdb "C:\\\databaseName\\\databaseName.accdb"
start "msaccess.exe" "C:\\\databaseName\\\databaseName.accdb"`

const headerData: headerObj = {
  title: 'Ensure users have the latest version of your MS Access Database',
  subTitle: 'I don\'t like out of date versions.',
  note: 'Written by Jacob, November 2025',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown',
  publishDate: dayjs('11/13/2025').valueOf(),
  url: '/ms-access-vba/always-grab-latest-version'
}

const articleData: cardObj[] = [
  {
    title: 'I really do hate out of date versions.',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `It doesn't sound that hard, but giving everyone the latest version of your database every time is not as straight-forward as I originally expected.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `The method described here is pretty simple and easy to set up, though. It used a basic batch file (~4 lines) and a shortcut (.lnk).`,
      }
    ]
  },
  {
    title: 'Why does this matter?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Sooo many reasons exist to make you want everyone to have the latest version of your accdb.
        First is the simple bug fix or feature update. Or, maybe, you increased the security or permissions levels of some features.
        
        Maybe you even made some backend changes to your tables and a frontend change is required to make it work.
        
        All of these and more are important reasons you should consider implementing a method to push the latest updates to your users.`,
      }
    ]
  },
  {
    title: 'Pre-requisites',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `A few things you must have set up first in order for this to work...`,
        list: [
          {
            primaryText: '- Must be using split database structure',
            secondaryText: 'Front end must be separate from back end. This method only distributes the front end file.'
          },
          {
            primaryText: '- Must have production Front End file in an accessible location for users',
            secondaryText: 'Users must have permission to copy from this location'
          },
        ]
      }
    ]
  },
  {
    title: 'The Setup',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Here's how I do it. Very simple. Details on these steps will be after this list.`,
        list: [
          {
            primaryText: '1. Create a standard batch file',
            secondaryText: 'Using code below edited to your needs/file locations',
            image: '/images/ms-access-vba/always-grab-latest-version/batch-file.png'
          },
          {
            primaryText: '2. Create a shortcut to that batch file',
            secondaryText: '',
            image: '/images/ms-access-vba/always-grab-latest-version/shortcut.png'
          },
          {
            primaryText: '3. Distribute copies of the shortcut file as method of opening',
            secondaryText: 'THIS is the file you share'
          },
        ]
      },
    ]
  },
  {
    title: '1. Create a Batch File',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `This is very easy. Don't be overwhelmed by batch. It's basically using cmd prompt. Very simple stuff here.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Simply open a text editor (notepad is perfect) and copy the code / paste it in the text editor. Then, save the file and change the extension of the file to either .bat or .cmd`,
        code: codeOg,
        image: '/images/ms-access-vba/always-grab-latest-version/batch-file.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `This batch file should be stored near your production front end. It does NOT need to be editable by your users. They simply need read-only access.`,
      },
    ]
  },
  {
    title: '2. Create a shortcut to that batch file',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Just simply right-click the batch file and create a shortcut to it.`,
        image: '/images/ms-access-vba/always-grab-latest-version/shortcut.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `You don't have to, but I typically choose to edit a few settings inside the shortcut file. Simply Right-Click and go to "Properties" to access this menu.
        First, I change it to open "Minimized" (this will make the batch file harder to see for the user).
        Then, I set up a custom icon.
        I also change the target slightly.`,
        image: '/images/ms-access-vba/always-grab-latest-version/shortcut-properties.png'
      },
    ]
  },
  {
    title: 'How do I tell users I have a newer version available?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `I have a VBA function on the frontend that runs whenever the user is active that checks to make sure the active database is up to date (checks a local version number against the latest version number on a backend table).
        If is it out of date, there is a form message box that displays "Newer version available"`,
      }
    ]
  },
  {
    title: 'Does it always work?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Not always. The biggest issue with this is the "Recent Files" menu in MS Access. I don't currently know how to disable this menu. I have some users that really enjoy this menu, though.
        What I've found is just some consistent training / education to the users has been the most helpful action.`,
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
