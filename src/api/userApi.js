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
    fullname: "Naime Tan",
    country: "Turkiye",
    city: "Izmir",
    mail: "asdasdasdas@sm.com",
  },
  {
    fullname: "Saim Zan",
    country: "Turkiye",
    city: "Izmir",
    mail: "bnmbnm@sm.com",
  },
  {
    fullname: "Naim Ban",
    country: "Turkiye",
    city: "Ankara",
    mail: "fhfgh@google.com",
  },
  {
    fullname: "Selim San",
    country: "Turkiye",
    city: "Bursa",
    mail: "asdfgfgh@google.com",
  },
  {
    fullname: "Kasim Aralik",
    country: "Turkiye",
    city: "Izmir",
    mail: "asdasd@google.com",
  },
  {
    fullname: "Fatih",
    country: "Litvanya",
    city: "Vilnius",
    mail: "kljkl@google.com",
  },
];
