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
    
            const student2 = new Student({
                name: 'Hammad',
                age: 21
            })
    
           const result = await student2.save()
    
            console.log('Doc inserted', result );    
        } catch (error) {
            console.error(error);
        }
        
    }
)()