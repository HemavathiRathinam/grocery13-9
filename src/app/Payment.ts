export interface Payment {
    id: number;
    username: string;
    userEmail: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    paymentType: string;
    amount: number;
    orderDate:string;
  }