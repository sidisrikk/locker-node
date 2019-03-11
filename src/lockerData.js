global.globalLockerInfo = {};
const setLockerUnitInfo = (data) => {
  global.globalLockerInfo = data;
};

const getLockerUnitInfo = () => global.globalLockerInfo;

const mock = {
  'lockerInfo': {
    'no': 1,
    'unit': [
      {
        'no': 1,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 2,
        'passcode': '123321',
        'status': 'reserved',
      },
      {
        'no': 3,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 4,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 5,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 6,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 7,
        'passcode': '064463',
        'status': 'reserved',
      },
      {
        'no': 8,
        'passcode': '571804',
        'status': 'reserved',
      },
      {
        'no': 9,
        'passcode': '820533',
        'status': 'reserved',
      },
      {
        'no': 10,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 11,
        'passcode': '',
        'status': 'available',
      },
      {
        'no': 12,
        'passcode': '',
        'status': 'available',
      },
    ],
  },
};

export {
  mock,
  setLockerUnitInfo,
  getLockerUnitInfo,
};
