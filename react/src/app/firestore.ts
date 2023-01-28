import { collection, query, onSnapshot, DocumentChange, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
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
    date: Number(new Date(data.date).toString()),
    text: data.content,
    requester: data.requester,
    status,
    sort,
    imdbLink: data.imdblink,
  };

  return newReq;
};

export const transformToFirestoreObject = (
  req: Request,
): void => {
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
    date: req.date.toString(),
    content: req.text,
    requester: req.requester,
    status,
    sort,
    imdblink: req.imdbLink ?? '',
  };

};

const q = query(collection(firestoreDB, 'requests'));
export const firestoreSubscribe = (dispatch: ReturnType<typeof useAppDispatch>) => onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change: DocumentChange<DocumentData>) => {
    const typedDoc = change.doc as QueryDocumentSnapshot<RequestFirestore>;
    const req = tranformToObject(typedDoc);
    if (change.type === 'added') {
      dispatch(addRequests([ req ]));
      console.log('added', change.doc.id);
    }
    if (change.type === 'modified') {
      dispatch(updateRequest(req));
    }
    if (change.type === 'removed') {
      dispatch(removeRequest(req));
    }
  });

});
