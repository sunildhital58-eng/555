import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  getDocFromServer
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCdSbExPfnyL6mbZ-OPNarXucyq1fbkIRw",

  authDomain: "myhospital-c7d91.firebaseapp.com",

  projectId: "myhospital-c7d91",

  storageBucket: "myhospital-c7d91.firebasestorage.app",

  messagingSenderId: "53874820562",

  appId: "1:53874820562:web:a793384bf1b6752b85740b",

  measurementId: "G-BNEK48V7ZB"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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
