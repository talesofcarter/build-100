export interface FormDataType {
  amount: number;
  merchant: string;
  date: string;
  paymentMethod: string;
  isRecurring: boolean;
  category: string;
  notes?: string;
}
