// Add a project: append an object to this array. It renders automatically.
// `problem` is the interesting-technical-problem paragraph. Keep it honest.
// `links` is a list of { label, href }.

export const projects = [
  {
    name: "Tark",
    meta: "C++17 · llama.cpp · from scratch",
    oneliner: "An LLM inference serving system built on top of llama.cpp.",
    problem:
      "Tark is an inference server on llama.cpp for low-compute setups: continuous batching, paged attention, prefix caching, speculative decoding, benchmarked against llama.cpp's own server. The scheduler is where it gets interesting. Once you interleave requests across a shared decode loop, serving is more a distributed-systems problem than a model one, which is the thread the Orca paper pulls on for ml.",

    links: [
      { label: "repo", href: "https://github.com/ritikeshvali/tark" },
      { label: "design notes", href: "https://github.com/ritikeshvali/tark/blob/main/docs/DESIGN.md" },
    ],
  },
  {
    name: "AltBrain",
    meta: "Python · React · GPT-4o · live",
    oneliner: "A RAG system for asking real questions of your own documents.",
    problem:
      "AltBrain is a RAG service over my own documents: chunking, embeddings, retrieval, and re-ranking, hand-built rather than pulled from a framework, with GPT-4o answering over the retrieved set and citing the sources it used so the answers can be checked. It started as a way to get things out of a full Google Drive and became an excuse to build retrieval end to end.",
    links: [
      { label: "live", href: "https://altbrain.vercel.app" },
      { label: "repo", href: "https://github.com/ritikeshvali/altbrain" },
    ],
  },
];
