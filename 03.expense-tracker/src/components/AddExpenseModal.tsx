import {
  X,
  Calendar,
  ShoppingCart,
  Fuel,
  UtensilsCrossed,
  Tv,
  Zap,
  ShoppingBag,
  Film,
  HeartPulse,
  Check,
  ChevronDown,
  CreditCard,
  Wallet,
  Paperclip,
} from "lucide-react";
import CategoryChip from "./CategoryChip";

interface AddExpenseModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddExpenseModal = ({ onClose }: AddExpenseModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14171A]/45 backdrop-blur-[2px] font-sans px-4 py-6">
      <div className="w-full max-w-[920px] max-h-[94vh] overflow-y-auto rounded-2xl bg-white border border-[#E3E0D8] shadow-[0_20px_60px_rgba(20,23,26,0.18)]">
        {/* Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-5 pb-4 border-b border-[#E3E0D8]">
          <div>
            <h2 className="text-[17px] font-semibold tracking-[-0.01em]">
              Add expense
            </h2>
            <p className="text-[12.5px] text-[#8A8778] mt-0.5">
              Log a purchase to keep this month's budget accurate.
            </p>
          </div>
          <button
            onClick={() => onClose(false)}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-[#9C9885] hover:bg-[#F4F2EC] hover:text-[#4A4740] transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 px-6 sm:px-8 py-5">
          <div className="space-y-5">
            {/* Amount */}
            <div>
              <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                Amount
              </label>
              <div className="flex items-center gap-1.5 rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-4 py-3 focus-within:border-[#0053E2] focus-within:ring-2 focus-within:ring-[#0053E2]/15">
                <span className="text-[22px] font-mono font-semibold text-[#9C9885]">
                  $
                </span>
                <input
                  defaultValue="13.87"
                  className="flex-1 bg-transparent text-[22px] font-mono font-semibold outline-none min-w-0"
                />
                <span className="text-[12px] font-mono text-[#9C9885]">
                  USD
                </span>
              </div>
            </div>

            {/* Merchant */}
            <div>
              <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                Merchant
              </label>
              <input
                defaultValue="Chipotle Mexican Grill"
                placeholder="Where did you spend?"
                className="w-full rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 text-[13.5px] font-medium outline-none focus:border-[#0053E2] focus:ring-2 focus:ring-[#0053E2]/15 placeholder:text-[#9C9885] placeholder:font-normal"
              />
            </div>

            {/* Date + Payment row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                  Date
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 focus-within:border-[#0053E2] focus-within:ring-2 focus-within:ring-[#0053E2]/15">
                  <Calendar size={15} className="text-[#9C9885] shrink-0" />
                  <input
                    defaultValue="Sep 8, 2026"
                    className="flex-1 bg-transparent text-[13px] font-medium outline-none min-w-0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                  Payment method
                </label>
                <button className="w-full flex items-center gap-2 rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 text-left hover:border-[#D8D5CE]">
                  <CreditCard size={15} className="text-[#9C9885] shrink-0" />
                  <span className="flex-1 text-[13px] font-medium truncate">
                    Debit •••• 4521
                  </span>
                  <ChevronDown size={14} className="text-[#9C9885] shrink-0" />
                </button>
              </div>
            </div>

            {/* Recurring toggle */}
            <div className="flex items-center justify-between rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <Wallet size={15} className="text-[#9C9885] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[13px] font-medium leading-tight">
                    Recurring expense
                  </p>
                  <p className="text-[11.5px] text-[#9C9885] leading-tight">
                    Repeats monthly on this date
                  </p>
                </div>
              </div>
              <div className="h-5 w-9 rounded-full bg-[#E3E0D8] relative shrink-0">
                <div className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow" />
              </div>
            </div>

            {/* Attachment  */}
            <button className="hidden lg:flex items-center gap-2 text-[12.5px] font-medium text-[#0053E2]">
              <Paperclip size={14} />
              Attach receipt
            </button>
          </div>

          {/* Right column */}
          <div className="space-y-5 lg:border-l lg:border-[#E3E0D8] lg:pl-10">
            {/* Category */}
            <div>
              <div className="flex items-center justify-between mb-1.5 gap-2">
                <label className="block text-[12px] font-medium text-[#4A4740] shrink-0">
                  Category
                </label>
                <span className="text-[11.5px] text-[#9C9885] text-right">
                  $350.00 budget &middot; $402.85 spent
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                <CategoryChip
                  icon={<ShoppingCart size={16} />}
                  label="Groceries"
                  color="#0053E2"
                  bg="#E8EFFD"
                />
                <CategoryChip
                  icon={<Fuel size={16} />}
                  label="Gas"
                  color="#B4560A"
                  bg="#FDF0E4"
                />
                <CategoryChip
                  icon={<UtensilsCrossed size={16} />}
                  label="Dining"
                  color="#E01A2B"
                  bg="#FDE9EA"
                  active
                />
                <CategoryChip
                  icon={<Tv size={16} />}
                  label="Subs"
                  color="#6D3FC0"
                  bg="#F0EAFB"
                />
                <CategoryChip
                  icon={<Zap size={16} />}
                  label="Utilities"
                  color="#B58900"
                  bg="#FBF3D9"
                />
                <CategoryChip
                  icon={<ShoppingBag size={16} />}
                  label="Shopping"
                  color="#0F7B6C"
                  bg="#E3F4F0"
                />
                <CategoryChip
                  icon={<Film size={16} />}
                  label="Fun"
                  color="#C23B7A"
                  bg="#FBE7F0"
                />
                <CategoryChip
                  icon={<HeartPulse size={16} />}
                  label="Health"
                  color="#2B7A4B"
                  bg="#E6F3EA"
                />
              </div>
              <p className="mt-2.5 text-[11.5px] font-medium text-[#B4560A] bg-[#FDF0E4] rounded-md px-2.5 py-1.5">
                This category is already over budget for September.
              </p>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                Notes{" "}
                <span className="text-[#9C9885] font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Add a note..."
                defaultValue="Lunch with Priya"
                className="w-full resize-none rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 text-[13px] outline-none focus:border-[#0053E2] focus:ring-2 focus:ring-[#0053E2]/15 placeholder:text-[#9C9885]"
              />
            </div>

            <button className="flex lg:hidden items-center gap-2 text-[12.5px] font-medium text-[#0053E2]">
              <Paperclip size={14} />
              Attach receipt
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-[#E3E0D8] bg-[#FAF9F5]">
          <button className="text-[13px] font-medium text-[#8A8778] hover:text-[#4A4740] sm:text-left text-center">
            Delete draft
          </button>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onClose(false)}
              className="flex-1 sm:flex-initial rounded-lg border border-[#E3E0D8] bg-white px-4 py-2 text-[13.5px] font-medium text-[#4A4740] hover:bg-[#F4F2EC] transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0053E2] px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-[#0047C4] transition-colors">
              <Check size={15} strokeWidth={2.5} />
              Save expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
