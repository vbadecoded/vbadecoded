import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'
import VideoLink from "@/misc/article_videoLink";

import { headerObj, cardObj, articleObj, videoLinkObj } from '@/misc/articleTypes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Re-enable Shift Bypass',
  description: 'Quickly and easily enable shift-bypass on any MS Access Database.',
}

let codeOg = `Function enableShift()
  
'initialize variables
Dim db, acc

'specify database location
Dim databaseLocation as String
databaseLocation = "C:\\\\dev\\\WorkingDB_brownj_dev.accdb"
  
'open the database as an Access object
Set acc = CreateObject("Access.Application")

'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)

'run the command
db.Properties("AllowByPassKey") = True

'clear your objects (otherwise you'll have to force-close some tasks)
db.Close
Set db = Nothing
Set acc = Nothing

MsgBox "Done!"

End Function`

let code0 = `Function enableShift()
On Error GoTo errEnableShift

'initialize variables
Dim db As DAO.Database, acc
Dim prop As DAO.Property
Const conPropNotFound = 3270

'specify database location
Dim databaseLocation as String
databaseLocation = "C:\\\\dev\\\WorkingDB_brownj_dev.accdb"
  
'open the database as an Access object
Set acc = CreateObject("Access.Application")

'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)

'run the command
db.Properties("AllowByPassKey") = True

GoTo exitThis

errEnableShift:
If Err = conPropNotFound Then
    Set prop = db.CreateProperty("AllowByPassKey", dbBoolean, True)
    db.Properties.Append prop
    Resume Next
    GoTo exitThis
End If

MsgBox "Done!"

exitThis: 'clear your objects/detach from the database
db.Close
Set db = Nothing
Set acc = Nothing

End Function`

let code1 = `On Error Resume Next
 
Const conPropNotFound = 3270

'initialize variables
Dim db, acc
Dim prop
 
'specify database location
Dim databaseLocation
databaseLocation = "C:\\\\dev\\\WorkingDB_brownj_dev.accdb"
'open the database as an Access object
Set acc = CreateObject("Access.Application")
 
'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)
 
'run the command
db.Properties("AllowByPassKey") = True
 
'if there is an error, then you need to add the property
If Err = conPropNotFound Then
  Set prop = db.CreateProperty("AllowByPassKey", 1, True)
  db.Properties.Append prop
End If
 
'clear your objects/detach from the database
db.Close
Set db = Nothing
Set acc = Nothing

MsgBox "Done!"`

const headerData: headerObj = {
  title: 'Force Re-Enable Shift Key Bypass on an MS Access Database',
  subTitle: 'Let\'s bust it open!',
  note: 'Written by Jacob, October 2025',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown',
  publishDate: dayjs('10/25/2025').valueOf(),
  url: '/ms-access-vba/force-reenable-shift-key-bypass'
}

const articleData: cardObj[] = [
  {
    title: 'First, why are you doing this?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Please make good decisions. The information I give here is mainly for fixing your own mistakes or possibly breaking open a passed-down database or something similar.`,
        alert: {
          title: `If you perform this action to a database that is using this method as security, this would be considered bypassing that security. Don\'t do that without permission...`,
          severity: 'error'
        }
      }
    ]
  },
  {
    title: 'What is Shift-Enabling?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Trying to break into an MS Access database? Or maybe you accidentally disabled the shift-key bypass on one?
                Here's how to force re-enable the shift-key bypass.

                I'm assuming you know what shift-key bypass is for an MS Access Database.
                Just so we're clear though, it's that "special keys" thing that allows you to bypass the startup form
                and any startup macros from running. It basically opens a database bypassing all the protective procedures.`,
        alert: {
          title: `Important Note here: this method only applies to .accdb files and similar.
                It does NOT work on .accde files.Those are fully compiled executable- only databases.
                You cannot edit or disable startup procedures on these unless you used a very unique setup.`,
          severity: 'warning'
        }
      }
    ]
  },
  {
    title: 'Two Methods',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `You could do this a few ways... Here are two.`,
        list: [
          {
            primaryText: '1. Use another MS Access Database (or any other MS product)',
            secondaryText: ''
          },
          {
            primaryText: '2. Use a VBScript',
            secondaryText: ''
          },
        ]
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `The method / code is essentially the same. Both use the core function below.
                This code sample is basic and is expecting the database to already at least have the property available.
                The code samples later deal with the possibility of that not existing yet.`,
        code: codeOg
      }
    ]
  },
  {
    title: 'METHOD 1: Use another MS Access DB',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `You could also use Excel, PowerPoint, Word, Classic Outlook, etc. It doesn't really matter which application you use.
                Just a place you can run some VBA. In this function, the error handling uses VBAs "On Error GoTo" functionality.`,
        list: [
          {
            primaryText: '1. Open the VB Editor.',
            secondaryText: '(in the other database)'
          },
          {
            primaryText: '2. Paste the below code into a module.',
            secondaryText: 'Don\'t forget to modify your DB location!'
          },
          {
            primaryText: '3. Run the function!',
            secondaryText: 'I usually go to the immediate pane and type the function name, then hit Enter'
          },
        ],
        code: code0
      }
    ]
  },
  {
    title: 'METHOD 2: Create a VBScript file',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `If you've never used one before, VBScripts are very handy. Sometimes I use an MS Access DB to call a VBscript.
                Sometimes, I use a VBScript to call an MS Access DB. Other times, I'll use it to perform some strange task like this one.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `They are very simple to create. Just open a text editor (notepad works just fine).
                Be careful having this file out in the open though - and then labelling it "how to disable shift protection" or something like that.
                I think you know what I'm saying here.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `VBScripts do not have the ability to use "On Error GoTo" like VBA, so you will need to use a different method, like below.`,
        list: [
          {
            primaryText: '1. Open a text editor (notepad is the example here)',
            secondaryText: ''
          },
          {
            primaryText: '2. Paste the below code into that file. Don\'t forget to modify your DB location.',
            secondaryText: ''
          },
          {
            primaryText: '3. Save the file with an extension of .vbs',
            secondaryText: '',
            image: '/images/ms-access-vba/force-shift-enable/notepad-save.png'
          },
          {
            primaryText: '4. Close the file, and double-click it to run it.',
            secondaryText: '',
            image: '/images/ms-access-vba/force-shift-enable/vbs.png'
          },
        ],
        code: code1
      },

    ]
  },
  {
    title: 'Wow, that\'s really all there is to it?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Yeah this is a scary reality of developing in MS Access. There are many other security measures you can take, but this common one is pretty easy to break through.
         In all reality, though, this is still plenty of security unless you know you have some power users that could easily google this and find this very article...`,
      }
    ]
  },
]

const videoDataObj: videoLinkObj = {
  title: 'Click here to watch the YouTube video!',
  link: 'https://youtu.be/mQj7ahbXyYY'
}

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

      <VideoLink videoInfo={videoDataObj} />

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid >
  );
}
