let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
let time = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); }
const buttons = [{buttonId: 'id1', buttonText: {displayText: 'SCRIPT BOT INI ð¿'}, type: 1}, {buttonId: 'id2', buttonText: {displayText: 'GROUP BOT ð'}, type: 1}]
const buttonMessage = {contentText: 'Hallo Kak ð\n\nSaya Adalah Pemilik Bot ini\nMau ingin Tau Tentang Apa Yah Kak?', footerText: 'Created By .... Officiall â¤', buttons: buttons, headerType: 1}
// PEMBATAS YOO //
   await conn.sendContact(m.chat, '6281804832728', 'Ajurã', m)
   await time(1000)
   await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
