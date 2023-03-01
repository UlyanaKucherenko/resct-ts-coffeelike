interface IAuthOriginal {
  displayName: string;
  email: string;
  phoneNumber: number;
  photoURL: string;
  providerId: string;
  token: string;
  uid: string;
}

interface IAuthCustom {
  token: string;
  name: string;
  email: string;
}

export type { IAuthOriginal, IAuthCustom };
