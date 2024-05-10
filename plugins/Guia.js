let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/37b64b1ac819f945cd112.jpg' 
let texto = `𝙄𝙈𝙋𝙊𝙍𝙏𝘼𝙉𝙏𝙀:

𝙀𝙇 𝘽𝙊𝙏 𝙏𝙄𝙀𝙉𝙀 +100 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎

⚠ 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊: ⚠
*1* 𝙉𝙊 𝙎𝙋𝘼𝙈

*2* 𝙉𝙊 𝙇𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝘼𝙉 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊 𝙊 𝙎𝙄𝙉𝙊 𝙌𝙐𝙀𝘿𝘼𝙍𝘼 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊 𝘼𝙐𝙏𝙊𝙈𝘼𝙏𝙄𝘾𝘼𝙈𝙀𝙉𝙏𝙀

*3* 𝙀𝙉 𝘾𝘼𝙎𝙊 𝘿𝙀 𝙌𝙐𝙀 𝙉𝙊 𝙑𝘼𝙇𝙀 𝘼𝙇𝙂𝙐𝙉 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *.𝙧𝙚𝙥𝙤𝙧𝙩𝙚* 𝘾𝙊𝙉 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀

_*EN CASO CONTACTE IMPORTANTE AL CREADOR*_

wa.me/593992402778
`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['guia'] 
handler.register = true
export default handler
