const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "intro",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "intro",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━┓
┃   🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟    
┣━━━━━━━━━━━━━━━┫
┃👤 𝗡𝗔𝗠𝗘      : 一𝗔ɽ𝗶́y𝗮̊ɳ ꪹ٭ぎ.
┃🚹 𝗚𝗘𝗡𝗗𝗘𝗥    : 𝗠𝗔𝗟𝗘
┃🎂 𝗔𝗚𝗘       : 19+
┃🕌 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 : 𝗜𝗦𝗟𝗔𝗠
┃🏫 𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡 : 𝗖𝘁𝗴 𝗶𝗱𝗶𝘆𝗮𝗹 𝘀𝗰𝗹 𝗮𝗻𝗱 𝗰𝗹𝗴
┃🏡 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 : 𝗖𝗲𝗽𝘇 , 𝗖𝗵𝗶𝘁𝘁𝗮𝗴𝗼𝗻𝗴
┣━━━━━━━━━━━━━━━┫
┃𝗧𝗜𝗞𝗧𝗢𝗞 : 𝗧𝗼𝗿𝗲 𝗸𝗻 𝗯𝗼𝗹𝗯𝗼 ??
┃📢 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 : 𝗔𝗺𝗶 𝗻𝗶𝘀𝗽𝗮𝗽😄
┃🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : 一aɽïyaɳ ꪹ٭ぎ.
┣━━━━━━━━━━━━━━━┫
┃ 🕒 𝗨𝗣𝗗𝗔𝗧𝗘𝗗 𝗧𝗜𝗠𝗘: ${time}
┗━━━━━━━━━━━━━━━┛ `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/4z7sOfl.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
