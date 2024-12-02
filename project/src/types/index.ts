export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Booking {
  id: string;
  userId: string;
  turfId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Turf {
  id: string;
  name: string;
  description: string;
  pricePerHour: number;
  image: string;
  available: boolean;
}