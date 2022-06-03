import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

import key from '../keys/firebase_key'

export default class Firebase{
    constructor(){
        this.app = initializeApp(key)
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }
    
}