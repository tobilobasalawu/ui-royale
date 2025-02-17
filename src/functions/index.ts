import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const cleanupLobbies = functions.pubsub
  .schedule('every 5 minutes')
  .onRun(async () => {
    const cutoff = Date.now() - 300000; // 5 minutes in milliseconds
    const db = admin.firestore();

    const lobbiesSnapshot = await db.collection('lobbies')
      .where('createdAt', '<', new Date(cutoff))
      .get();

    const deletions = lobbiesSnapshot.docs.map(async (doc) => {
      await doc.ref.delete();
    });

    await Promise.all(deletions);
    console.log(`Deleted ${lobbiesSnapshot.size} old lobbies`);
  });