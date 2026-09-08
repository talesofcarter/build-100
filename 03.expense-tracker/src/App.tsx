import AlertBanner from "./components/AlertBanner";
import CategorySection from "./components/CategorySection";
import MembershipCardHero from "./components/MembershipCardHero";
import PageHeading from "./components/PageHeading";
import RecentTransactions from "./components/RecentTransactions";
import Sidebar from "./components/Sidebar";
import StatcardSection from "./components/StatcardSection";
import Topbar from "./components/Topbar";

function App(): React.JSX.Element {
  return (
    <main className="flex h-screen w-full bg-[#FBFAF7] text-[#14171A] font-sans antialiased">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Topbar />
        <main className="px-5 md:px-8 py-7 space-y-7 max-w-295 w-full">
          <PageHeading />
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
