
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `⛔ 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦.\n\n𝗠𝗼𝘁𝗶𝘃𝗼:\n𝖲𝗉𝖺𝗆, 𝗅𝗂𝗇𝗄𝗌 𝗒 𝗅𝗅𝖺𝗆𝖺𝖽𝖺𝗌 𝗁𝖺𝖼𝗂𝖺 𝖤𝗅𝗂𝗍𝖾𝖡𝗈𝗍𝖦𝗅𝗈𝖻𝖺𝗅.\n\n𝗧𝗼𝘁𝗮𝗹 :\n ${data.length}\n\n╭━━━ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 👤\n`
		for (let i of data) {
			txt += `┃🚫 @${i.split("@")[0]}\n`
		}
		txt += "╰━━━━━━━⬣\n\n𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗻𝗼 𝗺𝗲  𝗹𝗹𝗮𝗺𝗲, 𝗻𝗼 𝗺𝗲 𝗲𝘀𝗰𝗿𝗶𝗯𝗮 𝗽𝗮𝗿𝗮 𝗲𝘃𝗶𝘁𝗮𝗿 𝘀𝗲𝗿 𝗕𝗹𝗼𝗾𝘂𝗲𝗮𝗱𝗼, 𝗚𝗿𝗮𝗰𝗶𝗮𝘀."
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'No hay números bloqueados'
	})
}

handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listabloqueados'] 

export default handler
