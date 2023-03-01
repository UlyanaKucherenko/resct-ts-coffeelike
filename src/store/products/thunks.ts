import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from 'firebaseApp/firebase';

import { collection, getDocs } from 'firebase/firestore';

const getProducts = createAsyncThunk('products/getProducts', async () => {
  console.log('getCoffeeData');
  await getDocs(collection(db, 'coffee')).then(async (docs) => {
    const getData: any[] = [];
    docs.forEach((doc) => {
      console.log(`${doc.id} => ${doc}`);
      getData.push(doc.data());
    });
    console.log('getData=>', getData);
    return getData;
  });
});

const thunks = {
  getProducts,
};

export { thunks };
