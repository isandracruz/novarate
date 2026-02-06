import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../../hooks/useTheme";

function HeaderActions() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <button
        className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 transition-colors"
        id="theme-toggle"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 dark:hidden" />
        ) : (
          <Sun className="h-5 w-5 hidden dark:block" />
        )}
      </button>
    </div>
  );
}

export default HeaderActions;
