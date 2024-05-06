
import FormData from 'form-data'
import Jimp from 'jimp'
  
var handler = async (m, { conn, usedPrefix, command }) => {

conn.hdr = conn.hdr ? conn.hdr : {}
if (m.sender in conn.hdr)
throw '*⚠️ 𝙏𝙊𝘿𝘼𝙑Í𝘼 𝙃𝘼𝙔 𝙐𝙉 𝙋𝙍𝙊𝘾𝙀𝙎𝙊 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀 𝙃𝘼 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝘿𝙊. 𝙀𝙎𝙋𝙀𝙍𝙀 𝘼 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀*'
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!mime)

throw `*⚠️ 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑬 𝑨 𝑼𝑵𝑨 𝑭𝑶𝑻𝑶*`
if (!/image\/(jpe?g|png|mp4)/.test(mime))

throw `⚠️ *𝙈í𝙢𝙞𝙘𝙖 ${mime} 𝙉𝙤 𝙨𝙤𝙥𝙤𝙧𝙩𝙖𝙙𝙖*` 
else conn.hdr[m.sender] = true

m.reply('*⚙️ 𝙋 𝙍 𝙊 𝘾 𝙀 𝙎 𝘼 𝙉 𝘿 𝙊*')
let img = await q.download?.()

let error
try {
const This = await processing(img, "enlace")
conn.sendFile(m.chat, This, '', '💥 𝙏𝙊𝙈𝘼 𝙏𝙐 𝙁𝙊𝙏𝙊', m)
} catch (er) {
error = true
} finally {
if (error) {
m.reply('*⚠️ 𝑷𝑹𝑶𝑪𝑬𝑺𝑶 𝑭𝑨𝑳𝑳𝑰𝑫𝑶 ⚠️*')
}
delete conn.hdr[m.sender]
}}
  
handler.help = ['hd']
handler.tags = ['ai']
handler.command = /^(hd)$/i

handler.register = false
handler.limit = false
  
export default handler
  
async function processing(urlPath, method) {
return new Promise(async (resolve, reject) => {
let Methods = ['enhance', 'recolor', 'dehaze']
Methods.includes(method) ? (method = method) : (method = Methods[0])
let buffer,
Form = new FormData(),
scheme = 'https' + '://' + 'inferenceengine' + '.vyro' + '.ai/' + method
Form.append('model_version', 1, {
'Content-Transfer-Encoding': 'binary',
contentType: 'multipart/form-data; charset=uttf-8',
}) 
Form.append('image', Buffer.from(urlPath), {
filename: 'enhance_image_body.jpg',
contentType: 'image/jpeg',
})
Form.submit(
{
url: scheme,
host: 'inferenceengine' + '.vyro' + '.ai',
path: '/' + method,
protocol: 'https:',
headers: {
'User-Agent': 'okhttp/4.9.3',
Connection: 'Keep-Alive',
'Accept-Encoding': 'gzip',
},
}, 
function (err, res) {
if (err) reject()
let data = []
res
.on('data', function (chunk, resp) {
data.push(chunk)
})
.on('end', () => {
resolve(Buffer.concat(data))
})
res.on('error', (e) => {
reject()
})})})}
