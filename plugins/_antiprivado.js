
export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `*𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍𝙈𝙀 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙇𝘼𝙈𝙀𝙉𝙏𝘼𝘽𝙇𝙀𝙈𝙀𝙉𝙏𝙀 𝙏𝙀 𝙑𝙊𝙔 𝘼 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍*`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
