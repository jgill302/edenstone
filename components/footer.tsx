import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-evergreen text-cream/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif text-lg text-cream">Gestalt Gardens</p>
            <p className="mt-3 text-sm leading-relaxed">
              Zen-forward garden design in Austin, TX. Designed to slow you
              down.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="mb-4 text-xs tracking-widest uppercase text-cream/40">
                Explore
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/direction-finder"
                    className="text-sm transition-colors hover:text-gold"
                  >
                    Find Your Garden
                  </Link>
                </li>
                <li>
                  <Link
                    href="/materials"
                    className="text-sm transition-colors hover:text-gold"
                  >
                    Materials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm transition-colors hover:text-gold"
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs tracking-widest uppercase text-cream/40">
                Connect
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm transition-colors hover:text-gold"
                  >
                    Start a Conversation
                  </Link>
                </li>
                <li>
                  <span className="text-sm">Austin, Texas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-cream/10 pt-8">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Gestalt Gardens. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
