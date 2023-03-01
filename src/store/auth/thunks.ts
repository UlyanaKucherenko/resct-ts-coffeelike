import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { db, auth } from 'firebaseApp/firebase';
import { IFormValues } from 'pages/Auth/SingInPage/config';
import { IAuthOriginal } from 'types/auth-types';
import { collection, getDocs } from 'firebase/firestore';

const getCoffeeData = createAsyncThunk('auth/getCoffeeData', async () => {
  console.log('getCoffeeData');
  await getDocs(collection(db, 'coffee')).then(async (docs) => {
    const getData: any[] = [];
    docs.forEach((doc) => {
      console.log(`${doc.id} => ${doc}`);
      getData.push(doc.data());
    });
    console.log('getData=>', getData);
  });
});

const googleProvider = new GoogleAuthProvider();

const authRegistration = createAsyncThunk(
  'auth/registration',
  async (data: IFormValues) => {
    console.log('Registration');
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch ({ message }) {
      console.log('errr=>', message);
    }
  }
);

const authLoginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async () => {
    console.log('authLoginWithGoogle');

    const res = await signInWithPopup(auth, googleProvider)
      .then(async (userCredential) => {
        const { user } = userCredential;
        console.log('user=>', user);
        const token = await userCredential.user.getIdToken();
        let resData = {};
        user.providerData.forEach((item) => {
          resData = {
            displayName: item.displayName,
            email: item.email,
            phoneNumber: item.phoneNumber,
            photoURL: item.photoURL,
            providerId: item.providerId,
            uid: item.uid,
          };
        });
        resData = {
          ...resData,
          token,
        };
        return resData;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ERRRR=>', errorCode, errorMessage);
      });
    console.log('res=>', res);
    return res as IAuthOriginal;
  }
);

const authLogin = createAsyncThunk('auth/login', async (data: IFormValues) => {
  console.log('login');
  const res = await signInWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      const { user } = userCredential;
      console.log('user=>', user);
      const token = await userCredential.user.getIdToken();
      let resData = {};
      user.providerData.forEach((item) => {
        resData = {
          displayName: item.displayName,
          email: item.email,
          phoneNumber: item.phoneNumber,
          photoURL: item.photoURL,
          providerId: item.providerId,
          uid: user.uid,
        };
      });
      resData = {
        ...resData,
        token,
      };
      return resData;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('ERRRR=>', errorCode, errorMessage);
    });
  console.log('res=>', res);
  return res as IAuthOriginal;
});

const authLogout = createAsyncThunk('auth/logout', async () => {
  console.log('authLogout');
  try {
    await signOut(auth);
  } catch ({ message }) {
    console.log('errr=>', message);
  }
});

const thunks = {
  getCoffeeData,
  authRegistration,
  authLoginWithGoogle,
  authLogin,
  authLogout,
};

export { thunks };
