export interface Request {
  id: string;
  date: number;
  requester: string;
  status: 'pending' | 'busy' | 'rejected' | 'fulfilled';
  // sort will be deprecated in the future
  sort: 'serie' | 'movie';
  text: string;
  imdbLink?: string;
}
