/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🔥እባክዎትን መረጃዎችን በትክክል ይሙሉ፡፡

👇 የእርስዎ ስም ያስገቡ
  ANSWER
  keyboard: 
  aliases: /change
CMD*/

User.setProperty("name", data.message, "string"); 
Bot.runCommand('/set_last_name');
