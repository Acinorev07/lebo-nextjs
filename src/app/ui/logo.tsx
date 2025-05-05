// src/app/ui/logo.tsx
export default function Logo() {
    return (
      <a href="https://www.aegisia.com" className="flex items-center">
        <svg viewBox="0 0 200 40" className="h-8">
          <text x="10" y="30" className="font-bold text-3xl fill-teal-800">Le</text>
          <text x="55" y="30" className="font-bold text-3xl fill-amber-700">Bo</text>
        </svg>
      </a>
    );
  }