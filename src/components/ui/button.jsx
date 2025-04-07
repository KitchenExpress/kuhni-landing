// src/components/ui/button.jsx
export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  