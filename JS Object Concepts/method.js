const student = {
  id: 101,
  name: "Fazley Rabby",
  major: "Mathmatics",
  isRich: false,
  subjects: ["English", "Math", "Computer", ""],

  bestFriend: {
    name: "Murad",
    subject: "Computer",
  },
  takeExam: function () {
    console.log(this.name, "taking exam");
  },
};

student.takeExam();
