import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", active: true },
  { label: "Studio", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="relative z-10 px-8 py-6">
          <div className="liquid-glass mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-6 py-4 sm:px-8">
            <a
              href="#"
              className="text-3xl tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah<sup className="text-xs">®</sup>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className={
                    link.active
                      ? "text-sm text-foreground transition-colors"
                      : "text-sm text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03]">
              Begin Journey
            </Button>
          </div>
        </header>

        <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-40 pt-32 py-[90px] text-center">
          <h1
            className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">dreams</em>{" "}
            rise <em className="not-italic text-muted-foreground">through the silence.</em>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re designing tools for deep thinkers, bold creators, and
            quiet rebels. Amid the chaos, we build digital spaces for sharp
            focus and inspired work.
          </p>

          <Button className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03]">
            Begin Journey
          </Button>
        </section>
      </div>
    </main>
  );
}

export default App;
