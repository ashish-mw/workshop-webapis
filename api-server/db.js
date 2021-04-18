const serviceUsers = [
  {
    id: 1234,
    fullName: 'Darth Vader',
    admittedDate: '2021-04-18T05:30:25.477Z',
    symptoms: ['cough', 'dry throat', 'cant feel legs'],
    assignedDoctor: 2234
  },
  {
    id: 1235,
    fullName: 'Luke Skywalker',
    admittedDate: '2021-03-11T04:30:25.477Z',
    symptoms: ['fever', 'no sensation in one arm'],
    assignedDoctor: 2235
  },
  {
    id: 1236,
    fullName: 'Kylo Ren',
    admittedDate: '2021-04-03T15:30:25.477Z',
    symptoms: ['cough'],
    assignedDoctor: 2235
  },
  {
    id: 1237,
    fullName: 'Han Solo',
    admittedDate: '2020-10-18T02:30:25.477Z',
    symptoms: ['headaches'],
    assignedDoctor: 2237
  }
];

const doctors = [
  {
    id: 2234,
    fullName: 'Dr. Yoda Adoy',
    department: 'Bariatric Surgery'
  },
  {
    id: 2235,
    fullName: 'Dr. Palpatine',
    department: 'General Surgery'
  },
  {
    id: 2236,
    fullName: 'Dr. Darth Maul',
    department: 'Nephrology'
  },
  {
    id: 2237,
    fullName: 'Dr. Obi-Wan Kenobi',
    department: 'Neonatology'
  },
]

module.exports = {
  doctors,
  serviceUsers
}
