"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: "feeling",
    question: "How do you want your garden to make you feel?",
    options: [
      { label: "Calm", value: "calm" },
      { label: "Grounded", value: "grounded" },
      { label: "Social", value: "social" },
      { label: "Meditative", value: "meditative" },
      { label: "Restorative", value: "restorative" },
    ],
  },
  {
    id: "maintenance",
    question: "How much time would you give to your garden each week?",
    options: [
      { label: "Almost none", value: "low" },
      { label: "A little -- I enjoy it", value: "medium" },
      { label: "I want to be hands-on", value: "high" },
    ],
  },
  {
    id: "sun",
    question: "What is the sun exposure in your space?",
    options: [
      { label: "Full sun most of the day", value: "full" },
      { label: "Partial shade", value: "partial" },
      { label: "Mostly shaded", value: "shade" },
      { label: "I am not sure", value: "unknown" },
    ],
  },
  {
    id: "water",
    question: "What role should water play?",
    options: [
      { label: "None -- I prefer dry gardens", value: "none" },
      { label: "Subtle -- a quiet element", value: "subtle" },
      { label: "Central -- the heart of the space", value: "central" },
    ],
  },
  {
    id: "style",
    question: "Where do you sit on the design spectrum?",
    options: [
      { label: "Natural and organic", value: "natural" },
      { label: "Balanced", value: "balanced" },
      { label: "Minimal and structured", value: "minimal" },
    ],
  },
  {
    id: "privacy",
    question: "How enclosed should the space feel?",
    options: [
      { label: "Open and expansive", value: "open" },
      { label: "Semi-private", value: "semi" },
      { label: "Fully enclosed retreat", value: "enclosed" },
    ],
  },
];

interface Archetype {
  name: string;
  tagline: string;
  description: string;
}

function getArchetype(answers: Record<string, string>): Archetype {
  const { feeling, water, style } = answers;

  if (feeling === "meditative" || (style === "minimal" && water === "none")) {
    return {
      name: "Zen Courtyard",
      tagline: "Silence as design material",
      description:
        "Your ideal space is defined by what it leaves out. Raked gravel, carefully placed stone, and deliberate emptiness create a visual quiet that mirrors the mental state you are seeking. In Austin's heat, dry gardens like this are not just beautiful -- they are deeply practical.",
    };
  }

  if (water === "central" || (feeling === "calm" && water === "subtle")) {
    return {
      name: "Water Garden",
      tagline: "Sound as sanctuary",
      description:
        "Subtle water sounds introduce non-repeating natural noise, helping your nervous system shift out of alert mode. A stone basin, a slow stream, or a simple overflow -- water becomes the heartbeat of your outdoor space. In Austin, moving water also cools surrounding air.",
    };
  }

  if (feeling === "social" || style === "balanced") {
    return {
      name: "Gathering Terrace",
      tagline: "Togetherness through restraint",
      description:
        "Not every garden is solitary. Your space is designed for slow gatherings -- warm wood seating, natural stone underfoot, and plantings that create gentle boundaries without walls. The design still follows restraint: every element earns its place.",
    };
  }

  if (style === "natural" || feeling === "restorative") {
    return {
      name: "Contemplation Garden",
      tagline: "Nature as nervous system reset",
      description:
        "Your ideal garden leans into the natural landscape of central Texas, working with native grasses, weathered stone, and shade trees to create a space that feels like it has always been there. Restoration comes from immersion, not decoration.",
    };
  }

  return {
    name: "Japandi Retreat",
    tagline: "Warmth meets discipline",
    description:
      "The warmth of Scandinavian craft meets Japanese restraint. Clean lines, natural wood, intentional greenery, and a balance between cozy and minimal. Your space bridges indoor comfort with outdoor calm -- perfect for Austin's mild winters.",
  };
}

export function DirectionFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Archetype | null>(null);

  const isComplete = step >= questions.length;
  const current = questions[step];

  function handleSelect(value: string) {
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);

    if (step + 1 >= questions.length) {
      setResult(getArchetype(newAnswers));
    }

    setTimeout(() => setStep(step + 1), 300);
  }

  function handleBack() {
    if (step > 0) {
      setStep(step - 1);
      setResult(null);
    }
  }

  function handleReset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  if (isComplete && result) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <p className="mb-2 text-xs tracking-[0.3em] uppercase text-gold animate-fade-in">
          Your Direction
        </p>
        <h2 className="font-serif text-4xl text-ink md:text-5xl animate-fade-in-up">
          {result.name}
        </h2>
        <p className="mt-4 font-serif text-lg italic text-ink/50 animate-fade-in-up">
          {result.tagline}
        </p>
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink/60 animate-fade-in-up">
          {result.description}
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-evergreen transition-all duration-300 hover:bg-champagne"
          >
            Start a Conversation
          </Link>
          <button
            onClick={handleReset}
            className="inline-flex rounded-lg border border-ink/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Retake
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      {/* Progress */}
      <div className="mb-16">
        <div className="flex items-center justify-between text-xs text-ink/40">
          <span>
            {step + 1} of {questions.length}
          </span>
          {step > 0 && (
            <button
              onClick={handleBack}
              className="transition-colors hover:text-gold"
            >
              Back
            </button>
          )}
        </div>
        <div className="mt-3 h-px w-full bg-ink/10">
          <div
            className="h-full bg-gold/60 transition-all duration-500"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      {current && (
        <div key={current.id} className="animate-fade-in-up">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            <span className="text-balance">{current.question}</span>
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {current.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`rounded-lg border px-6 py-4 text-left text-sm transition-all duration-300 ${
                  answers[current.id] === opt.value
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/10 bg-transparent text-ink/70 hover:border-gold/40 hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
