import { instanceAxios } from "shared/helper/instanceAxios";

export const getProducts = () => {  
    return instanceAxios({ method: "GET", url: "/products" });
  };