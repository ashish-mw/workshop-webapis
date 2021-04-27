# F.O.R.C.E hospital REST Api server

## Running

```
$ git clone https://github.com/ashish-mw/workshop-webapis
$ cd api-server
$ npm install
$ npm start
```

## API documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b6876c85651e235ee365)

1. `/doctors` - `GET` - Lists available doctors
2. `/service-users` - `GET` - Lists enlisted patients/service users.
3. `/service-users` - `POST` - Creates a service user/patient

```json
// payload example
{
  "fullName": "Leah Skywalker",
  "symptoms": [
      "fever",
      "light yellow coloration in eye"
  ],
  "assignedDoctor": 2235
}
```
4. `/service-users/{id}` - `PUT` - Updates a service user/patient
```json
// payload example
{
  "fullName": "Leah Skywalker",
  "symptoms": [
      "fever",
      "light yellow coloration in eye"
  ],
  "assignedDoctor": 2237
}
```
5. `/service-users/{id}` - `DELETE` - Removes a service user/patient

### Data structure - Service User

```json
{
  "id": 1235,
  "fullName": "Luke Skywalker",
  "admittedDate": "2021-03-11T04:30:25.477Z",
  "symptoms": [
      "fever",
      "no sensation in one arm"
  ],
  "assignedDoctor": {
      "id": 2235,
      "fullName": "Dr. Palpatine",
      "department": "General Surgery"
  }
},
```
- `id` is the unique identifier for the service user in the system.
- `fullName` is the full name of the patient.
- `admittedDate` is the UTC time of when the user was added to the system.
- `symptoms` is a list of symptoms the patient displayed at the time of admission.
- `assignedDoctor` is the doctor assigned to the patient.

### Data structure - Doctor

```json
{
  "id": 2234,
  "fullName": "Dr. Yoda Adoy",
  "department": "Bariatric Surgery"
},
```
- `id` is the unique identifier for the doctor in the system.
- `fullName` is the full name of the doctor.
- `department` is the name of the department to which a doctor belongs to.