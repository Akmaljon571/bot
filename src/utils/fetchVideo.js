import { fetchData } from "../config/fetch.js"

export const Video = async(msg) => {
    const videoType = msg.message.text.split('').slice(0, 26).join('')

    if (videoType === "https://www.instagram.com/") {
        msg.reply('⌛️')
        const [count] = await fetchData('select * from sanoq')
        const j = count?.newdata < (new Date().getMonth() + 1)
        const cloud = await fetchData('select * from cloud_fetch')
        const sana = Math.floor(count.count / 100)
      
        if (!j) {
            const options = {
                method: cloud[sana]?.method,
                headers: {
                  'X-RapidAPI-Key': cloud[sana]?.headers1,
                  'X-RapidAPI-Host': cloud[sana]?.headers2
                }
            };
            const url = cloud[sana]?.url + "?url=" + msg.message.text;

            fetch(url, options)
            .then(re => re.json())
            .then(async (data) => {
                if (data.video) {
                    msg.replyWithVideo(data.video, data?.caption)
                } else {
                    msg.replyWithPhoto(data[0], data?.caption)
                }
                await fetchData('UPDATE sanoq SET count = $1 WHERE id = $2', Number(count?.count) + 1, count.id)
            }).catch((error) => {
                console.error(error);
            });
        } else {
            await fetchData('UPDATE sanoq SET count = $1, newdata = $2 WHERE id = $3', 0, new Date().getMonth() + 2, count.id)
            const [count2] = await fetchData('select * from sanoq')
            const sanoq = Math.floor(count2.count / 10)
            const options = {
                method: cloud[sanoq]?.method,
                headers: {
                  'X-RapidAPI-Key': cloud[sanoq]?.headers1,
                  'X-RapidAPI-Host': cloud[sanoq]?.headers2
                }
            };
            const url = cloud[sanoq]?.url + "?url=" + msg.message.text;

            fetch(url, options)
            .then(re => re.json())
            .then(async (data) => {
                if (data.video) {
                    msg.replyWithVideo(data.video, data?.caption)
                } else {
                    msg.replyWithPhoto(data[0], data?.caption)
                }
                await fetchData('UPDATE sanoq SET count = $1 WHERE id = $2', Number(count2?.count) + 1, count2.id)
            }).catch((error) => {
                console.error(error);
            });
        }
    } else {
        msg.reply('Togri link jonatin')
    }
}

export const botHolati = async(msg) => {
    const [sanoq] = await fetchData('select * from sanoq')
    msg.reply(`count: ${sanoq.count} \ndata: ${sanoq.newdata}`)
}
