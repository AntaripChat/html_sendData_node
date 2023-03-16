
const add = (req,res)=>{
    const obj = {
        name:req.body.name,
        email:req.body.email,
    } 
    res.send(`${obj.name} your data seved`);
    console.log(obj.name);
    
};

const see = (req,res) =>{
    res.send('Hello')
}

module.exports = {
    add,
    see,
}