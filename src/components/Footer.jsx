export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo-text.png" alt="DevStack" className="h-8 object-contain" />
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-500">
              Build, customize, and share your ideal tech stack in minutes. Explore tools across frontend, backend, databases, and DevOps.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-500">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Product</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
              <li><a href="#technologies" className="hover:text-slate-900">Technologies</a></li>
              <li><a href="#features" className="hover:text-slate-900">Stack Builder</a></li>
              <li><a href="#templates" className="hover:text-slate-900">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Company</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900">About Us</a></li>
              <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
              <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-slate-900">Cookie Settings</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row text-xs text-slate-400">
          <p>© {new Date().getFullYear()} DevStack Builder. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
