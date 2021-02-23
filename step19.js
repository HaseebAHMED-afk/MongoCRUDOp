var mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/demoDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose Conntection Succesful");

    mongoose.set("useFindAndModify", false);

    const personSchema = new mongoose.Schema({
      name: { type: String, index: true },
      age: Number,
      course: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    });

    const courseSchema = new mongoose.Schema({
      name: String,
      noOfTopics: Number,
    });

    const Student = mongoose.model("Student", personSchema);

    const Course = mongoose.model("Course", courseSchema);

    const course1 = new Course({
        name: "IOT",
        noOfTopics: 18,
      });

      const course2 = new Course({
        name: "blockchain",
        noOfTopics: 10,
      });
  
      const course1Result = await course1.save();
      const course2Result = await course2.save();
  
      const newStudent = new Student({
        name: "Minhaj",
        age: 20,
        course: [course1Result._id, course2Result._id],
      });
  
      const studentResult = await newStudent.save();
      
      console.log('Student saved', studentResult);

    
  } catch (error) {
    console.error(error);
  }
})();
