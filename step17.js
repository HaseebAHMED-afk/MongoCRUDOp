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
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    });

    const courseSchema = new mongoose.Schema({
      name: String,
      noOfTopics: Number,
    });

    const Student = mongoose.model("Student", personSchema);

    const Course = mongoose.model("Course", courseSchema);

    const newCourse = new Course({
      name: "CNC",
      noOfTopics: 18,
    });

    const courseResult = await newCourse.save();

    const newStudent = new Student({
      name: "Haseeb",
      age: 20,
      course: courseResult._id,
    });

    const studentResult = await newStudent.save();

    console.log("Student Added: ", studentResult);
    console.log("Course Added", courseResult);

    
  } catch (error) {
    console.error(error);
  }
})();
