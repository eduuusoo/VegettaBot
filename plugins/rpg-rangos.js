import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid3.mp4'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
╭━━━〔 𝙍𝘼𝙉𝙂𝙊𝙎 | 𝙍𝙊𝙇 〕━━━⬣
𝙉𝙊𝙈𝘽𝙍𝙀
${username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙐  𝙍𝘼𝙉𝙂𝙊 𝘼𝘾𝙏𝙐𝘼𝙇
${role}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *∞ 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 I* 💎🏁
👑 *∞ 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 II* 💎🏁
👑 *∞ 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 III* 💎🏁
👑 *∞ 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 IV* 💎🏁
👑 *∞ 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 V* 💎🏁
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 I* 🏁
👑 *𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 II* 🏁
👑 *𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 III* 🏁
👑 *𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 IV* 🏁
👑 *𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 V* 🏁
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙏𝙊𝙋 𝘼𝙎𝙏𝙍𝘼𝙇 I* ⚜️🔱
*𝙏𝙊𝙋 𝘼𝙎𝙏𝙍𝘼𝙇 II* ⚜️🔱
*𝙏𝙊𝙋 𝘼𝙎𝙏𝙍𝘼𝙇 III* ⚜️🔱
*𝙏𝙊𝙋 𝘼𝙎𝙏𝙍𝘼𝙇 IV* ⚜️🔱
*𝙏𝙊𝙋 𝘼𝙎𝙏𝙍𝘼𝙇 V* ⚜️🔱
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙀𝙎𝙏𝙀𝙇𝘼𝙍 I* ☄️
*𝙀𝙎𝙏𝙀𝙇𝘼𝙍 II* ☄️
*𝙀𝙎𝙏𝙀𝙇𝘼𝙍 III* ☄️
*𝙀𝙎𝙏𝙀𝙇𝘼𝙍 IV* ☄️
*𝙀𝙎𝙏𝙀𝙇𝘼𝙍 V* ☄️
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙇𝙀𝙔𝙀𝙉𝘿𝘼 I* 🏆
*𝙇𝙀𝙔𝙀𝙉𝘿𝘼 II* 🏆
*𝙇𝙀𝙔𝙀𝙉𝘿𝘼 III* 🏆
*𝙇𝙀𝙔𝙀𝙉𝘿𝘼 IV* 🏆
*𝙇𝙀𝙔𝙀𝙉𝘿𝘼 V* 🏆
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙇𝙀𝙂𝙀𝙉𝘿𝘼𝙍𝙄𝙊(𝘼) I* 🛡️
*𝙇𝙀𝙂𝙀𝙉𝘿𝘼𝙍𝙄𝙊(𝘼) II* 🛡️
*𝙇𝙀𝙂𝙀𝙉𝘿𝘼𝙍𝙄𝙊(𝘼) III* 🛡️
*𝙇𝙀𝙂𝙀𝙉𝘿𝘼𝙍𝙄𝙊(𝘼) IV* 🛡️
*𝙇𝙀𝙂𝙀𝙉𝘿𝘼𝙍𝙄𝙊(𝘼) V* 🛡️
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙎𝙐𝙋𝙀𝙍 𝙋𝙍𝙊 I* 🎩
*𝙎𝙐𝙋𝙀𝙍 𝙋𝙍𝙊 II* 🎩
*𝙎𝙐𝙋𝙀𝙍 𝙋𝙍𝙊 III* 🎩
*𝙎𝙐𝙋𝙀𝙍 𝙋𝙍𝙊 IV* 🎩
*𝙎𝙐𝙋𝙀𝙍 𝙋𝙍𝙊 V* 🎩
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙋𝙍𝙊 𝙀𝙉 𝙑𝙀𝙂𝙀𝙏𝙏𝘼𝘽𝙊𝙏 I* 🔰
*𝙋𝙍𝙊 𝙀𝙉 𝙑𝙀𝙂𝙀𝙏𝙏𝘼𝘽𝙊𝙏 II* 🔰
*𝙋𝙍𝙊 𝙀𝙉 𝙑𝙀𝙂𝙀𝙏𝙏𝘼𝘽𝙊𝙏 III* 🔰
*𝙋𝙍𝙊 𝙀𝙉 𝙑𝙀𝙂𝙀𝙏𝙏𝘼𝘽𝙊𝙏 IV* 🔰
*𝙋𝙍𝙊 𝙀𝙉 𝙑𝙀𝙂𝙀𝙏𝙏𝘼𝘽𝙊𝙏 V* 🔰
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 I* 💎
*𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 II* 💎
*𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 III* 💎
*𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 IV* 💎
*𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀 V* 💎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙊𝙍𝙊 I* 🏅
*𝙊𝙍𝙊 II* 🏅
*𝙊𝙍𝙊 III* 🏅
*𝙊𝙍𝙊 IV* 🏅
*𝙊𝙍𝙊 V* 🏅
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙋𝙇𝘼𝙏𝘼 I* 🔮
*𝙋𝙇𝘼𝙏𝘼 II* 🔮
*𝙋𝙇𝘼𝙏𝘼 III* 🔮
*𝙋𝙇𝘼𝙏𝘼 IV* 🔮
*𝙋𝙇𝘼𝙏𝘼 V* 🔮
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙄𝙍𝙊𝙉 I* 🦾
*𝙄𝙍𝙊𝙉 II* 🦾
*𝙄𝙍𝙊𝙉 III* 🦾
*𝙄𝙍𝙊𝙉 IV* 🦾
*𝙄𝙍𝙊𝙉 V* 🦾
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙈𝘼𝙀𝙎𝙏𝙍𝙊(𝘼) I* ⚒️
*𝙈𝘼𝙀𝙎𝙏𝙍𝙊(𝘼) II* ⚒️
*𝙈𝘼𝙀𝙎𝙏𝙍𝙊(𝘼) III* ⚒️
*𝙈𝘼𝙀𝙎𝙏𝙍𝙊(𝘼) IV* ⚒️
*𝙈𝘼𝙀𝙎𝙏𝙍𝙊(𝘼) V* ⚒️
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙀𝙓𝙋𝙇𝙊𝙍𝘼𝘿𝙊𝙍(𝘼) I* 🪓
*𝙀𝙓𝙋𝙇𝙊𝙍𝘼𝘿𝙊𝙍(𝘼) II* 🪓
*𝙀𝙓𝙋𝙇𝙊𝙍𝘼𝘿𝙊𝙍(𝘼) III* 🪓
*𝙀𝙓𝙋𝙇𝙊𝙍𝘼𝘿𝙊𝙍(𝘼) IV* 🪓
*𝙀𝙓𝙋𝙇𝙊𝙍𝘼𝘿𝙊𝙍(𝘼) V* 🪓
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝘼𝙋𝙍𝙀𝙉𝘿𝙄𝙎 I* 🪚
*𝘼𝙋𝙍𝙀𝙉𝘿𝙄𝙎 II* 🪚
*𝘼𝙋𝙍𝙀𝙉𝘿𝙄𝙎 III* 🪚
*𝘼𝙋𝙍𝙀𝙉𝘿𝙄𝙎 IV* 🪚
*𝘼𝙋𝙍𝙀𝙉𝘿𝙄𝙎 V* 🪚
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙉𝙊𝙑𝘼𝙏𝙊(𝘼) I* 🪤
*𝙉𝙊𝙑𝘼𝙏𝙊(𝘼) II* 🪤
*𝙉𝙊𝙑𝘼𝙏𝙊(𝘼) III* 🪤
*𝙉𝙊𝙑𝘼𝙏𝙊(𝘼) IV* 🪤
*𝙉𝙊𝙑𝘼𝙏𝙊(𝘼) V* 🪤
╰━━━━━━━━━━━━━━━━━━━⬣`.trim()
await conn.sendFile(m.chat, pp, 'gata.mp4', menu)
//conn.sendHydrated(m.chat, menu, `𝙍𝘼𝙉𝙂𝙊𝙎 | ${wm}`, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙑𝙚𝙜𝙚𝙩𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `${usedPrefix}top`],['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu']], m,)
}
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(zxy)$/i
handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
