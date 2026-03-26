import Link from "next/link";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-20">
      <section className="border-b border-[#1A1A1E] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.35em] text-[#C6A878] uppercase mb-4">Search</p>
          <h1 className="font-display text-5xl font-light text-[#F6F1E8] mb-4">Find Your Piece</h1>
          <p className="text-[#8A8F98] font-light">Use category pages for now while full search indexing is being finalized.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
          <Link href="/collections" className="px-6 py-3 border border-[#1A1A1E] text-[#F6F1E8] hover:border-[#C6A878]/40 transition-colors">Browse Collections</Link>
          <Link href="/diamonds" className="px-6 py-3 border border-[#1A1A1E] text-[#F6F1E8] hover:border-[#C6A878]/40 transition-colors">Browse Diamonds</Link>
          <Link href="/build" className="px-6 py-3 border border-[#1A1A1E] text-[#F6F1E8] hover:border-[#C6A878]/40 transition-colors">Build Your Ring</Link>
        </div>
      </section>
    </main>
  );
}
