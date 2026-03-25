import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-abyss text-clean-white">
      <div className="text-center px-6">
        <AlertCircle className="mx-auto mb-4 h-10 w-10 text-soft-violet" />
        <h1 className="text-2xl font-bold mb-2">404 — Page Not Found</h1>
        <a href="/" className="text-signal-gold underline hover:brightness-110">
          Return home
        </a>
      </div>
    </div>
  );
}
