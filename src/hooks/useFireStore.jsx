import {collection, onSnapshot, query, orderBy, limit, where} from "firebase/firestore";
import React from "react";
import {db} from "../firebase";
const useFireStore = (collect, condition) => {
  const [docs, setDocs] = React.useState([]);
  React.useEffect(() => {
    let collectRef = query(collection(db, collect));
    let q = query(collectRef, orderBy("createAt"), limit(20));
    /* A condition to filter the data. */
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      q = query(
        collectRef,
        where(condition.fieldName, condition.operator, condition.compareValue),
        orderBy("createAt"),
        limit(20)
      );
    }

    const unsubscribe = onSnapshot(q, (snapShot) => {
      const data = snapShot.docs.map((doc) => {
        return {...doc.data(), id: doc.id};
      });
      setDocs(data);
    });
    return unsubscribe;
  }, [collect, condition]);
  return docs;
};
export default useFireStore;
