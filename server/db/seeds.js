use bucket_list;
db.dropDatabase();

db.goals.insertMany([
  {
    goal: "be cool"
  }
])
