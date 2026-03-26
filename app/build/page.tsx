"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { diamonds, collections } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, label: "Choose Diamond", sublabel: "เลือกเพชร" },
  { id: 2, label: "Choose Setting", sublabel: "เลือกตัวเรือน" },
  { id: 3, label: "Review & Order", sublabel: "ตรวจสอบและสั่ง" },
];

const settings = [
  { id: "solitaire", name: "Classic Solitaire", metals: ["White Gold", "Yellow Gold", "Rose Gold", "Platinum"], priceAdd: 0 },
  { id: "halo", name: "Diamond Halo", metals: ["White Gold", "Platinum"], priceAdd: 15000 },
  { id: "pavé", name: "Pavé Band", metals: ["White Gold", "Yellow Gold", "Rose Gold"], priceAdd: 12000 },
  { id: "three-stone", name: "Three Stone", metals: ["White Gold", "Yellow Gold", "Platinum"], priceAdd: 22000 },
  { id: "vintage", name: "Vintage Milgrain", metals: ["Yellow Gold", "Rose Gold"], priceAdd: 18000 },
  { id: "tension", name: "Tension Setting", metals: ["White Gold", "Platinum"], priceAdd: 28000 },
];

const metals = ["White Gold 18k", "Yellow Gold 18k", "Rose Gold 18k", "Platinum 950"];

const shapeIcons: Record<string, string> = {
  Round: "◯", Oval: "⬭", Cushion: "▣", Emerald: "▬",
  Princess: "◻", Pear: "⊙", Radiant: "◈", Marquise: "◇",
};

