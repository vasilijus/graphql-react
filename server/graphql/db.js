module.exports = {
  posts: [
    { id: 1, title: "Lorem Ipsum", views: 254, student_id: 1 },
    { id: 2, title: "Sic Dolor amet", views: 65, student_id: 3 },
  ],
  comments: [
    { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
    { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ],
  courses: [
    { id: 1, name: "Functional JavaScript", description: "Because FUN", level: "200", student_id: 4 },
    { id: 2, name: "Intro to HTML", description: "Start somewhere", level: "100", student_id: 4 },
    { id: 3, name: "Intro to Machine Learning", description: "Learn machines", level: "300", student_id: 5 },
    { id: 4, name: "Advance Machine Learning", description: "Learn machines", level: "400", student_id: 5 },
    { id: 5, name: "Pro Machine Learning", description: "Learn machines", level: "500", student_id: 5 }
  ],
  top: [
    { id: 1, name: "Functional JavaScript", description: "Because FUN", level: "200" },
    { id: 2, name: "Intro to HTML", description: "Start somewhere", level: "100" },
    { id: 3, name: "Intro to Machine Learning", description: "Learn machines", level: "300" },
    { id: 4, name: "Advance Machine Learning", description: "Learn machines", level: "400" },
    { id: 5, name: "Pro Machine Learning", description: "Learn machines", level: "500" }
  ],
  students: [
    { id: 1, firstName: "John", lastName: "Doe", active: "true" },
    { id: 2, firstName: "John", lastName: "Smith", active: "true" },
    { id: 3, firstName: "Alan", lastName: "Arms", active: "false" },
    { id: 4, firstName: "Kenny", lastName: "Welson  ", active: "true" },
    { id: 5, firstName: "Jane", lastName: "Smith", active: "false" }
  ],
};
