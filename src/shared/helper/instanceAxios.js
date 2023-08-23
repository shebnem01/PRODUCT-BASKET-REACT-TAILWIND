import axios from "axios";
import products from "../../mock/products.json";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/products").reply(200, {
  products,
});


export const instanceAxios = axios.create({
  baseURL: "",
});
