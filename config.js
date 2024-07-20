const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348061982806";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348061982806";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_44_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDVzhIc25KNjhqb05XdkhiUEdwTGw3QXZkejE5N2FnMlUxNDMyOTMvTzZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTaXdPZU8zZFJFMkcwcjh0NjVIRFV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJiOGE5MmNmLTlmYWEtNGNkOS1iMjdhLTk2MzVkNDAzZTM5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAzMyxcbiAgICAgIDE3MCxcbiAgICAgIDExNyxcbiAgICAgIDEyMCxcbiAgICAgIDkyLFxuICAgICAgMjMxLFxuICAgICAgMTY4LFxuICAgICAgNjEsXG4gICAgICAxMixcbiAgICAgIDE1NyxcbiAgICAgIDEyMSxcbiAgICAgIDQwLFxuICAgICAgMTA3LFxuICAgICAgMTQwLFxuICAgICAgODQsXG4gICAgICA1MyxcbiAgICAgIDIyOCxcbiAgICAgIDIzNyxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA2MixcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgMjYsXG4gICAgICA5OSxcbiAgICAgIDE2MyxcbiAgICAgIDE5MSxcbiAgICAgIDExNCxcbiAgICAgIDExMyxcbiAgICAgIDgyLFxuICAgICAgMTQ0LFxuICAgICAgMTUxLFxuICAgICAgMjIxLFxuICAgICAgMTg1LFxuICAgICAgMTY2LFxuICAgICAgMTA5LFxuICAgICAgMzIsXG4gICAgICAyMTEsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEdUV1c1TjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjE5ODI4MDY6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1Mzc5MDAzMDI1Mjc6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZsOGVRQkVNcTI3N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZeHJxcGF3QnBOOEhpNGNDS29Ic0h1aFlRWERYMzFDZFJHNWtsVUtYaW40PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlA2UzNhSFlYV1IvTDhvVVllMU9iZkVWZm5NdkwvTUwwY0JyWHFIcWhRcCs3VllacExTTFdINGx0bEMyTzQ2Y1ZRNXJFcVRDb08wakJrQktqWWJ2dkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF3WEsxVmY1UFBBclNOT1VXSkV4TytMdWpLb3NhR0t3OXBwWHZKSEdrUGcvcDBuWTZYOFNwN2Z2ZTdPZGo5aE9WamJYYUF6T3B1Y09ML250SUE2aWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjE5ODI4MDY6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTAyNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTTJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJNMi5qc29uIjogIntcImtleURhdGFcIjpcImFpdHdleEZPL0hLRXdrL2dLbUtRVXN3aTNVRVJBeGh6VUZ5cUpIQU1MMlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDgwMDA2Nzk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0OTAyNjA2MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "kami神",
  packname: process.env.PACK_NAME || "kami神👑",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "kami👑(⁠눈⁠‸⁠눈⁠)",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
