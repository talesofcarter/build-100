import React, { useState } from "react";

import AlertBanner from "./components/AlertBanner";
import CategorySection from "./components/CategorySection";
import MembershipCardHero from "./components/MembershipCardHero";
import PageHeading from "./components/PageHeading";
import RecentTransactions from "./components/RecentTransactions";
import Sidebar from "./components/Sidebar";
import StatcardSection from "./components/StatcardSection";
import Topbar from "./components/Topbar";
import AddExpenseModal from "./components/AddExpenseModal";

function App(): React.JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <main className="flex h-screen w-full bg-[#FBFAF7] text-[#14171A] font-sans antialiased">
      <Sidebar onOpen={setOpenModal} />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Topbar />
        {openModal && <AddExpenseModal onClose={setOpenModal} />}
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
