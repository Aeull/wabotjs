// MINIMAL SERTAKAN SUMBER KALAU MAU RECODE :)
// MADE BY AMIRUL DEV
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import yargs from 'yargs';

function gs(list) {
    return list[Math.floor(Math.random() * list.length)]
}

//-- Panggil Setting
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.set = {
    opts: opts,
    prefix: new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']'),
    name: "MyWA BOT",
    version: "1.0.1",
    dev: "Arull",
    desc: "Made by WhatsApp",
    browser: "firefox",
    wm: "MyWA BOT By Arull",
    pack: `ArullBotz`,
    auth: ``,
    owner: [
        ['6285822347348', 'Arull', true, 'Creator Bot', 'apa', 'https://chat.whatsapp.com/ItwCvXL02hg11U5qNaLSBe', 'MyWA BOT Developer'],
        ['6285822347348', 'Arull', true, 'CS', 'haha', 'https://chat.whatsapp.com/ItwCvXL02hg11U5qNaLSBe', 'MyWA BOT Developer']
    ],
    mods: [],
    prems: [],
    timestamp: {
        start: new Date
    },
    //-- target log
    pc: `687852104@s.whatsapp.net`,
    gc: "120363043479716462@g.us",
    //-- setting waktu cronjob
    clear: 1200000,

    //-- setting api
    xteam: 'https://api.xteam.xyz/',
    axteam: 'd90a9e986e18778b'


}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Config telah diupdate!!"))
    import(`${file}?update=${Date.now()}`)
})
