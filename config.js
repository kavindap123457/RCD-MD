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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BDamZ3eCtLMlBoTncvWFVCVldzaGw1MVB4Z0llYmF2SFZQd3h2emgwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1VTdmhqY2RMRllLYWVFSjJPMDlSY2VYVzQwbVpzd2IrSDhFclBkWm1HRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSkpzejhvRXdzb2wwcFZ4MGYyWmNqUXcrM3k5Zy9ldERwRGZzMk5hL1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ3ptMWFxdkFTZVlNZW4vMG03eTRIU0JtM3JjWUkvdm0xcTRabVVrZUQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQdlZyR1owcTdFRkExUm1ZOUk1N2dkcWw0ZnRRckdFTWFhSWZ1T2dBV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxaazV0NWZGVHArdG1YMjVsdFgyeUZTNDdHR1E3VUFGbFkySkNNMjUwaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1A2enQ2WWdiYm9qU3hUUGllYVdlY0dHQ3JmYmovZXZMRjNnV042eUNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnd4bjBOcVY1dHQxczBUakJ0clZrYnpRL3F6azNvd08wUmIvWVRnZm5BVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwzZno5dlZ1U3ZpaEp2SVpWK21OOVRkKy9EdG0yV2lIVDlObjloR1MwbFpXTU16VmhqRlpKdDYzaUZaRGRob2VUVG96MWp3UXREU0Q0MTZ2UHRoNURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJ0Yjh2OXFmeFRKYS9Jb2w4SnJqT05CWCtmd3BqV3ZRUmRTRDVYcXg4cTlJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI3NDVEM0IyQzVCM0ZBQUYxMDI2QTRDMjUwNTVCMDg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA0ODAxNzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNFeWpBUnNBU3BHUGVuOEhVbXJmSmciLCJwaG9uZUlkIjoiZDAzNmQ1NTItN2I5NC00MGZhLWI2YmEtODE4YmUzZWVjYmYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU0Z0FxemRzL0ppU1dvWjc0Z3dYSmFsVGFZaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGMk5TakFrQjZLTGJNZWdWN3U5SWZQalEzZ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUxGU1hDTjkiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0Ojk3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIPCdkJXwnZCI8J2QjPCdkJQgICDwnZCS8J2Qk/CdkIDwnZCR8J2QkyA88J2QlvCdkIDwnZCI8J2Qkz4gICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgIPCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnJ5ZkVHRUtIanNiUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlK2N4ekRzSUdCMFdHWVNYRllwU1oyRGxVeGtoKzROZ2tGdlNrTmR1MjFBPSIsImFjY291bnRTaWduYXR1cmUiOiJtaDNySDdTZEN6alIvSmVOVDgwL09ZbDkzM2g4aXN6a05ueFZ6SHlIK3JGMG9jQWN5V1kxcCtDczRVTlFudTFkNHlrSy9SZStTMElYOWs3YmNEZDVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRHVFSVlLRFd5QS85eHlUT2x2ejJrMTV6Z3haR3JIUlpaVVl5bTVBcWduSGRYOWd5TTlMTzhUVlRTc1pHQjE0dzBRcjRwNkpNRmFMS0RmRlNPSUZTQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MTIyNjE0NDo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdm5NY3c3Q0JnZEZobUVseFdLVW1kZzVWTVpJZnVEWUpCYjBwRFhidHRRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDgwMTc1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgvMyJ9"
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
