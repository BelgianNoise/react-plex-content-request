export interface RequestFirestore {
  content: string;
  date: string;
  imdblink: string;
  requester: string;
  sort: 'Film' | 'Serie';
  status: '0' | '1' | '-' | 'b';
}
