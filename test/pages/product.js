const Action = require("../action/action")


class Product{
get pr(){return $("//app-card[1]//div[1]//div[2]//button[1]")}
get link(){return $(".nav-link.btn.btn-primary")}
get checkout(){return $("button[class='btn btn-success']")}
get purchase(){return $("input[value='Purchase']")}
get country(){return $("#country")}
get successmessage(){return $(".alert.alert-success.alert-dismissible")}

async check(thecountry){
    await Action.isexist(this.pr)
    await Action.click(this.pr)
    await Action.isexist(this.link)
    await Action.click(this.link)
    await Action.isexist(this.checkout)
    await Action.click(this.checkout)
    await Action.isexist(this.country)
    await Action.value(this.country,thecountry)
    await Action.isexist(this.purchase)
    await Action.click(this.purchase)
    await Action.isexist(this.successmessage)
    

}
 txt(){
     browser.getAlertText(this.successmessage)
}





}
module.exports=new Product();