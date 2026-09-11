import {
  X,
  Calendar,
  Check,
  ChevronDown,
  CreditCard,
  Wallet,
  Paperclip,
} from "lucide-react";
import CategoryChip from "./CategoryChip";
import type { FormDataType } from "../types";
import { List } from "../utils/Categories";

interface AddExpenseModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormDataType;
  onFormChange: (
    field: keyof FormDataType,
    value: string | number | boolean,
  ) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onFormReset: () => void;
}

const AddExpenseModal = ({
  onClose,
  formData,
  onFormChange,
  onFormSubmit,
  onFormReset,
}: AddExpenseModalProps) => {
  const {
    amount,
    merchant,
    date,
    paymentMethod,
    isRecurring,
    category,
    notes,
  } = formData;

  const handleFormReset = () => {
    onFormReset();
    onClose(false);
  };

  return (
    <div
      onClick={() => onClose(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14171A]/45 backdrop-blur-[2px] font-sans px-4 py-6"
    >
      <form
        onSubmit={onFormSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-230 max-h-[94vh] overflow-y-auto rounded-2xl bg-white border border-[#E3E0D8] shadow-[0_20px_60px_rgba(20,23,26,0.18)]"
      >
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
              <div className="flex items-center gap-1.5 rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-4 py-3 focus-within:border-[#0053E2] focus-within:ring-1 focus-within:ring-[#0053E2]">
                <span className="text-[22px] font-mono font-semibold text-[#9C9885]">
                  $
                </span>
                <input
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  value={amount}
                  onChange={(e) => onFormChange("amount", e.target.value)}
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
                value={merchant}
                onChange={(e) => onFormChange("merchant", e.target.value)}
                placeholder="Where did you spend?"
                className="w-full rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 text-[13.5px] font-medium outline-none focus:border-[#0053E2] focus:ring-1 focus:ring-[#0053E2] placeholder:text-[#9C9885] placeholder:font-normal"
              />
            </div>

            {/* Date + Payment row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                  Date
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 focus-within:border-[#0053E2] focus-within:ring-1 focus-within:ring-[#0053E2]">
                  <Calendar size={15} className="text-[#9C9885] shrink-0" />
                  <input
                    value={date}
                    type="date"
                    onChange={(e) => onFormChange("date", e.target.value)}
                    className="flex-1 bg-transparent text-[13px] font-medium outline-none min-w-0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#4A4740] mb-1.5">
                  Payment method
                </label>
                <div className="relative w-full flex items-center gap-2 rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 text-left hover:border-[#D8D5CE]">
                  <CreditCard size={15} className="text-[#9C9885] shrink-0" />
                  <select
                    onChange={(e) =>
                      onFormChange("paymentMethod", e.target.value)
                    }
                    value={paymentMethod}
                    className="flex-1 appearance-none bg-transparent text-[13px] font-medium truncate outline-none cursor-pointer"
                  >
                    <option value="Mastercard" className="py-2 px-3">
                      Mastercard
                    </option>
                    <option value="Visa" className="py-2 px-3">
                      Visa
                    </option>
                    <option value="Google Pay" className="py-2 px-3">
                      Google Pay
                    </option>
                    <option value="Apple Pay" className="py-2 px-3">
                      Apple Pay
                    </option>
                    <option value="Mpesa" className="py-2 px-3">
                      Mpesa
                    </option>
                    <option value="PayPal" className="py-2 px-3">
                      PayPal
                    </option>
                    <option value="Cash" className="py-2 px-3">
                      Cash
                    </option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="text-[#9C9885] shrink-0 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Recurring toggle */}
            <label className="flex items-center justify-between rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 cursor-pointer">
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

              <input
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => onFormChange("isRecurring", e.target.checked)}
                className="sr-only"
              />

              <div
                className={`h-5 w-9 rounded-full relative shrink-0 transition-colors ${
                  isRecurring ? "bg-[#6B705C]" : "bg-[#E3E0D8]"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    formData.isRecurring ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </div>
            </label>

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
              <label
                htmlFor="category"
                className="block text-xs font-medium text-[#4A4740] mb-1.5"
              >
                Category
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {List.map(({ id, shortLabel, icon: Icon, color, bg }) => (
                  <CategoryChip
                    key={id}
                    icon={<Icon size={16} />}
                    label={shortLabel}
                    color={color}
                    bg={bg}
                    active={category === id}
                    onClick={() => onFormChange("category", id)}
                  />
                ))}
              </div>
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
                value={notes}
                onChange={(e) => onFormChange("notes", e.target.value)}
                className="w-full resize-none rounded-xl border border-[#E3E0D8] bg-[#FBFAF7] px-3.5 py-2.5 text-[13px] outline-none focus:border-[#0053E2] focus:ring-1 focus:ring-[#0053E2] placeholder:text-[#9C9885]"
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
          <button
            type="button"
            onClick={handleFormReset}
            className="text-[13px] font-medium text-[#8A8778] hover:text-[#4A4740] sm:text-left text-center"
          >
            Delete draft
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="flex-1 sm:flex-initial rounded-lg border border-[#E3E0D8] bg-white px-4 py-2 text-[13.5px] font-medium text-[#4A4740] hover:bg-[#F4F2EC] transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0053E2] px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-[#0047C4] transition-colors"
            >
              <Check size={15} strokeWidth={2.5} />
              Save expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseModal;
