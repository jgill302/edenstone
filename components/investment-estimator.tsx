"use client";

import { useState } from "react";

interface InvestmentEstimatorProps {
  archetypeName: string;
  quizAnswers: Record<string, string>;
  onComplete: (estimate: string, size: string, timeline: string) => void;
}

// Project scope options
const scopeOptions = [
  {
    value: "refresh",
    label: "Garden Refresh",
    price: "$3,500 – $8,000",
    description: "Thoughtful improvements to an existing space",
    features: [
      "Design consultation and concept sketch",
      "Curated plant refresh with zen-appropriate species",
      "One signature element (stone grouping, lantern, or basin)",
      "Gravel or mulch refresh",
      "Basic hardscape touch-ups",
    ],
  },
  {
    value: "essentials",
    label: "Zen Essentials",
    price: "$8,000 – $18,000",
    description: "A focused transformation of a single area",
    features: [
      "Full design concept for one zone",
      "Premium plant installation",
      "2-3 curated ornamental elements",
      "New gravel garden or pathway",
      "Small water feature option",
    ],
  },
  {
    value: "transformation",
    label: "Full Transformation",
    price: "$18,000+",
    description: "Complete garden design and installation",
    features: [
      "Comprehensive design with material specs",
      "Premium natural materials for Austin climate",
      "Authentic Japanese ornaments and stone",
      "Professional installation by vetted craftsmen",
      "90-day establishment period support",
    ],
  },
];

// Base prices by archetype for full transformation (luxury positioning)
const archetypeBasePrices: Record<string, { min: number; max: number }> = {
  "Zen Courtyard": { min: 18000, max: 45000 },
  "Water Garden": { min: 28000, max: 75000 },
  "Gathering Terrace": { min: 25000, max: 65000 },
  "Contemplation Garden": { min: 22000, max: 55000 },
  "Japandi Retreat": { min: 32000, max: 85000 },
};

// Size multipliers for full transformation
const sizeMultipliers: Record<string, number> = {
  intimate: 1.0, // Under 300 sq ft
  modest: 1.4, // 300-600 sq ft
  generous: 1.9, // 600-1000 sq ft
  expansive: 2.6, // 1000+ sq ft
};

// Feature additions
const featureAdditions: Record<string, number> = {
  water_central: 8000, // Central water feature
  water_subtle: 3500, // Subtle water element
  enclosed: 4500, // Privacy screening
  semi: 2000, // Partial screening
  high_maintenance: -2000, // Less automated systems needed
  low_maintenance: 5000, // Automated irrigation, hardy plants
};

// Size options for full transformation
const sizeOptions = [
  {
    value: "intimate",
    label: "Intimate",
    description: "Under 300 sq ft — a focused meditation corner or entry courtyard",
  },
  {
    value: "modest",
    label: "Modest",
    description: "300–600 sq ft — a dedicated garden room or side yard transformation",
  },
  {
    value: "generous",
    label: "Generous",
    description: "600–1,000 sq ft — a full backyard retreat or wraparound garden",
  },
  {
    value: "expansive",
    label: "Expansive",
    description: "1,000+ sq ft — a complete outdoor living environment",
  },
];

const timelineOptions = [
  {
    value: "flexible",
    label: "Flexible",
    description: "I'm in no rush — quality over speed",
  },
  {
    value: "seasonal",
    label: "Seasonal",
    description: "I'd like to enjoy it by next season",
  },
  {
    value: "soon",
    label: "Soon",
    description: "Within the next few months if possible",
  },
];

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateEstimate(
  archetypeName: string,
  size: string,
  quizAnswers: Record<string, string>
): { min: number; max: number } {
  const base = archetypeBasePrices[archetypeName] || { min: 20000, max: 50000 };
  const sizeMultiplier = sizeMultipliers[size] || 1.0;

  let additionalMin = 0;
  let additionalMax = 0;

  // Add features based on quiz answers
  if (quizAnswers.water === "central") {
    additionalMin += featureAdditions.water_central;
    additionalMax += featureAdditions.water_central * 1.5;
  } else if (quizAnswers.water === "subtle") {
    additionalMin += featureAdditions.water_subtle;
    additionalMax += featureAdditions.water_subtle * 1.3;
  }

  if (quizAnswers.privacy === "enclosed") {
    additionalMin += featureAdditions.enclosed;
    additionalMax += featureAdditions.enclosed * 1.4;
  } else if (quizAnswers.privacy === "semi") {
    additionalMin += featureAdditions.semi;
    additionalMax += featureAdditions.semi * 1.3;
  }

  if (quizAnswers.maintenance === "low") {
    additionalMin += featureAdditions.low_maintenance;
    additionalMax += featureAdditions.low_maintenance * 1.2;
  } else if (quizAnswers.maintenance === "high") {
    additionalMin += featureAdditions.high_maintenance;
    additionalMax += featureAdditions.high_maintenance;
  }

  return {
    min: Math.round((base.min * sizeMultiplier + additionalMin) / 1000) * 1000,
    max: Math.round((base.max * sizeMultiplier + additionalMax) / 1000) * 1000,
  };
}

