import { collection, getDocs, onSnapshot, query, addDoc, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

export default class FirebaseServiceProfessors {
    static unscribe = null

    static list_onSnapshot(firestore, callback) {

        const q = query(collection(firestore, 'professor'))
        FirebaseServiceProfessors.unscribe = onSnapshot(
            q,
            (querySnapshot) => {
                let professors = []
                querySnapshot.forEach(
                    (doc) => {
                        const { name, university, degree } = doc.data()
                        professors.push({ _id: doc.id, name, university, degree })
                    }
                )
                callback(professors)
            })
    }

    static create = (firestore, callback, data) => {
        addDoc(collection(firestore, 'professor'), data)
            .then(
                (doc) => {
                    callback()
                }
            )
            .catch((error) => console.log(error))
    }

    static retrieve_promisse = (firestore, callback, _id) => {
        const docRef = doc(firestore, "professor", _id);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists) callback(docSnap.data())
        })
        .catch(error=>console.log(error))
    }

    static update = (firestore,callback,_id,body) => {
        const docRef = doc(firestore, "professor", _id);
        updateDoc(docRef,body)
        .then(
            ()=>{
                callback()
            }
        )
        .catch((error)=>console.log(error))
    }
    
    static delete = (firestore,callback,_id) => {
        const docRef = doc(firestore, "professor", _id);
        deleteDoc(docRef)
        .then(
            ()=>{
                callback()
            }
        )
        .catch((error)=>console.log(error))
    }

}