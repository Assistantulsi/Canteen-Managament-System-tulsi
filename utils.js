/**
 * CampusBite - Utilities & Helper Functions
 * Formats currency, dates, generates Order IDs, displays rich Toast alerts,
 * and provides modal control helpers.
 */

const Utils = {
  // Format numbers to Indian Rupee standard
  formatCurrency(amount) {
    const num = Number(amount) || 0;
    return `₹${num.toFixed(2)}`;
  },

  // Generate Unique Order ID (Format: CAN20260906xxx)
  generateOrderId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(100 + Math.random() * 900);
    return `CAN${year}${month}${day}${random}`;
  },

  // Generate Token (Format: Counter Prefix + Number: e.g. B-42)
  generateTokenNumber(counterName = "Counter 1") {
    const prefix = counterName.includes("2") ? "B" : counterName.includes("3") ? "C" : "A";
    const num = Math.floor(10 + Math.random() * 90);
    return `${prefix}-${num}`;
  },

  // Format ISO or local date strings
  formatDate(dateStr) {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateStr;
    }
  },

  // Show rich floating toast notification
  showToast(message, type = "success", duration = 3500) {
    let container = document.getElementById("campus-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "campus-toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type} animate-slide-in`;

    const iconMap = {
      success: "fa-circle-check",
      error: "fa-circle-xmark",
      warning: "fa-triangle-exclamation",
      info: "fa-circle-info"
    };

    const iconClass = iconMap[type] || iconMap.info;

    toast.innerHTML = `
      <div class="toast-content">
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;

    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.classList.add("toast-fade-out");
      setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add("toast-fade-out");
        setTimeout(() => toast.remove(), 300);
      }
    }, duration);
  },

  // Safe JSON parse from localStorage
  getStorage(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      console.warn(`Error reading ${key} from storage:`, e);
      return fallback;
    }
  },

  // Safe JSON write to localStorage
  setStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error(`Error saving ${key} to storage:`, e);
      return false;
    }
  },

  // Simple debounce helper for search inputs
  debounce(func, wait = 300) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
};

// Expose to window
if (typeof window !== "undefined") {
  window.Utils = Utils;
}
