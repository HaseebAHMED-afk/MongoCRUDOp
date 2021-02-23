var mongoose = require('mongoose');


(
    async () => {
        try {
            await mongoose.connect('mongodb://localhost:27017/demoDB' ,{useNewUrlParser:true , useUnifiedTopology:true})
            console.log('Mongoose Conntection Succesful');

            mongoose.set('useFindAndModify', false);
    
            const personSchema= new mongoose.Schema({
                name: {type : String , index:true},
                age : Number
            })
    
    
            const Student = mongoose.model('Student' , personSchema);
    
           
    
           const result = await Student.findOneAndUpdate({name:'Hammad'}, {name:'Shahbaz',age: 21 })

            console.log('Updated: ', result);
       
        } catch (error) {
            console.error(error);
        }
        
    }
)()