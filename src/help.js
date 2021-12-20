const help = (prefix, copid, tanggal, jams, botname) => {
	return `「  *${botname}*  」

┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *⦿ Bot Prefix :* [all prefix]
│ *⦿ Owner :* Fongsi
│ *⦿ Today :* ${tanggal}
│ *⦿ Jam :* ${jams}
└┬────────────┈ ⳹
┌┤ 「  *Kasus Covid-19 Indonesia*  」
││➥ *Terinfeksi :* ${copid[0].kasus}
││➥ *Kematian :* ${copid[0].kematian}
││➥ *Sembuh :* ${copid[0].sembuh}
│└────────────┈ ⳹
│ 「 *🄱🄾🅃🄸🄽🄵🄾* 」
│◦➛ *${prefix}snk*
│◦➛ *${prefix}info*
│◦➛ *${prefix}donasi*
├─────────────┈ ⳹
│ 「 *🄶🄲🄼🄴🄽🅄* 」
│◦➛ *${prefix}setname* [text]
│◦➛ *${prefix}setdesc* [text]
│◦➛ *${prefix}setpp* [img]
│◦➛ *${prefix}promote* [tag]
│◦➛ *${prefix}demote* [tag]
│◦➛ *${prefix}leave*
│◦➛ *${prefix}tagall* 
│◦➛ *${prefix}hidetag*
│◦➛ *${prefix}welcome* [1/0]
│◦➛ *${prefix}listadmin*
│◦➛ *${prefix}antilink* [1/0]
│◦➛ *${prefix}add* [62×××]
│◦➛ *${prefix}kick* [tag mem]
│◦➛ *${prefix}group* buka/tutup
│◦➛ *${prefix}linkgc*
├─────────────┈ ⳹
│ 「 *🄼🄰🄺🄴🅁* 」
│◦➛ *${prefix}tomp3*
│◦➛ *${prefix}lirik*
│◦➛ *${prefix}tovn*
│◦➛ *${prefix}sticker*
│◦➛ *${prefix}swm* [author]|[pack]
│◦➛ *${prefix}tovideo*
│◦➛ *${prefix}toimg*
│◦➛ *${prefix}tts* [Text]
│◦➛ *${prefix}nulis* [Text]
├─────────────┈ ⳹
│ 「 *🄳🄾🅆🄻🄾🄰🄳🄴🅁* 」
│◦➛ *${prefix}ytmp3* [Url]
│◦➛ *${prefix}ytmp4* [Url]
│◦➛ *${prefix}dafontdown* [Url]
│◦➛ *${prefix}facebook* [Url]
│◦➛ *${prefix}instagram* [Url] [Options]
│◦➛ *${prefix}tiktok* [❎]
│◦➛ *${prefix}soundcloud* [Url]
│◦➛ *${prefix}pinterest* [❎]
│◦➛ *${prefix}play* [Query] [Options]
│◦➛ *${prefix}joox* [Query]
├─────────────┈ ⳹
│ 「 *🅂🄴🄰🅁🄲🄷🄸🄽🄶* 」
│◦➛ *${prefix}ytsearch* [Query]
│◦➛ *${prefix}ytdesc* [Query]
│◦➛ *${prefix}brainly* [Query]
│◦➛ *${prefix}herolist*
│◦➛ *${prefix}herodetail* [Nama hero]
│◦➛ *${prefix}dafontsearch* [Query]
│◦➛ *${prefix}google* [Query]
│◦➛ *${prefix}wiki* [Query]
│◦➛ *${prefix}quotes* [Query]
│◦➛ *${prefix}preview* teks|ukuran 
│◦➛ *${prefix}ocr*
├─────────────┈ ⳹
│ 「 *🄽🄴🅆 🄵🄸🅃🅄🅁* 」
│◦➛ *${prefix}clearall*
│◦➛ *${prefix}bc* [Text]
│◦➛ *${prefix}preview* [Text]
│◦➛ *${prefix}virtex* [1/10]
│◦➛ *${prefix}virus*
├─────────────┈ ⳹
│ 「 *🄰🄽🄸🄼🄴* 」
│◦➛ *${prefix}listanime*
│◦➛ *${prefix}kodenime*
│◦➛ *${prefix}kodenime2*
├─────────────┈ ⳹
││
││「 *Info / Command* 」
││Menu Bug? Next SC w baikin
││
││Tanda Kurung [ ] Hiraukan Contoh :
││ *${prefix}play fly away*
││
││Lapor Bug🐞: *${prefix}bugreport*
││Request? : *${prefix}request*
││owner? : *${prefix}owner*
││
││Note: Kirim Bug/request harus sesuai!
││atau akan di ban cmd.
│└────────────┈ ⳹
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`}

exports.help = help
