import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

function loadCredential() {
  const p = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!p) return undefined;
  const abs = path.resolve(process.cwd(), p);
  const json = JSON.parse(fs.readFileSync(abs, "utf-8"));
  return { cred: cert(json), projectId: json.project_id as string };
}

const existing = getApps()[0];
if (!existing) {
  const loaded = loadCredential();
  initializeApp(
    loaded
      ? { credential: loaded.cred, projectId: loaded.projectId }
      // 本番（Firebase Hosting/Functions）はADCで動く
      : { projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID }
  );
}
export const dbAdmin = getFirestore();