import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `[❗] 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 \n\n*𝘌𝘫𝘦𝘮𝘱𝘭𝘰:*\n ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "𝗣𝗼𝗹𝘃𝗼𝗿𝗮𝟲𝟵𝟲𝟵";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/sfw/slap`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `${name2} le dio una bofetada a ${name}`, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾*`;
  };
};
handler.help = ["slap"];
handler.tags = ["General"];
handler.command = /^(cachetada|bofetada)$/i;
export default handler;
handler.register = true
