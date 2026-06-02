import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  getDocFromServer,
  onSnapshot
} from "firebase/firestore";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";

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
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

// Operational helper for error mapping and context defined in the skill
export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
    },
    operationType,
    path
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Simple helpers to fetch and write specific documents
export async function fetchDocument(documentName: string, fallback: any) {
  try {
    const docRef = doc(db, "dhading_hospital", documentName);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data().value;
    }
  } catch (err) {
    console.error(`Error fetching ${documentName} from Firebase, using fallback:`, err);
  }
  return fallback;
}

export async function saveDocument(documentName: string, data: any) {
  try {
    const docRef = doc(db, "dhading_hospital", documentName);
    await setDoc(docRef, { value: data, updatedAt: new Date().toISOString() });
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, `dhading_hospital/${documentName}`);
  }
}

// Real-time listener for a specific document - returns unsubscribe function
export function listenToDocument(documentName: string, callback: (data: any) => void) {
  try {
    const docRef = doc(db, "dhading_hospital", documentName);
    const unsubscribe = onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        callback(snap.data().value);
      }
    }, (err) => {
      console.error(`Error listening to ${documentName}:`, err);
    });
    return unsubscribe;
  } catch (err) {
    console.error(`Failed to set up listener for ${documentName}:`, err);
    return () => {};
  }
}

// Validate relationship connection on boot as mandated
async function testConnection() {
  try {
    await getDocFromServer(doc(db, "test", "connection"));
  } catch (error) {
    if (error instanceof Error && error.message.includes("the client is offline")) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();
