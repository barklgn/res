/*CMD
  command: /set_phone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📱ለሽልማት መላክያ የሚሆን ስልክ ቁጥርዎን ያስገቡ, <name>?
  keyboard: 
  aliases: 
CMD*/

User.setProperty("phone", data.message, "string");
Bot.runCommand('/set_adress');
