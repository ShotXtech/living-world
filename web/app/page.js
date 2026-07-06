export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1220]">

      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-slate-900 to-slate-950" />

      {/* Moon */}
      <div className="absolute top-24 right-32 h-24 w-24 rounded-full bg-amber-100 opacity-90 blur-[1px]" />

      {/* Ground */}
      <div className="absolute bottom-0 h-56 w-full bg-gradient-to-t from-green-950 to-green-900" />

      {/* House */}
      <div className="absolute bottom-44 flex flex-col items-center">

        <div className="h-20 w-24 rounded bg-stone-700" />

        <div
          className="mt-4 h-6 w-6 rounded-sm bg-yellow-200 shadow-[0_0_40px_#fde68a]"
        />

      </div>

      {/* Title */}
      <section className="relative z-10 text-center text-white">

        <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">
          Living World
        </p>

        <h1 className="mt-6 text-6xl font-light">
          The world is breathing.
        </h1>

        <p className="mt-6 text-slate-300">
          Nothing is required from you.
        </p>

      </section>

    </main>
  );
}