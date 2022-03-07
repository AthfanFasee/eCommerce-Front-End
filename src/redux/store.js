import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer from '../features/API_Reducers/allProducts';
import CreateProductReducer from '../features/API_Reducers/createProduct';
import EditProductReducer from '../features/API_Reducers/editProduct';
import updateProductID from '../features/ProductID';
import EditInputReducer from '../features/EditInputElements';
import DeleteProductReducer from '../features/API_Reducers/deleteProduct';
import SearchInputReducer from '../features/SearchInput';
import LikeProductReducer from '../features/API_Reducers/likeProduct';
import DislikeProductReducer from '../features/API_Reducers/disLikeProduct';
import IsLikeReducer from '../features/isLiked';


export const store = configureStore({
    reducer: {
      Products: ProductsReducer,
      createProduct: CreateProductReducer,
      EditProduct: EditProductReducer,
      ProductID: updateProductID,
      EditInputElements: EditInputReducer,
      deleteProduct: DeleteProductReducer,
      SearchInput: SearchInputReducer,
      LikeProduct: LikeProductReducer,
      DisLikeProduct: DislikeProductReducer,
      IsLiked: IsLikeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });