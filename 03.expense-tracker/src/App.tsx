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
import type { FormDataType } from "./types";

function App(): React.JSX.Element {
  const [expenses, setExpenses] = useState<FormDataType[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    amount: 0,
    merchant: "",
    date: "",
    paymentMethod: "",
    isRecurring: false,
    category: "",
    notes: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

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
    const clearedInputs: FormDataType = {
      amount: 0,
      merchant: "",
      date: "",
      paymentMethod: "",
      isRecurring: false,
      category: "",
      notes: "",
    };

    setFormData(clearedInputs);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    try {
      addNewExpense();
      resetForm();
      setOpenModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  return (
    <main className="flex h-screen w-full bg-[#FBFAF7] text-[#14171A] font-sans antialiased">
      <Sidebar onOpen={setOpenModal} />
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
          <MembershipCardHero />
          <StatcardSection />
          <AlertBanner />
          <CategorySection />
          <RecentTransactions />
          <div className="h-4" />
        </main>
      </div>
    </main>
  );
}

export default App;
