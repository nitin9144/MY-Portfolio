import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-[0.85rem]">
          &copy; 2026 NitinPortfolio. All rights reserved.
        </p>
        <p className="text-muted-foreground text-[0.85rem] flex items-center gap-1">
          Built with <Heart size={14} className="text-violet-500" /> using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
