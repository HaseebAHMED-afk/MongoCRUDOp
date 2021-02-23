var mongoose = require('mongoose');


(
    async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/demoDB' ,{useNewUrlParser:true , useUnifiedTopology:true})
            console.log('Mongoose Conntection Succesful');
    
            const personSchema= new mongoose.Schema({
                name: {type : String , index:true},
                age : Number
            })
    
    
            const Student = mongoose.model('Student' , personSchema);
    
           
    
           const result = await Student.updateOne({name:'Hammad'} , {age:45});

           console.log('Update: ',result);
       
        } catch (error) {
            console.error(error);
        }
        
    }
)()