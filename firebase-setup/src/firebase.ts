import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, remove, update } from "firebase/database";

// Firebase configuration for fir-1-cf2a6 project
const firebaseConfig = {
  apiKey: "AIzaSyCdSbExPfnyL6mbZ-OPNarXucyq1fbkIRw",
  authDomain: "fir-1-cf2a6.firebaseapp.com",
  projectId: "fir-1-cf2a6",
  storageBucket: "fir-1-cf2a6.firebasestorage.app",
  databaseURL: "https://fir-1-cf2a6-default-rtdb.firebaseio.com",
  messagingSenderId: "604655758683",
  appId: "1:604655758683:web:d6eee8cc543a15bf21bb3e",
  measurementId: "G-3BBP4WcNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const rtdb = getDatabase(app);

console.log("[v0] Firebase RTDB initialized with databaseURL:", firebaseConfig.databaseURL);

// Save document to RTDB
export async function saveDocument(documentName: string, data: any) {
  try {
    console.log(`[v0] Saving to RTDB: ${documentName}`, data);
    const dbRef = ref(rtdb, documentName);
    await set(dbRef, data);
    console.log(`[v0] ✅ Successfully saved ${documentName} to RTDB`);
    return true;
  } catch (err) {
    console.error(`[v0] ❌ Error saving ${documentName} to RTDB:`, err);
    return false;
  }
}

// Listen to document changes in real-time
export function listenToDocument(documentName: string, callback: (data: any) => void) {
  try {
    console.log(`[v0] Setting up real-time listener for: ${documentName}`);
    const dbRef = ref(rtdb, documentName);
    
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        try {
          if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(`[v0] 🔄 Updated from RTDB (${documentName}):`, data);
            callback(data);
          } else {
            console.log(`[v0] No data found for ${documentName}`);
            // Don't call callback if no data - let state use initial value
          }
        } catch (err) {
          console.error(`[v0] Error in snapshot callback for ${documentName}:`, err);
        }
      },
      (err) => {
        console.error(`[v0] ❌ Error listening to ${documentName}:`, err);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.error(`[v0] ❌ Failed to set up listener for ${documentName}:`, err);
    return () => {};
  }
}

// Update document in RTDB (merge, don't replace)
export async function updateDocument(documentName: string, data: any) {
  try {
    console.log(`[v0] Updating RTDB: ${documentName}`, data);
    const dbRef = ref(rtdb, documentName);
    await update(dbRef, data);
    console.log(`[v0] ✅ Successfully updated ${documentName} in RTDB`);
    return true;
  } catch (err) {
    console.error(`[v0] ❌ Error updating ${documentName}:`, err);
    return false;
  }
}

// Delete document from RTDB
export async function deleteDocument(documentName: string) {
  try {
    console.log(`[v0] Deleting from RTDB: ${documentName}`);
    const dbRef = ref(rtdb, documentName);
    await remove(dbRef);
    console.log(`[v0] ✅ Successfully deleted ${documentName} from RTDB`);
    return true;
  } catch (err) {
    console.error(`[v0] ❌ Error deleting ${documentName}:`, err);
    return false;
  }
}
