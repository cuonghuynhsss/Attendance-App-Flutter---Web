const firebaseConfig = {
    apiKey: "AIzaSyDlk0j2AdekFvS6RML_BBc7KSJQ3ByT_Vc",
    authDomain: "attendance-app-b9376.firebaseapp.com",
    projectId: "attendance-app-b9376",
    storageBucket: "attendance-app-b9376.appspot.com",
    messagingSenderId: "413456120295",
    appId: "1:413456120295:web:5f1900accf4aa2addda542",
    measurementId: "G-WFRYQCCLE0"
  };
  firebase.initializeApp(firebaseConfig);
const db2 = firebase.firestore();
db2.collection("Employee").get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        let name = doc.data().id; 
        let fullName = doc.data().fullname; 
        var docRef = db2.collection("Employee").doc(name);

        // docRef.get().then((doc) => {
        //   if (doc.exists) {
        //       console.log("Document data:", doc.data());
        //   } else {
        //       // doc.data() will be undefined in this case
        //       console.log("No such document!");
        //   }
        // })
        docRef.collection("Record").get().then((s)=>{
          s.docs.forEach(doc=>{
            //console.log(doc.data());  
              console.log(doc.data().date);
              const container2 = document.getElementById('tbody2');
              const nv2 = document.createElement('tr');
              nv2.className= 'row_2'
              let checkin = doc.data().checkIn; 
              let checkout = doc.data().checkOut; 
              let datee = doc.data().datetime;
              nv2.innerHTML= `
              <td><img src="./img/nv.png" alt=""></td>
              <td >${fullName}</td>
              <td >${checkin}</td>
              <td >${checkout}</td>
              <td>${datee}</td>
            `
            container2.appendChild(nv2);
            
          })
        })
})
})

//   function renderEmployee(doc){
//       let li = document.createElement('li');
//       let name  = document.createElement('span');
//       let mnv = document.createElement('span');
//       let mail = document.createElement('span');
//       let chucvu = document.createElement('span');
//       let sdt = document.createElement('span');
//   }