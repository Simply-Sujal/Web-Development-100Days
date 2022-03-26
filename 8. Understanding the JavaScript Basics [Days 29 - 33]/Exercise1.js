let onlineCourse = "Udemy Course by Jonas Schmedtmann";
const price = 499;
let CourseGoals = ["Skills", "Self-Development", "Understanding"];

// alert(onlineCourse);
// alert(price);
// alert(CourseGoals);

// Lets group all the three variables together
let OnlineCourse = {
  name: "Udemy Course by Jonas Schmedtmann",
  price: 499,
  CourseGoals: ["Skills", "Self-Develpment", "Understanding"],
};

// alert(OnlineCourse.name);
// alert(OnlineCourse.price);
// alert(OnlineCourse.CourseGoals);

// alert(OnlineCourse.CourseGoals[1]);

function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

let FirstGoals = getListItem(OnlineCourse.CourseGoals, 0);
alert(FirstGoals);
