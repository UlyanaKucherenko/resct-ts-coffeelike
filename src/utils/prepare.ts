const encodeString = (str = '', startPos = 5, amountSymbols = 5) => {
  if (!str && !str.length) return '';

  const arrayOfStrings = str.split('');
  const totalSymbols = startPos + amountSymbols;

  const replaceArrayOfStrings = arrayOfStrings.map((word, key) => {
    if (key >= startPos && key < totalSymbols) return '*';
    return word;
  });

  return replaceArrayOfStrings.join('');
};

const prepareFormData = <T extends Record<string, any>>(data: T): FormData => {
  const form = new FormData();
  Object.entries(data).forEach((elem) => {
    form.append(elem[0], elem[1]);
  });
  return form;
};

const dataURLtoFile = (dataUrl: string, filename: string): File => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]); // deprecated for NodeJS only
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

const emailRegex = /^[\w.!#$%&'*+=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^[+]?[(]?\d{3}[)]?[-\s]?\d{3}[-\s]?\d{4,6}$/;

const validateLogin = (value: string) => {
  const isValidEmail = emailRegex.test(value);
  const isValidPhone = phoneRegex.test(value);
  return !(!isValidEmail && !isValidPhone);
};

const isLoginEmail = (value: string) => {
  return !!value.match(emailRegex);
};

const deleteObjInArrById = (
  arr: { id: string | number }[],
  id: string | number
) => {
  const arrCopy = [...arr];
  const objIdx = arr.findIndex((item) => item.id === id);
  arrCopy.splice(objIdx, 1);
  return arrCopy;
};

const transformNaN = (value: number) => (Number.isNaN(value) ? null : value);

const transformNumber = (num: number, digits = 2) => {
  return (
    !Number.isInteger(num) ? num.toFixed(digits) : num.toString()
  ).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const transformObject = (value: object) =>
  !Object.keys(value).length ? null : value;

const transformArray = (value: any[]) => (!value.length ? null : value);

const generateArrayOfYears = (yearsCount = 70) => {
  const max = new Date().getFullYear();
  const min = max - yearsCount;
  const years = [];

  // eslint-disable-next-line no-plusplus
  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

const generateArrayOfFutureYears = (yearsCount = 5) => {
  const min = new Date().getFullYear();
  const max = min + yearsCount;
  const years = [];

  // eslint-disable-next-line no-plusplus
  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

const generateSequenceOfNumbers = (min = 1, max = 4) => {
  const numbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = max; i >= min; i--) {
    numbers.push(i);
  }
  return numbers;
};

const filterPassedTime = (from: number) => (to: number) => {
  const dateFrom = new Date(from);
  const dateTo = new Date(to);
  return dateTo.getTime() > dateFrom.getTime();
};

const onExportFile = (file: string, fileName: string) => {
  const blobFile = new Blob([file]);
  const href = URL.createObjectURL(blobFile);
  const link = document.createElement('a');
  link.href = href;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};

const transformToCapitalizeCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
};

export {
  encodeString,
  prepareFormData,
  dataURLtoFile,
  validateLogin,
  isLoginEmail,
  deleteObjInArrById,
  transformNaN,
  transformObject,
  transformArray,
  transformNumber,
  generateArrayOfYears,
  generateArrayOfFutureYears,
  generateSequenceOfNumbers,
  filterPassedTime,
  onExportFile,
  transformToCapitalizeCase,
};
