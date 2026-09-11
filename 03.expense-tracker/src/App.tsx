import React, { useState, useEffect } from "react";
import AlertBanner from "./components/AlertBanner";
import CategorySection from "./components/CategorySection";
import MembershipCardHero from "./components/MembershipCardHero";
import PageHeading from "./components/PageHeading";
import RecentTransactions from "./components/RecentTransactions";
import Sidebar from "./components/Sidebar";
import StatcardSection from "./components/StatcardSection";
import Topbar from "./components/Topbar";
import AddExpenseModal from "./components/AddExpenseModal";
import type { FormDataType, Expense } from "./types";
import {
  loadSavedExpenses,
  clearSavedExpenses,
  EXPENSES_KEY,
} from "./utils/savedExpenses";
import { loadUser, saveUser, clearUser } from "./utils/auth";
import LoginPage from "./components/LoginPage";

const emptyForm: FormDataType = {
  amount: "0",
  merchant: "",
  date: "",
  paymentMethod: "",
  isRecurring: false,
  category: "",
  notes: "",
};

function App(): React.JSX.Element {
  const [userName, setUserName] = useState<string | null>(loadUser);
  const [expenses, setExpenses] = useState<Expense[]>(loadSavedExpenses);
  const [formData, setFormData] = useState<FormDataType>({
    amount: "0",
    merchant: "",
    date: "",
    paymentMethod: "",
    isRecurring: false,
    category: "",
    notes: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleLogin = (name: string): void => {
    saveUser(name);
    setUserName(name);
  };

  const handleLogout = (): void => {
    clearUser();
    setUserName("");
    clearSavedExpenses();
    setExpenses([]);
  };

  const handleFormChange = (
    field: keyof FormDataType,
    value: string | number | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addNewExpense = (): void => {
    const newExpense = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setExpenses((prev) => [...prev, newExpense]);
  };

  const resetForm = (): void => {
    setFormData(emptyForm);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formData.merchant.trim() || !formData.category || !formData.date) {
      return;
    }

    try {
      addNewExpense();
      resetForm();
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to save expense:", error);
    }
  };

  const calculateTotalExpenses = (): number => {
    return expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  };

  const calculateTotalsCategory = (category: string) => {
    return expenses
      .filter((c) => c.category === category)
      .reduce((acc, expense) => acc + Number(expense.amount), 0);
  };

  const findTopCategory = (expenses: Expense[]) => {
    const categoryTotals = expenses.reduce<Record<string, number>>(
      (totals, expense) => {
        totals[expense.category] =
          (totals[expense.category] || 0) + Number(expense.amount);

        return totals;
      },
      {},
    );

    return Object.entries(categoryTotals).reduce(
      (topCategory, [category, total]) =>
        total > (categoryTotals[topCategory] || 0) ? category : topCategory,
      "",
    );
  };

  useEffect(() => {
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  }, [expenses]);

  if (!userName) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <main className="flex h-screen w-full bg-[#FBFAF7] text-[#14171A] font-sans antialiased">
      <Sidebar
        onOpen={setOpenModal}
        userName={userName}
        onLogout={handleLogout}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Topbar />
        {openModal && (
          <AddExpenseModal
            onClose={setOpenModal}
            formData={formData}
            onFormChange={handleFormChange}
            onFormSubmit={handleFormSubmit}
            onFormReset={resetForm}
          />
        )}
        <main className="px-5 md:px-8 py-7 space-y-7 max-w-295 w-full">
          <PageHeading onOpen={setOpenModal} />
          <MembershipCardHero totals={calculateTotalExpenses} />
          <StatcardSection
            totals={calculateTotalExpenses}
            expenses={expenses}
            topCategory={findTopCategory}
          />
          <AlertBanner />
          <CategorySection getTotalsByCategory={calculateTotalsCategory} />
          <RecentTransactions
            expenses={expenses}
            totals={calculateTotalExpenses}
          />
          <div className="h-4" />
        </main>
      </div>
    </main>
  );
}

export default App;
