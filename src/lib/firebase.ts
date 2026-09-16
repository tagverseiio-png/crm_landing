import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app;
let db: any;
let auth: any;
let database: any;

try {
  app = getApps().length === 0 && firebaseConfig.projectId ? initializeApp(firebaseConfig) : getApps()[0];
  if (app) {
    db = getDatabase(app);
    auth = getAuth(app);
    database = db;
  }
} catch (error) {
  console.error("Firebase initialization error", error);
}

export async function getData<T>(path: string): Promise<T | null> {
  if (!db) return null;
  const snapshot = await get(ref(db, path));
  if (snapshot.exists()) {
    return snapshot.val() as T;
  }
  return null;
}

export { db, auth, database };


