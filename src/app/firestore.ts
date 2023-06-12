import { collection, query, onSnapshot, DocumentChange, DocumentData, QueryDocumentSnapshot, deleteDoc, doc, setDoc } from "firebase/firestore";
import { addRequests, removeRequest, updateRequest } from "./dataSlice";
import { firestoreDB } from "./firebase";
import { useAppDispatch } from "./hooks";
import { Request } from '../models/request.model';
import { RequestFirestore } from "../models/request-firestore.model";

export const tranformToObject = (
  doc: QueryDocumentSnapshot<RequestFirestore>,
): Request => {
  const data = doc.data();
  const sort: Request['sort'] = data.sort === 'Serie' ? 'serie' : 'movie';

  let status: Request['status'];
  switch (data.status) {
    case '0': status = 'pending'; break;
    case '1': status = 'fulfilled'; break;
    case '-': status = 'rejected'; break;
    case 'b': status = 'busy'; break;
    default: status = 'pending';
  }

  const newReq: Request = {
    id: doc.id,
    date: new Date(data.date).getTime(),
    text: data.content,
    requester: data.requester,
    status,
    sort,
    streamingLink: data.streamingLink,
  };

  return newReq;
};

export const transformToFirestoreObject = (
  req: Request,
): unknown => {
  const sort: RequestFirestore['sort'] = req.sort === 'serie' ? 'Serie' : 'Film';

  let status: RequestFirestore['status'];
  switch (req.status) {
    case 'pending': status = '0'; break;
    case 'fulfilled': status = '1'; break;
    case 'rejected': status = '-'; break;
    case 'busy': status = 'b'; break;
    default: status = '0';
  }

  const reqFirestore: RequestFirestore = {
    date: new Date(req.date).toISOString(),
    content: req.text,
    requester: req.requester,
    status,
    sort,
    streamingLink: req.streamingLink ?? '',
  };

  return reqFirestore;

};

const q = query(collection(firestoreDB, 'requests'));
export const firestoreSubscribe = (dispatch: ReturnType<typeof useAppDispatch>) => onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change: DocumentChange<DocumentData>) => {
    const typedDoc = change.doc as QueryDocumentSnapshot<RequestFirestore>;
    const req = tranformToObject(typedDoc);
    if (change.type === 'added') {
      dispatch(addRequests([ req ]));
    }
    if (change.type === 'modified') {
      dispatch(updateRequest(req));
    }
    if (change.type === 'removed') {
      dispatch(removeRequest(req));
    }
  });

});

export const deleteRequestFromFirestore = async (request: Request) => {
  const docRef = doc(firestoreDB, 'requests', request.id);
  await deleteDoc(docRef);
};

export const addRequestToFirestore = async (request: Request) => {
  const docRef = doc(firestoreDB, 'requests', request.id);
  await setDoc(docRef, transformToFirestoreObject(request));
}

export const updateRequestInFirestore = async (request: Request) => {
  const docRef = doc(firestoreDB, 'requests', request.id);
  await setDoc(docRef, transformToFirestoreObject(request));
}
