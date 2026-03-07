export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: "Philosophy" | "Materials" | "Process" | "Guides";
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-austin-needs-zen-gardens",
    title: "Why Austin Needs More Zen Gardens",
    subtitle: "On heat, overstimulation, and the case for designed calm",
    date: "February 2026",
    readTime: "7 min read",
    category: "Philosophy",
    excerpt:
      "Austin is one of the most stimulating cities in the country. The case for zen gardens here isn't aesthetic -- it's biological.",
    content: `Austin is one of the most stimulating cities in the country. Between the tech corridor, the music, the constant influx of new people and new ideas, the default state of an Austin resident is alert. Always on. Always processing.

This is not a complaint. It's an observation. And it matters because the spaces we live in either compound that alertness or counterbalance it.

Most residential landscaping in Austin does neither. It decorates. A row of boxwoods, some seasonal color, maybe a fire pit for entertaining. These are fine. But they don't change how you feel when you step outside. They don't shift your nervous system.

Zen gardens do.

The principles behind Japanese garden design -- asymmetry, enclosure, reduction, natural sound -- are not decorative choices. They are spatial strategies for changing mental state. A raked gravel surface forces the eye to slow down. An enclosed courtyard limits the visual field, which reduces cognitive load. The sound of water introduces non-repeating natural noise that the brain processes differently than speech or music.

In Austin's heat, these principles also happen to be practical. Gravel and stone require no irrigation. Shade structures reduce surface temperature. Water features cool surrounding air through evaporation. Native moss and groundcover replace the biological desert of St. Augustine turf.

The overlap between what feels calming and what works in central Texas is not a coincidence. The Japanese garden tradition emerged in a climate with brutal summers. The solutions translate.

What doesn't translate is the McMansion approach to landscaping: more is better, green equals good, maintenance equals commitment. A zen garden in Austin should feel inevitable -- like the land wanted to be this way. Not transplanted from Kyoto, but informed by the same thinking.

We think Austin is ready for this. Not because it's trendy -- it isn't, particularly -- but because the people who live here are increasingly aware that their environments affect their cognition, their sleep, their stress baseline. A garden designed to slow you down is not a luxury. In a city this fast, it might be a necessity.`,
  },
  {
    slug: "landscaping-vs-garden-design",
    title: "Landscaping vs. Garden Design",
    subtitle: "Why the distinction matters more than you think",
    date: "January 2026",
    readTime: "6 min read",
    category: "Process",
    excerpt:
      "Landscaping fills space. Garden design creates feeling. The difference isn't pretentious -- it's the difference between decoration and experience.",
    content: `There is a meaningful difference between landscaping and garden design, and it isn't about price or sophistication. It's about intent.

Landscaping, as commonly practiced, is space-filling. The goal is coverage: fill the beds, edge the lawn, add mulch, maybe install some uplighting. The result looks "finished" in the way a stock photo looks finished -- everything is there, nothing is wrong, and nothing makes you feel anything.

Garden design starts from the opposite direction. It asks: what should this space do to the person standing in it? How should it make them feel? What should they hear, see, and notice -- and equally important, what should they not?

This is not pretentious. It is the same distinction between interior decorating and interior architecture, between arranging furniture and designing a room that changes how you move through it.

In practice, the difference shows up in decisions that most landscapers never consider:

Sight lines. Where does the eye travel when you step into the space? Is it pulled toward a focal point or scattered across competing elements? Japanese garden design uses the concept of "borrowed scenery" -- framing distant views as part of the garden itself.

Negative space. What is left empty, and is that emptiness intentional? A zen courtyard's power comes from what it removes. Most landscaping fills every available inch because empty space looks "unfinished" to the untrained eye.

Sound design. What do you hear? Traffic noise can be masked by a water feature placed at the right distance. Wind through ornamental grasses creates a different acoustic texture than wind through broadleaf trees.

Temporal design. How does the garden change across hours, seasons, years? A well-designed garden is not static. It has a morning character and an evening character. It looks different in February than in July -- and both are intentional.

None of this requires a larger budget than conventional landscaping. It requires a different process: more thinking, more restraint, more willingness to let a space be simple. The most expensive gardens we've seen are often the most overstuffed. The most affecting ones are almost always the most restrained.

If you're considering work on your outdoor space, the first question isn't "what should we plant?" It's "how do I want to feel when I'm out here?" Everything follows from that.`,
  },
  {
    slug: "outdoor-spaces-reduce-cognitive-load",
    title: "How Outdoor Spaces Reduce Cognitive Load",
    subtitle: "The neuroscience behind why gardens calm you down",
    date: "December 2025",
    readTime: "8 min read",
    category: "Philosophy",
    excerpt:
      "Your brain processes your garden differently than your living room. Understanding why changes how you design outdoor spaces.",
    content: `Your brain processes natural environments differently than built environments. This is not metaphor or wellness marketing. It is measurable, replicable neuroscience that has direct implications for how outdoor spaces should be designed.

The core concept is cognitive load -- the amount of mental processing your environment demands. Built environments, especially urban and digital ones, are high-load. Every sign, notification, car horn, and design choice requires your brain to categorize, evaluate, and respond. This is exhausting, and it is constant.

Natural environments are low-load. Not because they are simple -- a forest is extraordinarily complex -- but because the complexity is fractal and non-threatening. Your brain can process it in a diffuse, restful mode rather than the focused, evaluative mode that cities and screens demand.

This is called Attention Restoration Theory, developed by Rachel and Stephen Kaplan in the 1980s and validated extensively since. The key insight: natural settings allow "involuntary attention" -- a soft, effortless form of awareness that lets your directed attention mechanisms rest and recover.

What does this mean for garden design?

First, it means that the calming effect of a garden is not just about beauty. It's about information architecture. A garden that is visually cluttered -- too many plant varieties, too many focal points, too many competing textures -- increases cognitive load even though it's "natural." It forces the eye and brain to sort, categorize, and decide where to look.

A well-designed garden reduces this load. It uses repetition (gravel patterns, repeated plantings) to create visual rhythm. It uses enclosure (walls, hedges, grade changes) to limit the visual field. It uses natural materials that the brain processes as non-threatening because they are biologically familiar.

Second, it means that sound matters enormously. The sound of moving water is one of the most effective cognitive load reducers known. The brain categorizes it as ambient rather than informational -- it doesn't try to decode it the way it decodes speech or music. This is why water features are central to Japanese garden design and why they should be designed for sound, not just appearance.

Third, it means that a garden's maintenance aesthetic matters. A perfectly manicured space signals human control, which is a form of information your brain evaluates. A garden with visible natural processes -- moss growing on stone, gravel shifting slightly, leaves accumulating -- reads as low-threat and low-demand. Wabi-sabi is not just an aesthetic preference. It is a neurological strategy.

For Austin residents working in tech, this is particularly relevant. Screen-based work is the highest cognitive load activity most people do. Coming home to an outdoor space that continues to demand processing and evaluation is not rest. A garden designed with cognitive load in mind -- simple, enclosed, natural, quiet -- provides the kind of neural rest that the Kaplans described: the restoration of directed attention.

This is what we mean when we say our gardens are designed to slow you down. It is not a tagline. It is a design specification.`,
  },
  {
    slug: "why-we-avoid-trend-driven-materials",
    title: "Why We Avoid Trend-Driven Materials",
    subtitle: "On the quiet confidence of things that last",
    date: "November 2025",
    readTime: "5 min read",
    category: "Materials",
    excerpt:
      "Trends optimize for the first impression. We optimize for the tenth year. Here's why that distinction shapes every material choice we make.",
    content: `Every few years, the landscaping industry discovers a new material. Composite decking. Porcelain pavers. Corten steel. LED strip lighting embedded in everything. Each arrives with the same promise: it looks like the real thing but performs better.

The promise is usually half-true. Composite decking doesn't rot, but it also doesn't age. It looks the same on day one and day three thousand -- which sounds like a feature until you realize that sameness is the opposite of character. A cedar deck that silvers in the sun tells a story. A composite deck just... persists.

We are not material purists or luddites. We will use modern materials when they genuinely serve the design. But our default is always: does this material get better with time, or does it just maintain?

Stone gets better. Limestone develops a patina. Basalt wears smooth where feet travel. Flagstone settles into its joints. These are not flaws -- they are signatures of use, of time passing, of a garden being lived in.

Wood gets better -- the right wood, treated the right way. Shou sugi ban (charred cedar) develops deeper texture as it weathers. Untreated teak silvers. Reclaimed hardwood carries its history into its next life.

Gravel gets better. It compacts, shifts slightly, reveals patterns of use. The path you walk most often becomes visible. The garden records your habits.

Composite, porcelain, and synthetic materials do not get better. They resist change, which means they resist time. And a garden that resists time is a garden that never becomes yours.

There is also a practical dimension specific to Austin. Our climate is harsh -- 105-degree summers, flash freezes, alkaline soil, clay that expands and contracts. Materials that are rigid and synthetic crack under these stresses. Natural materials, evolved under similar conditions over millennia, flex and adapt.

The trend cycle in landscaping moves faster than the materials themselves. A material that is fashionable for three years will be in your garden for thirty. We would rather choose something that a Japanese garden builder would have recognized a hundred years ago, because that choice has been tested by the most rigorous filter available: time.

This is not nostalgia. It is risk management disguised as taste.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
