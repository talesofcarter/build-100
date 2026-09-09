export interface FormDataType {
  amount: string;
  merchant: string;
  date: string;
  paymentMethod: string;
  isRecurring: boolean;
  category: string;
  notes?: string;
}

export interface Expense extends FormDataType {
  id: string;
}
