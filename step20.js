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

    const course3 = new Course({
      name: "JAMStack",
      noOfTopics: 18,
    });

    const course3Result = await course3.save();

    const studentResult = await Student.updateOne({name: 'Minhaj'}, {
        $push:{
            course: [course3Result]
        }
    })

    console.log("Student saved", studentResult);
  } catch (error) {
    console.error(error);
  }
})();
