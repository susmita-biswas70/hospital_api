const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/hospital_api');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
