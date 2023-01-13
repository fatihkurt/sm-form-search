const USER_STORAGE_KEY = "userRepo";

export default class SampleUserApi {
  loadSampleData() {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(sampleData));
    return sampleData;
  }

  getUsersDb() {
    const usersDb = localStorage.getItem(USER_STORAGE_KEY);

    if (!usersDb) {
      const sampleData = this.loadSampleData();
      return sampleData;
    }
    return JSON.parse(usersDb);
  }

  addUser(user) {
    const users = this.getUsersDb();
    users.push(user);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
  }
}

const sampleData = [
  {
    fullname: "Naime",
    country: "Turkiye",
    city: "Izmir",
    mail: "asdasdasdas@sm.com",
  },
  {
    fullname: "Saim",
    country: "Turkiye",
    city: "Izmir",
    mail: "asdasd@sm.com",
  },
  {
    fullname: "Naim",
    country: "Turkiye",
    city: "Ankara",
    mail: "xcvxcvxc@google.com",
  },
];
