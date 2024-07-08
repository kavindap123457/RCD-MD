//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94781226144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pYOFEvM1J0YzdEL1RHSkZUUVRSY0VWbTMxRThHNWZCUW8vOGJkZ2dsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicktYdVo3TDZ5K1FFRjJuZVh2R2lRTEdBKzNqRmxyRlVISjF4MWUvVWhBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TGVCUk1VZTg0UXNabncrWktWZjlSKys2SXJha0FFMFRiUHVBR2ZSQTJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6dHVBNUR0YnZWME05ckoxWjFPN3FsbG5lRklXNk9xVWpxZDRyR0hieXlVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBERDNrYWEwejlGQkFkY2ZmWi9laHU5UXVhdUhsQjVRa2hxOVBnN0ltWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9XMGxYSXJ0aGppVnN4OGhLLzFMb1hPclBLUDZONGFsQ1BzSGp1N0szMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tyZ0RIYUh6MjE0NDJpMy9UVStkZHpYTlBmS0ZMWkpQdndINzJEWFhFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUYvemtXbE92QnFBcXNxWDVzOWdhQTB2WmRscWhLcWwxUmJibXliS3ozWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktqV2Jpc0xIRHl3RUdVa05WQjBib24wOGsyK24wQU1lazJyWHBzUU02aHJLNUIvOTg3aFR6TThBcUxkcStCV3hydmxSckp0ZWQ0V2l1ZkMwQkpQL0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJSNXZmbVN2SEpBYTRuT3lpUGU3b0dDNkRBR0UwYkJBTnRpU2FaaG95UC9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpb1EtSW0wdFRXbUx1aHhFOUMzam13IiwicGhvbmVJZCI6IjllYjM2YTQyLTUxYmYtNDMwMC05ZjRiLTE4NTI5ZjdlY2RhYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTBYSUhBNHNqTzhMSXFBczcwVnAwTzJwd0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjE1bkkwMnV6c1k2M1l0VTJDTjkrZHY3blgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdERThFOE1TIiwibWUiOnsiaWQiOiI5NDc4MTIyNjE0NDo5NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCS8J2Qk/CdkIDwnZCT8J2QlPCdkJIg8J2QivCdkIjwnZCN8J2QhiDwnZCV8J2QiPCdkIzwnZCUICAg8J2QkvCdkJPwnZCA8J2QkfCdkJMgPPCdkJbwnZCA8J2QiPCdkJM+ICAgICAgICAgIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICDwnZCS8J2Qk/CdkIDwnZCT8J2QlPCdkJIg8J2QivCdkIjwnZCN8J2QhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5yeWZFR0VMbjJyN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZStjeHpEc0lHQjBXR1lTWEZZcFNaMkRsVXhraCs0TmdrRnZTa05kdTIxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM3N4ZExhU3F0WERWODhmREo0SmZwQzJ5M2JEQnNIdHBmNUVzU00zcmo2dm1hZG9GMTEza0JVUWwvUlhvek5oZDRjWU1Bbk5ML0ZQOEdCUDlBNjI4RFE9PSIsImRldmljZVNpZ25hdHVyZSI6Inp4UmtaU25BWS9rc3cvMmgwVnNCSllybkFzYVB4aUhSWVFTYm1TSWlUdDNNT1AwZVZjM3RwUUQvTWhkQlVRdk9CL0pUekIzdURkdUg1UWZTUFAwaUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODEyMjYxNDQ6OTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHZuTWN3N0NCZ2RGaG1FbHhXS1VtZGc1Vk1aSWZ1RFlKQmIwcERYYnR0USJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQ0OTg2MX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
