import Link from "next/link";

export default function CustomDesignPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-20">
      <section className="border-b border-[#1A1A1E] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.35em] text-[#C6A878] uppercase mb-4">Bespoke</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-[#F6F1E8] mb-4">Custom Design</h1>
          <p className="text-[#8A8F98] font-light max-w-3xl leading-relaxed">
            Work directly with our design team to create one-of-a-kind jewelry with your preferred diamond, metal, and silhouette.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-4">
          {[
            "Share inspiration and references",
            "Define budget and timeline",
            "Review sketches and diamond shortlist",
            "Approve final piece before crafting",
          ].map((step, index) => (
            <article key={step} className="border border-[#1A1A1E] bg-[#0D0D10] p-6">
              <p className="text-[10px] tracking-[0.25em] text-[#C6A878] uppercase mb-2">Step {index + 1}</p>
              <h2 className="font-display text-2xl font-light text-[#F6F1E8]">{step}</h2>
            </article>
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <Link href="/appointment" className="inline-block px-7 py-3 bg-[#C6A878] text-[#0B0B0D] text-[10px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors">
            Start Design Brief
          </Link>
        </div>
      </section>
    </main>
  );
}
