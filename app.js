const conn = require('./setting/sql/mysql');
const ping = require('ping');
const Conn = conn.Conn;

setInterval(() => {
    idGet();
}, 60000)

async function idGet() {
    Conn.query('SELECT equip_ip, name FROM sos_equipment', (e, result) => {
        adressEquip(JSON.parse(JSON.stringify(result)))
    });
}

function adressEquip(query) {
    for (var i = 0; i < query.length; i++) {
        if ((query[i].equip_ip && query[i].name) != '') {
            let ip = query[i].equip_ip
            Ping(ip);
        }
    }
}

async function Ping(ip) {

    // WARNING: -i 2 argument may not work in other platform like windows
    let res = await ping.promise.probe(ip, {
        timeout: 10,
        extra: ['-i', '2'],
    });
    console.log(res);

}