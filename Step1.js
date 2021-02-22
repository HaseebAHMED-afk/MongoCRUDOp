const mongoose = require("mongoose");

(
    async () => {
        try {
            mongoose.connect('mongodb://localhost:27017/demoDB' , {useNewUrlParser: true, useUnifiedTopology:true })
            console.log('Mongoose Connection Succesful');

            const personSchema = new mongoose.Schema({
                name: String,
                age:Number
            })
            
            const Student = mongoose.model('Student' , personSchema)

            const student1 = new Student({
                name: 'Haseeb Ahmed',
                age: 20
            })

            const result = await student1.save()
            
            console.log('Doc inserted');
            
        } catch (error) {
            console.log('There was an error');
        }
    }
)()