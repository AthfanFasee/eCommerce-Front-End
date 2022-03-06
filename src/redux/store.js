import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer from '../features/API_Reducers/allProducts';
import CreateProductReducer from '../features/API_Reducers/createProduct';
import EditProductReducer from '../features/API_Reducers/editProduct';
import updateProductID from '../features/ProductID';
import EditInputReducer from '../features/EditInputElements';
import DeleteProductReducer from '../features/API_Reducers/deleteProduct';


export const store = configureStore({
    reducer: {
      Products: ProductsReducer,
      createProduct: CreateProductReducer,
      EditProduct: EditProductReducer,
      ProductID: updateProductID,
      EditInputElements: EditInputReducer,
      deleteProduct: DeleteProductReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });