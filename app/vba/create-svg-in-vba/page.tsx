import React from "react";
import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'
import VideoLink from "@/misc/article_videoLink";

import { headerObj, cardObj, videoLinkObj, articleObj } from '@/misc/articleTypes'

const code0: string = `Function getAvatar(userName As String, initials As String)
On Error GoTo Err_Handler

Dim FilePath As String
Dim fileNumber As Integer

FilePath = "\\data\mdbdata\WorkingDB\Pictures\Avatars\svg\" & userName & ".svg"
fileNumber = FreeFile
Open FilePath For Output As #fileNumber

Dim randomR As Integer, randomG As Integer, randomB As Integer
Dim inputColor, tempHex, fullHex

randomR = randomNumber(30, 170)
randomG = randomNumber(30, 170)
randomB = randomNumber(30, 170)

'try to further randomize the color
Randomize
Select Case True
    Case randomR > randomG And randomR > randomB
        randomG = randomG * Rnd()
    Case randomG > randomB And randomG > randomR
        randomB = randomB * Rnd()
    Case Else
        randomR = randomR * Rnd()
End Select

inputColor = rgb(randomR, randomG, randomB)
tempHex = Hex(inputColor)
fullHex = Mid(tempHex, 5, 2) & Mid(tempHex, 3, 2) & Mid(tempHex, 1, 2)

Print #fileNumber, "<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 100 100""><mask id=""viewboxMask"">" & _
"<rect width=""100"" height=""100"" rx=""50"" ry=""50"" x=""0"" y=""0"" fill=""#fff"" /></mask><g mask=""url(#viewboxMask)""><rect fill=""#" & fullHex & """ widt" & _
"h=""100"" height=""100"" x=""0"" y=""0"" /><text x=""50%"" y=""50%"" font-family=""Arial, sans-serif"" font-size=""50"" font-" & _
"weight=""600"" fill=""#ffffff"" text-anchor=""middle"" dy=""17.800"">" & initials & "</text></g></svg>"

Close #fileNumber

Call convertSVGtoPNG(FilePath, "\\data\mdbdata\WorkingDB\Pictures\Avatars\" & userName & ".png")

Exit Function
Err_Handler:
    Call handleError("wdbGlobalFunctions", "getAvatar", Err.DESCRIPTION, Err.number)
End Function`

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
      },

    ]
  },
  {
    title: 'How the heck?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Did you forget your password? Well you MIGHT be in luck... maybe...`,
        alert: {
          title: `Important Note here: this method only works if you used a split database structure. If you only have an all-in-one database (tables and forms and everything is
          all in one file) then you are SOL unless you use a password recovery service`,
          severity: 'warning'
        }
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Do you have access to the Front End file? Here\'s the easiest method. In the immediate window, just type this and it\'ll give you the connection string,
         which includes the password for MS Access Databases.`,
        code: code0
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
  link: ''
}

export const fullArticle: articleObj = {
  header: headerData,
  content: articleData
}


export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      <ArticleHeader headerInfo={headerData} />

      {/* <VideoLink videoInfo={videoDataObj} /> */}

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid>
  );
}