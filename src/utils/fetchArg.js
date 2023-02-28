import { fetchData } from "../config/fetch.js";

export const userAdd = async(msg) => {
    const id = await fetchData('select * from users where charid = $1', msg.id)

    if (!id[0]) {
        fetchData('INSERT INTO users(charid, first_name, username) values($1, $2, $3)', msg.id, msg.first_name, msg.username)
        return 'ok'
    } else {
        return 'ok'
    }
}