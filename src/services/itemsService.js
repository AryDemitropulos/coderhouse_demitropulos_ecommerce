const mockedItems = [
  {
    id: "product1",
    name: "Product 1",
    img: "https://media.istockphoto.com/photos/stylish-and-cool-boot-picture-id1276624783?k=20&m=1276624783&s=612x612&w=0&h=g9KHqQ6115Zh9VTgi5hyUDeD7zEA2p6zrdJHL5Y5UQM=",
    description:
      "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
    stock: 15,
    categories: ["category1", "category3"],
    price: 356,
  },
  {
    id: "product2",
    name: "Product 2",
    img: "https://media.istockphoto.com/photos/red-gumshoes-or-skate-shoes-picture-id1150711818?k=20&m=1150711818&s=612x612&w=0&h=2CKquoE3_2fzlM5NHiWEqXDZ96iwnYwp-W8K6lD61xM=",
    description:
      "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
    stock: 10,
    price: 150,

    categories: ["category2", "category3"],
  },
  {
    id: "product3",
    name: "Product 3",
    img: "https://media.istockphoto.com/photos/nike-air-jordan-picture-id472046671?k=20&m=472046671&s=612x612&w=0&h=cY-Xpnd2rvAR1rJ8V2aIKKssjKa5Ban47xJ_nxrzQgE=",
    description:
      "Pariatur in qui aliquip aliquip mollit exercitation pariatur incididunt.",
    stock: 23,
    categories: ["category1", "category2"],
    price: 250,
  },
];

function getAll() {
  return fakeCall([...mockedItems]);
}

function getByCategory(category = "") {
  const filterItems = mockedItems.filter((item) =>
    item.categories.includes(category.toLocaleLowerCase())
  );
  return fakeCall([...filterItems]);
}

export function getItems(category) {
  return category ? getByCategory(category) : getAll();
}

export function getItem(id = "") {
  const filterItem = mockedItems.find(
    (item) => item.id.toLocaleLowerCase() === id.toLocaleLowerCase()
  );
  return fakeCall({ ...filterItem });
}

function fakeCall(expectedResult) {
  return new Promise((success, reject) => {
    setTimeout(
      () =>
        expectedResult
          ? success(expectedResult)
          : reject({ code: 404, message: "Item no encontrado" }),
      800
    );
  });
}
