import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-20">
      <section className="border-b border-[#1A1A1E] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.35em] text-[#C6A878] uppercase mb-4">Wishlist</p>
          <h1 className="font-display text-5xl font-light text-[#F6F1E8] mb-4">Your Saved Picks</h1>
          <p className="text-[#8A8F98] font-light">Wishlist syncing is being finalized. You can continue browsing and request consultation anytime.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/diamonds" className="inline-block px-6 py-3 bg-[#C6A878] text-[#0B0B0D] text-[10px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors">
            Browse Diamond Stock
          </Link>
        </div>
      </section>
    </main>
  );
}
