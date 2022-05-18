const Page=require("./page")
const Action=require("../action/action")
class Register extends Page{
get name(){return $("div[class='form-group'] input[name='name']")}
get email(){return $("input[name='email']")}
get pass(){return $("#exampleInputPassword1")}
get select(){return $("#exampleFormControlSelect1")}
get job(){return $("#inlineRadio1")}
get btn(){return $("input[value='Submit']")}
get msg(){return $(".alert.alert-success.alert-dismissible")}
get shop(){return $("//a[normalize-space()='Shop']")}


async register(username,theemail,thepass,numberofselect){
await Action.isexist(this.name)
await Action.value(this.name,username)
await Action.isexist(this.email)
await Action.value(this.email,theemail)
await Action.isexist(this.pass)
await Action.value(this.pass,thepass)
await Action.selsect(this.select,numberofselect)

await Action.click(this.job)
await Action.click(this.btn)
await Action.isexist(this.msg)
await Action.click(this.shop)

}






}module.exports=new Register()