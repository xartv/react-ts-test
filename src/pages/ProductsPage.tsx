import React from 'react';
import { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/Error";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const onCreateHandler = (newProduct: IProduct) => {
    addProduct(newProduct);
    close();
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        Create
      </button>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((p) => (
        <Product product={p} key={p.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={onCreateHandler} />
        </Modal>
      )}
    </div>
  )
}

export default ProductsPage