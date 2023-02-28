import { keyboard } from "./keyboard.js"

export const replyOptions = {
    reply_markup: {
      keyboard,
      resize_keyboard: true,
      one_time_keyboard: true
    }
};