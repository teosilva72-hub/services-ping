const conn = require('./setting/sql/mysql')
const Conn = conn.Conn;
setInterval(() => {
    idGet()
}, 20000)

function idGet() {
    let x = []
    Conn.query('SELECT equip_ip, name FROM sos_equipment', (e, result) => {
        adressEquip(JSON.parse(JSON.stringify(result)))
    });
}

function adressEquip(query) {
    for (var i = 0; i < query.length; i++) {
        if ((query[i].equip_ip && query[i].name) != '') {
            console.log(query[i].equip_ip)
        }
    }
}

function ping() {

}