let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Y EL TEXTO?`
  try {
    await conn.updateProfileName(text)
    m.reply('LISTO!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname|cambianombre)$/i

handler.owner = true

export default handler
