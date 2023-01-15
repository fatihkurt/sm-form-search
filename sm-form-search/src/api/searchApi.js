import { UserApi, CategoryApi } from ".";

export default class SampleSearchApi {
  userApi = new UserApi();
  categoryApi = new CategoryApi();

  search(query) {
    query = query.toLowerCase();
    const users = this.userApi.getUsersDb();
    const categories = this.categoryApi.getCategoryDb();
    const founds = [];

    users.forEach((user) => {
      if (
        user.fullname.toLowerCase().includes(query) ||
        user.country.toLowerCase().includes(query) ||
        user.city.toLowerCase().includes(query) ||
        (user.email && user.email.toLowerCase().includes(query))
      ) {
        founds.push({ type: "user", data: user });
      }
    });
    categories.forEach((category) => {
      if (category.name.toLowerCase().includes(query)) {
        founds.push({ type: "category", data: category });
      }
    });
    return founds;
  }
}
