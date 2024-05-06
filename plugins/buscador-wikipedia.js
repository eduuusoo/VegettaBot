
import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙇𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼 𝘾𝙇𝘼𝙑𝙀 𝙋𝘼𝙍𝘼 𝘽𝙐𝙎𝘾𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Luna*`
wikipedia(`${text}`).then(res => {
let info = `𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙀 𝙀𝙎𝙏𝙊 : ` + res.result.isi
  
    conn.reply(m.chat, `${info} `, m, {
     contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
      title: '𝙋𝙊𝙇𝙑𝙊𝙍𝘼 𝘽𝙊𝙏 | 𝙒𝙞𝙠𝙞𝙥𝙚𝙙𝙞𝙖',
       body: '𝗦𝘂𝗽𝗲𝗿 ❤️',         
        previewType: 0, thumbnail: imagen2,
         sourceUrl: welgata}}})
  
}).catch(() => { m.reply(`${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙇𝙊 𝙌𝙐𝙀 𝘽𝙐𝙎𝘾𝘼. 𝙋𝙍𝙊𝘾𝙐𝙍𝙀 𝙐𝙎𝘼𝙍 𝙐𝙉𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼 𝘾𝙇𝘼𝙑𝙀`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i 
handler.register = true
export default handler
