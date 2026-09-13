export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-bold text-xs text-white shadow-md shadow-pink-500/20">
            DS
          </div>
          <span className="text-xl font-extrabold text-slate-900">
            Dev<span className="text-pink-500">Stack</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#home" className="text-pink-500 transition-colors">
            Home
          </a>
          <a href="#technologies" className="transition-colors hover:text-pink-500">
            Technologies
          </a>
          <a href="#projects" className="transition-colors hover:text-pink-500">
            Projects
          </a>
          <a href="#about" className="transition-colors hover:text-pink-500">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-pink-500">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-sm font-semibold text-slate-600 transition-colors hover:text-pink-500">
            Sign In
          </button>
          <button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2 text-sm font-bold text-white shadow-md shadow-pink-500/20 transition-opacity hover:opacity-90">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}