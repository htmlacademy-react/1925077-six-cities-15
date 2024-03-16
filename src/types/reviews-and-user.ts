export interface Reviews {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
