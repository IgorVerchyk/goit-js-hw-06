import users from "./users.js";
const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort(
      (prevFriend, nextFriend) =>
        prevFriend.friends.length - nextFriend.friends.length
    )
    .map((sorted) => sorted.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
