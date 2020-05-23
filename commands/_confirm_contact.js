/*CMD
  command: /confirm_contact
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
<name>, *ሁሉንም በትክክል አስገብተዋል?*

👍 *አዎን* -  /yes

❌ *አይ* - /no 
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let ad=User.getProperty("adress")
let ph=User.getProperty("phone")
let ls=User.getProperty("last_name")
let na=User.getProperty("name")
let tex = "👤Name: "+na+" : "+ls+"\n ❇️address: "+ad+"\n 📞phone: "+ph
if(data.message=="/yes"){
   Bot.sendMessage("📡እናመሰግናለን መረጃዎ ተመዝግቧል ")
 Api.sendMessage({ chat_id: 350936430, text: tex , parse_mode: "html" })
}else{
  Bot.sendMessage("Change data /change");
}
