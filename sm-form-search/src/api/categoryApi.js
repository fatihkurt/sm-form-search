const CATEGORY_STORAGE_KEY = "categoryRepo";

export default class SampleCategoryApi {
  loadSampleData() {
    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(sampleData));
    return sampleData;
  }

  getCategoryDb() {
    const categoriesDb = localStorage.getItem(CATEGORY_STORAGE_KEY);

    if (!categoriesDb) {
      const sampleData = this.loadSampleData();
      return sampleData;
    }
    return JSON.parse(categoriesDb);
  }

  addCategory(category) {
    const categories = this.getCategoryDb();
    categories.push(category);
    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories));
  }
}

const sampleData = [
  {
    name: "Home Supplies",
  },
  {
    name: "Lightings",
  },
  {
    name: "Laptops",
  },
  {
    name: "Shoes",
  },
  {
    name: "Accessories",
  },
  {
    name: "Electronics",
  },
  {
    name: "Computers"
  },
];
