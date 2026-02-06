import Logo from "./components/Logo";
import HeaderActions from "./components/HeaderActions";

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <HeaderActions />
        </div>
      </div>
    </nav>
  );
}

export default Header;