export function InvestmentEstimator({
  archetypeName,
  quizAnswers,
  onComplete,
}: InvestmentEstimatorProps) {
  const [step, setStep] = useState<"size" | "timeline" | "summary">("size");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");

  const estimate = selectedSize
    ? calculateEstimate(archetypeName, selectedSize, quizAnswers)
    : null;

  function handleSizeSelect(size: string) {
    setSelectedSize(size);
    setTimeout(() => setStep("timeline"), 300);
  }

  function handleTimelineSelect(timeline: string) {
    setSelectedTimeline(timeline);
    setTimeout(() => setStep("summary"), 300);
  }

  function handleContinue() {
    if (estimate) {
      const estimateString = `${formatCurrency(estimate.min)} – ${formatCurrency(estimate.max)}`;
      onComplete(estimateString, selectedSize, selectedTimeline);
    }
  }

  if (step === "size") {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">
            Investment Overview
          </p>
          <h3 className="font-serif text-2xl text-ink">
            How much space are we working with?
          </h3>
          <p className="mt-2 text-sm text-ink/50">
            This helps us provide a meaningful estimate for your {archetypeName}.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {sizeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSizeSelect(option.value)}
              className={`text-left rounded-lg border px-5 py-4 transition-all duration-300 ${
                selectedSize === option.value
                  ? "border-gold bg-gold/10"
                  : "border-ink/10 hover:border-gold/40"
              }`}
            >
              <div className="font-medium text-ink">{option.label}</div>
              <div className="mt-1 text-sm text-ink/50">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "timeline") {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">
            Investment Overview
          </p>
          <h3 className="font-serif text-2xl text-ink">
            What's your ideal timeline?
          </h3>
          <p className="mt-2 text-sm text-ink/50">
            We work at the pace of thoughtful design, but we can adapt.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {timelineOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleTimelineSelect(option.value)}
              className={`text-left rounded-lg border px-5 py-4 transition-all duration-300 ${
                selectedTimeline === option.value
                  ? "border-gold bg-gold/10"
                  : "border-ink/10 hover:border-gold/40"
              }`}
            >
              <div className="font-medium text-ink">{option.label}</div>
              <div className="mt-1 text-sm text-ink/50">{option.description}</div>
            </button>
          ))}
        </div>

        <button
          onClick={() => setStep("size")}
          className="text-sm text-ink/40 hover:text-gold transition-colors"
        >
          Back
        </button>
      </div>
    );
  }

  // Summary step
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">
          Your Investment
        </p>
        <h3 className="font-serif text-2xl text-ink">
          {archetypeName}
        </h3>
      </div>

      {/* Investment Range */}
      <div className="bg-forest/5 border border-forest/10 rounded-xl p-6 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-3">
          Estimated Investment Range
        </p>
        <p className="font-serif text-3xl text-forest md:text-4xl">
          {estimate && formatCurrency(estimate.min)} – {estimate && formatCurrency(estimate.max)}
        </p>
        <p className="mt-3 text-sm text-ink/50">
          Final pricing depends on site conditions, material selections, and design complexity.
        </p>
      </div>

      {/* What's Included */}
      <div className="space-y-4">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40">
          What's Included
        </p>
        <ul className="space-y-2 text-sm text-ink/70">
          <li className="flex items-start gap-3">
            <span className="text-gold mt-0.5">—</span>
            <span>Full design concept with material specifications</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold mt-0.5">—</span>
            <span>Premium natural materials sourced for Austin climate</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold mt-0.5">—</span>
            <span>Authentic Japanese garden ornaments and stone elements</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold mt-0.5">—</span>
            <span>Professional installation by our vetted craftsmen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold mt-0.5">—</span>
            <span>90-day establishment period support</span>
          </li>
        </ul>
      </div>

      {/* Selected Options Summary */}
      <div className="flex gap-4 text-sm">
        <div className="flex-1 bg-cream rounded-lg p-4">
          <p className="text-xs tracking-[0.1em] uppercase text-ink/40 mb-1">Size</p>
          <p className="font-medium text-ink capitalize">{selectedSize}</p>
        </div>
        <div className="flex-1 bg-cream rounded-lg p-4">
          <p className="text-xs tracking-[0.1em] uppercase text-ink/40 mb-1">Timeline</p>
          <p className="font-medium text-ink capitalize">{selectedTimeline}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-4">
        <button
          onClick={handleContinue}
          className="w-full rounded-lg bg-forest px-8 py-4 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:bg-moss"
        >
          Continue to Inquiry
        </button>
        <button
          onClick={() => setStep("timeline")}
          className="text-sm text-ink/40 hover:text-gold transition-colors"
        >
          Back
        </button>
      </div>

      <p className="text-xs text-center text-ink/30">
        No commitment required. We'll follow up to discuss your vision.
      </p>
    </div>
  );
}
