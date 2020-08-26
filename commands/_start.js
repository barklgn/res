*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [
  { title: "አዎን መዝግበኝ", command: "/mzg"}], 
"🙋‍♂ጤና ይስጥልኝ "+ user.first_name+" \n•በኮንሰርት 2 ለመመዝገብ ዝግጁ ነዎት መልስዎ አዎን ከሆነ ከታች *መዝግበኝ* የሚለውን ይጫኑት፡፡")
