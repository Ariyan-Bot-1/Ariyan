const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
    name: "info",
    version: "1.2.6",
    hasPermssion: 0,
    credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
    description: "Bot information command",
    commandCategory: "For users",
    hide: true,
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, Users, Threads }) {
    const { threadID } = event;

    // Root ফোল্ডার
    const imagePath = path.join(__dirname, "..", "rahat1.png");

    if (!fs.existsSync(imagePath)) {
        return api.sendMessage("❌ Image not found!", threadID);
    }

    // Bot uptime
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const totalUsers = global.data.allUserID.length;
    const totalThreads = global.data.allThreadID.length;
    const { commands } = global.client;

    const msg = `┏━━━━━━━━━━━━━━━┓
┃   🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟    
┣━━━━━━━━━━━━━━━┫
┃👤 𝐍𝐚𝐦𝐞      :🔰𝗥𝗮𝗵𝗮𝘁🔰
┃🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥e
┃🎂 𝐀𝐠𝐞       :16
┃🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 :বয়ড়া ইসরাইল 
┃𝐀𝐝𝐝𝐫𝐞𝐬𝐬:জামালপুর,বাংলাদেশ 
┣━━━━━━━━━━━━━━━┫
┃𝐓𝐢𝐤𝐭𝐨𝐤 : @where.is.she15
┃📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 :আছে🥴🤪
┃🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : বায়ো-তে আছে
┣━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━┛
`;

    api.sendMessage({
        body: msg,
        attachment: fs.createReadStream(imagePath)
    }, threadID);
};
