import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-20">
      <section className="border-b border-[#1A1A1E] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.35em] text-[#C6A878] uppercase mb-4">Contact</p>
          <h1 className="font-display text-5xl font-light text-[#F6F1E8] mb-4">Speak with LUX GEM</h1>
          <p className="text-[#8A8F98] font-light leading-relaxed">
            Reach our concierge for appointments, sourcing requests, and bespoke commissions.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-4">
          <article className="border border-[#1A1A1E] bg-[#0D0D10] p-6">
            <p className="text-[10px] tracking-[0.2em] text-[#C6A878] uppercase mb-3">Showroom</p>
            <p className="text-[#F6F1E8] font-light">Bangkok, Thailand</p>
            <p className="text-[#8A8F98] text-sm mt-2">By appointment only</p>
          </article>
          <article className="border border-[#1A1A1E] bg-[#0D0D10] p-6">
            <p className="text-[10px] tracking-[0.2em] text-[#C6A878] uppercase mb-3">General Inquiry</p>
            <p className="text-[#F6F1E8] font-light">concierge@luxgem.example</p>
            <p className="text-[#8A8F98] text-sm mt-2">Response within one business day</p>
          </article>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <Link href="/appointment" className="inline-block px-6 py-3 bg-[#C6A878] text-[#0B0B0D] text-[10px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors">
            Book Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
