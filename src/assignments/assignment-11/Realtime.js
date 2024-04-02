import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA9vqSpBf55iTLpddAHTm7mbdo8DwTL4RY",
	authDomain: "sahil-ae616.firebaseapp.com",
	databaseURL: "https://sahil-ae616.firebaseio.com",
	projectId: "sahil-ae616",
	storageBucket: "sahil-ae616.appspot.com",
	messagingSenderId: "173751485109",
	appId: "1:173751485109:web:657b7efe43185bece174fc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
export const database = getFirestore(app);

