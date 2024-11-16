const mapping = {
  a: ["b", "ct"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const mutualFriends = (mapping, person) => {
  const friendList = mapping[person];
  if (friendList && friendList.length > 0) {
    const finallist = [...friendList];
    for (let friend of friendList) {
    //   const mutualFriendList = mutualFriends(mapping, friend);
      finallist.push(...mutualFriends(mapping, friend));
    }

    return finallist;
  }
  return [];
};
console.log(mutualFriends(mapping, "a"));
