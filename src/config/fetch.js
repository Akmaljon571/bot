import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const pool = new pg.Pool({
    connectionString: process.env.DATABASE
})

export const fetchData = async(SQL, ...params) => {
    const client = await pool.connect()
    return new Promise((resolve, reject) => {
        client.query(SQL, params, (err, data) => {
            if (err) {
               return reject(err)
            }
            resolve(data?.rows)
        })
    })
}