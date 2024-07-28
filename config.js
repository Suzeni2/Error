//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666,260971816956";
global.sudo = process.env.SUDO || "254739937062,254710772666,260971816956";
global.owner = process.env.OWNER_NUMBER || "254739937062,254710772666,260971816956";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVvZC93dFAwUXo3RktWd0FkMWU2bWtLaUwvb3VSU05XY0NvU1VFSWZIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidklFVEJscm1iSmFHbFpJaVhCT3dHWUIzOUp6VmNEU1dwYU5QMVkvZGlUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR3hIbDRRYU14YU1uK3dvaldNM2RyclB3M2Q4REdZaTJ3WElvZDZtNFdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvU09MbXR1OU1DMmkxZndzT0RPTUxGOVh6dE03STA1RTl6Z1ZTVW5LVFJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLM3FjOTAyMmc2MkxuOW1qZ1ZTcTFidzM5UktrSnBNeTR0VzN5aFZPbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY3YzU0ejBrdExpb1Fac2dHQUlLcVBXUEMxYnRBN0ljU0JuaWg0WTZNbnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUx2dU1UODIzcFFmajgya0ljQnRwdHE2MWt1VmtrMEdtRDRXTU9DMTFVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHlOWFZEK01iOVliNWw0WitLSWpGM28wNVIzN3Q0UHhQYy9vRHRqL1kwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRBSGVrdHlnTFlDU1llVUQrZWhaRmpGTGR6ZmJSTit0Z0RUN1ZUS2NBQy9iSHlDY0g1QnNKZUZnYStMTlVsaEFYK2ZiVkR3dmhyQkFkQ0FoU0U0eGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiWFdwbFlxQnk0aEtUa1JQelJkUG8yTFhlaWZBMVczWWUvYWtvZllSRThZTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ1lSVTVmcC1UOC1KcHVEQVhJWFlpdyIsInBob25lSWQiOiJiNTk1MWE3MS1mODZlLTRiZjUtODc1ZC0zM2M3NmM0Njg5ZjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExnYkU4MDZoRHZNRlRvekVsSlROUmxoM0FBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI5RFE3OHJ0VUpNOFZJZ3h6N3FCVnF4VXNrWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSUDFMQ1ZYTiIsIm1lIjp7ImlkIjoiMjYwOTcxODE2OTU2OjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1ha28ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXcGxza0VFT21qbUxVR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl3dGdBeWhFdjdsRWRBQUpsMUFOZE82SzQzeVNPM3pQM0RnSmNLU09pbXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlplVWZic1lUR1BjMFh2UFFXOVdjcytIcEQwanRIZmZWTjZlUlhoM2RmOEwrUmNpTzVIWVZjNzhwSURmZm5zQitKWktNOW5SNUxGSEs0MXlOMjVMMEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2WEZDSkJONE0vdzR2OVlmaGx3RSt0dWs4aTlkYzBzSk1XeDV6N2pDVm81cFB1MTBvZDh1Z2x1RkQwQWtxOW5NU0YvK2VrOEZJNlZUaXdENjRjbU5qQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDk3MTgxNjk1NjoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmY0xZQU1vUkwrNVJIUUFDWmRRRFhUdWl1TjhranQ4ejl3NENYQ2tqb3BzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTU5NjA2fQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" MAKO💀",
  author: process.env.STICKER_AUTHOR || "KING👑MAKO",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "MAKO💀",
  ownername: process.env.OWNER_NAME || "KING👑MAKO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
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


