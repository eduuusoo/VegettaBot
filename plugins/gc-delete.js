let handler = async (m, { conn, usedPrefix, command }) => {	
if (!m.quoted) throw `[❗] 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍`
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
} catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}
handler.help = ['del', 'delete']
handler.tags = ['group']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
