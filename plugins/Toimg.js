
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒖𝒏 𝒗𝒊́𝒅𝒆𝒐 𝒐 𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒖𝒏 𝒂𝒖𝒅𝒊𝒐 𝑴𝑷3 *${usedPrefix + command}*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg', 'img', 'jpg']
handler.register = true
export default handler
