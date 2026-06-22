import { createContext, useContext, useState, useCallback } from 'react';
import { HiCheckCircle, HiExclamationCircle, HiInformationCircle, HiX } from 'react-icons/hi';

const ToastContext = createContext(null);

const icons = {
  success: HiCheckCircle,
  error: HiExclamationCircle,
  info: HiInformationCircle,
  warning: HiExclamationCircle
};

const styles = {
  success: 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300',
  error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300',
  info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300',
  warning: 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300'
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  }, []);

  const dismiss = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
        {toasts.map((t) => {
          const Icon = icons[t.type];
          return (
            <div key={t.id} className={`flex items-center gap-3 rounded-xl border p-3 shadow-lg animate-slide-up ${styles[t.type]}`}>
              <Icon className="h-5 w-5 shrink-0" />
              <p className="flex-1 text-sm font-medium">{t.message}</p>
              <button onClick={() => dismiss(t.id)} className="shrink-0 opacity-60 hover:opacity-100">
                <HiX className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}
