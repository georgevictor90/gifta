export const getAllProductsFromApi = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const getAllCategoriesFromApi = () => {
  return fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  );
};
