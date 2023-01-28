export interface Request {
  id: string;
  date: number;
  requester: string;
  status: 'pending' | 'busy' | 'rejected' | 'fulfilled';
  sort: 'serie' | 'movie';
  text: string;
  imdbLink?: string;
}
