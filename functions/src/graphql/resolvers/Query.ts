export const Query = {
  messages: async (parent, args, { firestore }) => {
    const snapShot = await firestore.collection("messages").get();
    return snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
