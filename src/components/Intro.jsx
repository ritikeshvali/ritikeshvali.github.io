import { useState } from "react";

export default function Intro() {
  const [open, setOpen] = useState(false);

  return (
    <div className="intro">
      <p className="tldr">
        I&rsquo;m a software engineer at Microsoft on Azure Core. I&rsquo;ve worked
        across a product&rsquo;s whole life, from an early open-source tool to a GA
        SaaS that enterprises pay for; built Tark, a small LLM inference server;
        and I&rsquo;m now deep in reinforcement learning.
      </p>

      <button
        className="more-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="about-full"
      >
        {open ? "less" : "more about me"}
      </button>

      {open && (
        <div id="about-full" className="intro-full">
          <p>
            I&rsquo;ve gotten to see a product from both ends: building features
            into AMS (Azure Monitor for SAP Solutions) when it was already large and
            running inside enterprises, and helping take BPS (Business Process
            Solutions) the other way, from two of us and an open-source repo
            to a small team with a GA&rsquo;d product that customers pay for. Going
            zero to one and then scaling it is where I learned what I actually care
            about, building for reliability and scale without taking my eyes
            off the customer.
          </p>
          <p>
            Outside work I tend to build whatever I&rsquo;ve just been reading
            about. Tark came out of one of those phases. Lately it&rsquo;s
            reinforcement learning and small agents.
          </p>
          <p>
            I studied electrical engineering at NSUT before this, and was
            programming head at ENIAC, my school&rsquo;s tech club. None of
            it was a straight line, which fits, because I mostly just like learning,
            whether it&rsquo;s history, art, math, physics, RL, or whatever has my
            attention that month.
          </p>
          <p>
            For now I&rsquo;m pointed at backend engineering and applied AI research.
            It might change as the work does, but that&rsquo;s where I am today.
          </p>
        </div>
      )}
    </div>
  );
}
