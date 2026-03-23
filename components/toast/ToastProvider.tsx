"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";

type ToastVariant = "success" | "error" | "info";

type ToastOptions = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
};

type ToastRecord = ToastOptions & {
  id: string;
  variant: ToastVariant;
  duration: number;
};

type ToastContextValue = {
  toast: (options: ToastOptions) => string;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const DEFAULT_DURATION = 4200;

const variantStyles: Record<
  ToastVariant,
  {
    icon: typeof CheckCircle2;
    iconClassName: string;
    badgeClassName: string;
    glowClassName: string;
  }
> = {
  success: {
    icon: CheckCircle2,
    iconClassName: "text-emerald-500 dark:text-emerald-300",
    badgeClassName:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-400/20",
    glowClassName:
      "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_44%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_42%)]",
  },
  error: {
    icon: AlertCircle,
    iconClassName: "text-rose-500 dark:text-rose-300",
    badgeClassName:
      "bg-rose-50 text-rose-700 ring-1 ring-rose-200 dark:bg-rose-400/10 dark:text-rose-200 dark:ring-rose-400/20",
    glowClassName:
      "bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.14),transparent_44%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.14),transparent_42%)]",
  },
  info: {
    icon: Info,
    iconClassName: "text-amber-500 dark:text-amber-300",
    badgeClassName:
      "bg-amber-50 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/20",
    glowClassName:
      "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_46%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_42%)]",
  },
};

const ToastItem = ({
  toast,
  onDismiss,
}: {
  toast: ToastRecord;
  onDismiss: (id: string) => void;
}) => {
  const styles = variantStyles[toast.variant];
  const Icon = styles.icon;

  return (
    <li
      className="pointer-events-auto relative overflow-hidden rounded-[28px] border border-slate-200/85 bg-white/88 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-white/75 backdrop-blur-xl transition-transform duration-300 ease-out animate-[toast-in_220ms_ease-out] dark:border-white/10 dark:bg-zinc-900/82 dark:shadow-[0_24px_60px_rgba(0,0,0,0.42)] dark:ring-white/5"
      role={toast.variant === "error" ? "alert" : "status"}
    >
      <div className={`absolute inset-0 ${styles.glowClassName}`} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent dark:via-white/15" />

      <div className="relative flex gap-3">
        <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-50/90 shadow-sm ring-1 ring-slate-200/80 dark:bg-white/[0.06] dark:ring-white/8">
          <Icon className={`h-5 w-5 ${styles.iconClassName}`} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${styles.badgeClassName}`}
              >
                {toast.variant}
              </span>
              <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-zinc-50">
                {toast.title}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss notification"
              className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 dark:text-zinc-500 dark:hover:bg-white/[0.06] dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {toast.description ? (
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
              {toast.description}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
};

const ToastViewport = ({
  toasts,
  dismiss,
}: {
  toasts: ToastRecord[];
  dismiss: (id: string) => void;
}) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-0 top-3 z-[100] flex justify-center px-3 sm:inset-x-auto sm:right-5 sm:top-5 sm:w-[26rem] sm:justify-end sm:px-0"
    >
      <ul className="flex w-full max-w-md flex-col gap-3">
        {toasts.map((toast) => (
          <ToastAutoDismiss
            key={toast.id}
            toast={toast}
            onDismiss={dismiss}
          />
        ))}
      </ul>
    </div>
  );
};

const ToastAutoDismiss = ({
  toast,
  onDismiss,
}: {
  toast: ToastRecord;
  onDismiss: (id: string) => void;
}) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => onDismiss(toast.id), toast.duration);

    return () => window.clearTimeout(timeoutId);
  }, [onDismiss, toast.duration, toast.id]);

  return <ToastItem toast={toast} onDismiss={onDismiss} />;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback((options: ToastOptions) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    setToasts((current) => [
      ...current,
      {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant ?? "info",
        duration: options.duration ?? DEFAULT_DURATION,
      },
    ]);

    return id;
  }, []);

  const value = useMemo(
    () => ({
      toast,
      dismiss,
    }),
    [dismiss, toast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
