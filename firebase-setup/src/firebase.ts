import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, ref, onValue, set, remove, update, type Database } from "firebase/database";

// Firebase configuration - hospital-myyy project
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "hospital-myyy",
  storageBucket: "hospital-myyy.firebasestorage.app",
  databaseURL: "https://hospital-myyy-default-rtdb.firebaseio.com",
  messagingSenderId: "815819162162",
  appId: "1:815819162162:web:204045273bfca8618bb22b",
  measurementId: "G-8GY0R44J17",
};

// Initialize Firebase safely. A bad config must never crash the whole app (white screen).
let app: FirebaseApp | null = null;
let rtdb: Database | null = null;

try {
  app = initializeApp(firebaseConfig);
  rtdb = getDatabase(app);
} catch (err) {
  console.error("Firebase initialization failed:", err);
  app = null;
  rtdb = null;
}

export { rtdb };

// Save document to RTDB
export async function saveDocument(documentName: string, data: any) {
  if (!rtdb) return false;
  try {
    await set(ref(rtdb, documentName), data);
    return true;
  } catch (err) {
    console.error(`Error saving ${documentName}:`, err);
    return false;
  }
}

// Listen to document changes in real-time
export function listenToDocument(documentName: string, callback: (data: any) => void) {
  if (!rtdb) return () => {};
  try {
    const unsubscribe = onValue(
      ref(rtdb, documentName),
      (snapshot) => {
        if (snapshot.exists()) {
          callback(snapshot.val());
        }
      },
      (err) => {
        console.error(`Error listening to ${documentName}:`, err);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.error(`Failed to set up listener for ${documentName}:`, err);
    return () => {};
  }
}

// Update document in RTDB (merge, don't replace)
export async function updateDocument(documentName: string, data: any) {
  if (!rtdb) return false;
  try {
    await update(ref(rtdb, documentName), data);
    return true;
  } catch (err) {
    console.error(`Error updating ${documentName}:`, err);
    return false;
  }
}

// Delete document from RTDB
export async function deleteDocument(documentName: string) {
  if (!rtdb) return false;
  try {
    await remove(ref(rtdb, documentName));
    return true;
  } catch (err) {
    console.error(`Error deleting ${documentName}:`, err);
    return false;
  }
}
