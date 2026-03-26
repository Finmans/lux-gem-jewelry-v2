import Link from "next/link";

export default function CertificateVerifyPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-20">
      <section className="border-b border-[#1A1A1E] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.35em] text-[#C6A878] uppercase mb-4">Service</p>
          <h1 className="font-display text-5xl font-light text-[#F6F1E8] mb-4">Certificate Verification</h1>
          <p className="text-[#8A8F98] font-light">Verify grading records and matching stone references with our support team.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border border-[#1A1A1E] bg-[#0D0D10] p-6">
          <p className="text-[#8A8F98] font-light mb-4">
            Certificate verification input is enabled on this route and will connect to database-backed record matching in the next phase.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 border border-[#C6A878]/40 text-[#C6A878] text-[10px] tracking-[0.25em] uppercase hover:bg-[#C6A878]/10 transition-colors">
            Request Manual Verification
          </Link>
        </div>
      </section>
    </main>
  );
}
