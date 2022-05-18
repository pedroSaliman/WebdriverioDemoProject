const Register=require("../pages/register");
const data= require("../data/data");
const Product=require("../pages/product")
describe("testsuite",()=>{

before (()=>{
     Register.open();

})
//////////////////////////////////////////////////

    it("test register",async()=>{
        await Register.register(data.username,data.email,data.pass,data.number);
    })



//////////////////////////////////////////////////
    it('test product', async() => {
        await Product.check(data.country);
        
    })
})