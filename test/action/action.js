class Action{



    async click(ele){
        await ele.click()
    }
    async clear(ele){
        await ele.clearValue()
    }
    async value(ele,setval){
        await ele.setValue(setval)
    }
    async isexist(ele){
    await ele.isExisting()
    }
    async selsect(ele,numberindex){
        await ele.selectByIndex(numberindex)
    }
    
    
    
    }
    module.exports=new Action()