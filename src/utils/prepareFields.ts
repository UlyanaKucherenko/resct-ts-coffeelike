const prepareSelectField = <T extends number | string>(
  options: T[] = []
): { label: T; value: T }[] => {
  if (!Array.isArray(options)) return [];
  return options.map((option) => ({
    value: option,
    label: option,
  }));
};
//
// const getValueFromOptions = (objectData = {}) => {
//   if (!Object.keys(objectData).length) return {};
//   const newObjectData: Record<string, string> = {};
//   Object.entries(objectData).forEach(([key, value]) => {
//     if (value) {
//       newObjectData[key] = typeof value === 'object' ? value.value : value;
//     } else {
//       newObjectData[key] = value;
//     }
//   });
//   return newObjectData;
// };

const getObjectFromValue = (value = '') => {
  if (value && value.length > 0) {
    return {
      value,
      label: value,
    };
  }
  return {};
};

const checkOptionAll = (option: Record<'label' | 'value', string | number>) => {
  return option.value !== 'All' ? option.value : null;
};

const checkMultiselectOptionAll = <T extends string | number>(
  options: T[],
  allOptions: T[]
) => {
  return options.length !== allOptions.length ? options : null;
};

export {
  prepareSelectField,
  // getValueFromOptions,
  getObjectFromValue,
  checkOptionAll,
  checkMultiselectOptionAll,
};
