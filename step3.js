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
    
            const student3 = new Student({
                name: 'Muhib',
                age: 20
            })

            const student4 = new Student({
                name: 'Abbas',
                age: 21
            }) 
            const student5 = new Student({
                name: 'Insaram',
                age: 20
            })
    
           const result = await Student.insertMany([student3,student4,student5])
    
            console.log('Doc inserted', result );    
        } catch (error) {
            console.error(error);
        }
        
    }
)()