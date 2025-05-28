const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const version = require("@whiskeysockets/baileys/package.json").version
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const herta = packageJson.version

//—————「 BOT 」—————//
global.botname = 'Herta'
global.bottz = '6283198872425'
global.packname = ''
global.author = `Herta Bot`
global.prefa = ['','!','.',',','🐤','🗿']
global.versions = `${herta}`



//—————「 OWNER 」—————//
global.ownername = 'void'
global.owner = ['6283845717531']
global.ownermail = ['kiy6taka@gmail.com']
global.ptrakteer = 'https://trakteer.id/1void'


//—————「 MESSAGE 」—————//
global.mess = {
    ban: ctext('*[ System Access Failed ]* you are banned by the owner'),
    badm: ctext('*[ System Notice ]* please add bot *admin*'),
    regis: ctext(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: ctext('*[ System Notice ]* this only premium user'),
    limit: ctext('*Limit kamu habis*\n\ntiap jam 15:00 WIB limit akan di reset otomatis'),
    search: ctext('🔍 *Search for server. . .*'),
    done: ctext('Done Ga Bang?? Done...'),
    success: ctext('*[ Success ]*'),
    admin: ctext('*[ System Notice ]* for *admin!* not *npc*'),
    owner: ctext('*[ System Access Failed ]* Access Denied'),
    group: ctext('*[ System Notice ]* Use this in group chat!'),
    private: ctext('*[ System Notice ]* Use this in private chat!'),
    bot: ctext('*[ System Notice ]* Only Bot user'),
    wait: ctext('*[ Loading ]* Please Wait'),
    getdata: ctext('Scraping metadata . . .'),
    fail: ctext('Can\'t get metadata!'),
    error: ctext('*[ System Failed ]* Error, please contact the owner'),
    errorF: ctext('*[ System Failed ]* Sorry this feature is in error.'),
}

//—————「 LIMIT 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 15
}

global.hertabot = {
    free: 15,
    Koin: 100
}


//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})