import users from "./users.js";
const getUsersWithGender = (users, gender) => {
  const genderArr = users.filter((user) => user.gender === gender);
  return genderArr.map((results) => results.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
