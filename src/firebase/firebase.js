import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push(
//   {
//     description: 'Coffee',
//     note: 'Coffee at Starbucks',
//     amount: '250',
//     createdAt: 976123498763
//   }
// );

// database.ref('expenses').push(
//   {
//     description: 'Rent bill',
//     note: '',
//     amount: '32000',
//     createdAt: 976123498763
//   }
// );

// database.ref('expenses').push(
//   {
//     description: 'Groceries',
//     note: 'Milk, Bread',
//     amount: '500',
//     createdAt: 976123498763
//   }
// );

// database.ref('notes/-LL5VJiTwsb0F9elc_TY').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     dawdwdwdwdwda: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     oiijoaijpdwijp: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [
//   {
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
//   },
//   {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
//   }
// ];

// database.ref('notes').set(notes);

// const onDataChange = database.ref().on('value', (snapshot) => {
//   const {name, job} = snapshot.val();
//   const {title, company} = job;
//   console.log(`${name} is a ${title} at ${company}`)
// }, (e) => {
//   console.log('Error fetching data.', e);
// });

// database.ref().update({
//   name: 'Mark',
//   'job/title': 'Senior project manager',
//   'job/company': 'Microsoft'
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Ondrej Hliba',
//     age: 18,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Berlin',
//         country: 'Germany'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed. ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove().then(() => { console.log('isSingle removed') }).catch((e) => { console.log('There was an error.', e) });
