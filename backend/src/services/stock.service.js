import { db } from "../firebase/firebaseAdmin.js";

export const stockService = {
  async getHoldings(uid) {
    const snapshot = await db
      .collection("users")
      .doc(uid)
      .collection("holdings")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  async createHolding(uid, holding) {
    const docRef = await db
      .collection("users")
      .doc(uid)
      .collection("holdings")
      .add({
        ...holding,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return docRef.id;
  },

  async deleteHolding(uid, holdingId) {
    await db
      .collection("users")
      .doc(uid)
      .collection("holdings")
      .doc(holdingId)
      .delete();
  },
};