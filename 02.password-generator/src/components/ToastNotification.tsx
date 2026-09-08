import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { ToastState } from "../types";

interface NotificationProps {
  toast: ToastState;
}

const ToastNotification = ({
  toast,
}: NotificationProps): React.JSX.Element | null => {
  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl border bg-white px-4 py-2.5 text-sm font-medium shadow-[0_8px_24px_-8px_rgba(43,39,30,0.25)] ${
        toast.type === "success"
          ? "border-[#EDEAE1] text-[#2B271E]"
          : "border-[#F0D6D6] text-[#2B271E]"
      }`}
    >
      {toast.type === "success" ? (
        <CheckCircle2 className="h-4 w-4 text-[#4CA362]" />
      ) : (
        <XCircle className="h-4 w-4 text-[#D9534F]" />
      )}
      {toast.message}
    </div>
  );
};

export default ToastNotification;
