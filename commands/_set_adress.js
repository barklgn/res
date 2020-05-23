/*CMD
  command: /set_adress
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
✅መወዳደር የፈለጉበትን መድረክ ይጻፉ፡፡
❖መዝሙር
❖ጥያቄና መልስ ውድድር (መዝናኛ)

  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty("adress", data.message, "text");
Bot.runCommand('/profile');
Bot.runCommand('/confirm_contact');
