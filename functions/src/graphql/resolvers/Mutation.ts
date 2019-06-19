export const Mutation = {
  addMessage: async (parent, args, { firestore }) => {
    const { body } = args.input;
    return await firestore
      .collection("messages")
      .add({ body, createdAt: Date.now() })
      .then(async ref => {
        const snapShot = await firestore
          .collection("messages")
          .doc(ref.id)
          .get();
        return { id: ref.id, ...snapShot.data() };
      })
      .catch(() => {
        throw new Error("Failed to add message.");
      });
  }
};
