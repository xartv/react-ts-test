import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export const useProducts = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }


  const getData = async (url: string) => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<Array<IProduct>>(url);
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const err = e as AxiosError;
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData("https://fakestoreapi.com/products?limit=5");
  }, []);

  return { products, loading, error, addProduct};
};
