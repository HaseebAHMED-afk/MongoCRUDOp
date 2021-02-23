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
    
           
    
           const result = await Student.findById({_id:'6034088c58b2ca362c05b437'})

            console.log(`Name: ${result.name}, Age: ${result.age}`);
       
        } catch (error) {
            console.error(error);
        }
        
    }
)()