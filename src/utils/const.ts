enum status {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail',
}

enum thunkStatus {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export { status, thunkStatus, months };
