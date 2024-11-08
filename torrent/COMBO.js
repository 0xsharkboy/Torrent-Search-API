let torrents = require("./torrents")()

async function combo(query, page) {
    let comboTorrent = []
    let functions = []

    for (let torrent in torrents) {
        functions.push(torrents[torrent](query, page))
    }

    await Promise.all(functions).then((key) => {
        for (let provider of key) {
            if (provider !== null && provider.length !== 0) {
                comboTorrent.push(...provider)
            }
        }
    })
    return comboTorrent;
}
module.exports = combo;