export default function BuildPage() {
  const [step, setStep] = useState(1);
  const [selectedDiamond, setSelectedDiamond] = useState<string | null>(null);
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [selectedMetal, setSelectedMetal] = useState<string>("White Gold 18k");

  const diamond = diamonds.find((d) => d.id === selectedDiamond);
  const setting = settings.find((s) => s.id === selectedSetting);
  const totalTHB = (diamond?.priceTHB ?? 0) + (setting?.priceAdd ?? 0) + 35000;

  return (
    <main className="min-h-screen bg-[#0B0B0D] pt-20">
      {/* Header */}
      <div className="border-b border-[#1A1A1E] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.4em] text-[#C6A878] uppercase mb-3">Ring Builder</p>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-[#F6F1E8]">
            Build Your Ring
          </h1>
        </div>
      </div>

      {/* Step progress */}
      <div className="border-b border-[#1A1A1E] py-5 sticky top-20 bg-[#0B0B0D]/95 backdrop-blur-xl z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <button
                  onClick={() => {
                    if (s.id === 2 && !selectedDiamond) return;
                    if (s.id === 3 && (!selectedDiamond || !selectedSetting)) return;
                    setStep(s.id);
                  }}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2 transition-all duration-300",
                    step === s.id
                      ? "text-[#C6A878]"
                      : step > s.id
                        ? "text-[#8A8F98] hover:text-[#F6F1E8] cursor-pointer"
                        : "text-[#8A8F98]/40 cursor-not-allowed"
                  )}
                >
                  <div
                    className={cn(
                      "w-6 h-6 border flex items-center justify-center shrink-0",
                      step === s.id
                        ? "border-[#C6A878] bg-[#C6A878]/10"
                        : step > s.id
                          ? "border-[#8A8F98]/50 bg-[#C6A878] text-[#0B0B0D]"
                          : "border-[#2A2A30]"
                    )}
                  >
                    {step > s.id ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <span className="text-[10px]">{s.id}</span>
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-[11px] tracking-[0.15em] uppercase leading-none">
                      {s.label}
                    </p>
                    <p className="text-[9px] text-[#8A8F98]/60 mt-0.5">{s.sublabel}</p>
                  </div>
                </button>
                {i < steps.length - 1 && (
                  <div className="w-10 sm:w-16 h-px bg-[#1A1A1E] mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Choose Diamond */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl font-light text-[#F6F1E8]">
                  Choose Your Diamond
                </h2>
                <p className="text-sm text-[#8A8F98] mt-1 font-light">
                  Select a certified diamond from our stock
                </p>
              </div>
              {selectedDiamond && (
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-6 py-3 bg-[#C6A878] text-[#0B0B0D] text-[10px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors"
                >
                  Continue <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="space-y-2">
              {diamonds.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiamond(d.id)}
                  className={cn(
                    "w-full text-left grid grid-cols-[50px_1fr_80px_70px_80px_80px_130px] gap-4 px-5 py-4 border transition-all duration-300 items-center",
                    selectedDiamond === d.id
                      ? "border-[#C6A878] bg-[#C6A878]/5"
                      : "border-[#1A1A1E] hover:border-[#C6A878]/30 hover:bg-[#111115]"
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-xl text-[#C6A878]/80">{shapeIcons[d.shape] ?? "◇"}</span>
                    <span className="text-[8px] text-[#8A8F98]/60">{d.shape}</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#F6F1E8] font-light">{d.carat}ct {d.shape}</p>
                    <p className="text-[10px] text-[#8A8F98] font-mono mt-0.5">#{d.certificate}</p>
                  </div>
                  <p className="text-sm text-[#F6F1E8] font-light">{d.color}</p>
                  <p className="text-sm text-[#C6A878] font-light">{d.clarity}</p>
                  <p className="text-xs text-[#8A8F98]">{d.cut}</p>
                  <p className="text-xs text-[#8A8F98]">{d.lab}</p>
                  <p className="text-sm text-[#C6A878] font-light text-right">
                    ฿{d.priceTHB.toLocaleString()}
                  </p>
                </button>
              ))}
            </div>

            {selectedDiamond && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-8 py-4 bg-[#C6A878] text-[#0B0B0D] text-[11px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors"
                >
                  Choose Setting <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 2: Choose Setting */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#8A8F98] uppercase hover:text-[#C6A878] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <div>
                <h2 className="font-display text-3xl font-light text-[#F6F1E8]">Choose Your Setting</h2>
                <p className="text-sm text-[#8A8F98] mt-1 font-light">
                  Select a setting style and metal
                </p>
              </div>
            </div>

            {/* Metal selector */}
            <div className="mb-8">
              <p className="text-[9px] tracking-[0.3em] text-[#8A8F98] uppercase mb-3">Metal</p>
              <div className="flex flex-wrap gap-2">
                {metals.map((metal) => (
                  <button
                    key={metal}
                    onClick={() => setSelectedMetal(metal)}
                    className={cn(
                      "px-5 py-2.5 text-[10px] tracking-[0.15em] uppercase border transition-all",
                      selectedMetal === metal
                        ? "border-[#C6A878] bg-[#C6A878]/10 text-[#C6A878]"
                        : "border-[#1A1A1E] text-[#8A8F98] hover:border-[#2A2A30]"
                    )}
                  >
                    {metal}
                  </button>
                ))}
              </div>
            </div>

            {/* Setting cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {settings.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSetting(s.id)}
                  className={cn(
                    "text-left border p-6 transition-all duration-300 hover:border-[#C6A878]/40",
                    selectedSetting === s.id
                      ? "border-[#C6A878] bg-[#C6A878]/5"
                      : "border-[#1A1A1E]"
                  )}
                >
                  {/* Setting visual */}
                  <div className="h-28 flex items-center justify-center mb-4 bg-[#080809]">
                    <div className="w-10 h-10 border border-[#C6A878]/40 rotate-45" />
                  </div>
                  <h3 className="font-display text-lg font-light text-[#F6F1E8] mb-1">{s.name}</h3>
                  <p className="text-[9px] text-[#8A8F98] mb-3">
                    Available in: {s.metals.join(" · ")}
                  </p>
                  <p className="text-sm text-[#C6A878] font-light">
                    {s.priceAdd === 0 ? "Included" : `+฿${s.priceAdd.toLocaleString()}`}
                  </p>
                </button>
              ))}
            </div>

            {selectedSetting && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-8 py-4 bg-[#C6A878] text-[#0B0B0D] text-[11px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors"
                >
                  Review Order <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 3: Review */}
        {step === 3 && diamond && setting && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#8A8F98] uppercase hover:text-[#C6A878] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <h2 className="font-display text-3xl font-light text-[#F6F1E8]">Your Ring</h2>
            </div>

            {/* 3D preview placeholder */}
            <div className="aspect-square max-h-80 mx-auto bg-gradient-to-br from-[#1a1410] to-[#0D0D0F] border border-[#C6A878]/20 flex flex-col items-center justify-center mb-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "radial-gradient(circle at center, #C6A878 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="w-28 h-28 border border-[#C6A878]/30 rotate-45 animate-[spin_12s_linear_infinite]" />
              <p className="absolute bottom-4 text-[9px] tracking-[0.3em] text-[#C6A878]/60 uppercase">
                3D Preview · Coming Soon
              </p>
            </div>

            {/* Summary */}
            <div className="border border-[#1A1A1E] divide-y divide-[#1A1A1E]">
              <div className="p-5">
                <p className="text-[9px] tracking-[0.3em] text-[#C6A878] uppercase mb-3">Your Diamond</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-[#F6F1E8] font-light">
                      {diamond.carat}ct {diamond.shape} · {diamond.color} / {diamond.clarity} / {diamond.cut}
                    </p>
                    <p className="text-[10px] text-[#8A8F98] mt-0.5">{diamond.lab} #{diamond.certificate}</p>
                  </div>
                  <p className="text-sm text-[#C6A878]">฿{diamond.priceTHB.toLocaleString()}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[9px] tracking-[0.3em] text-[#C6A878] uppercase mb-3">Setting</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-[#F6F1E8] font-light">{setting.name}</p>
                    <p className="text-[10px] text-[#8A8F98] mt-0.5">{selectedMetal}</p>
                  </div>
                  <p className="text-sm text-[#C6A878]">
                    {setting.priceAdd === 0 ? "Included" : `฿${setting.priceAdd.toLocaleString()}`}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[9px] tracking-[0.3em] text-[#C6A878] uppercase mb-3">Craftsmanship</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#F6F1E8] font-light">Handcrafting & Finishing</p>
                  <p className="text-sm text-[#C6A878]">฿35,000</p>
                </div>
              </div>
              <div className="p-5 bg-[#111115]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-[#F6F1E8] font-light">Total Estimate</p>
                    <p className="text-[9px] text-[#8A8F98] mt-0.5">Incl. certificate & lifetime warranty</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-light text-[#C6A878]">
                      ฿{totalTHB.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#C6A878] text-[#0B0B0D] text-[11px] tracking-[0.25em] uppercase hover:bg-[#D9C4A0] transition-colors">
                Reserve This Ring
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-4 border border-[#C6A878]/40 text-[#C6A878] text-[10px] tracking-[0.25em] uppercase hover:bg-[#C6A878]/8 transition-colors">
                <Phone className="w-3.5 h-3.5" /> Book Consultation
              </button>
            </div>
            <p className="text-[10px] text-[#8A8F98]/60 text-center mt-3">
              Final price confirmed after gemologist consultation. No payment required now.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
