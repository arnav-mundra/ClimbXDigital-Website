/* ClimbX Digital — site interactions
   Sections: setup · intro loader · hero · about · services · the climb, connected ·
   why ClimbX · how we climb · contact · small touches */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (x) => x * x * (3 - 2 * x);
  const pad2 = (n) => String(n).padStart(2, "0");

  gsap.registerPlugin(ScrollTrigger);

  /* =========================================================
     SETUP — smooth scroll, anchor links, nav state
     ========================================================= */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = id === "#top" ? document.body : document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const y = id === "#top" ? 0 : el.getBoundingClientRect().top + window.scrollY;
      lenis ? lenis.scrollTo(y, { duration: 1.6 }) : window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  const nav = document.querySelector(".nav");
  const onScrollNav = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* =========================================================
     INTRO LOADER — logo builds in, an orange staircase draws itself,
     then a staircase-shaped wipe reveals the hero. Plays once per visit.
     ========================================================= */
  const loader = document.querySelector(".loader");
  const introDone = new Promise((resolve) => {
    if (!loader) return resolve();
    let seen = false;
    try { seen = sessionStorage.getItem("cx-intro") === "1"; } catch (e) {}
    if (reduce || seen) {
      loader.remove();
      return resolve();
    }
    try { sessionStorage.setItem("cx-intro", "1"); } catch (e) {}
    lenis && lenis.stop();
    document.documentElement.style.overflow = "hidden";

    // staircase sized to this screen: fewer, wider steps on phones
    const svg = loader.querySelector(".loader__stairs");
    const path = svg.querySelector("path");
    const w = window.innerWidth, h = window.innerHeight;
    const n = w < 700 ? 5 : 7;
    const sw = w / (n + 0.6), sh = (h * 0.8) / n;
    let x = sw * 0.6, y = h - 12;
    let d = `M-40 ${y} H${x}`;
    for (let i = 0; i < n; i++) {
      y -= sh;
      x += sw;
      d += ` V${y} H${x}`;
    }
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    path.setAttribute("d", d);
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

    gsap.timeline({
      onComplete: () => {
        loader.remove();
        document.documentElement.style.overflow = "";
        lenis && lenis.start();
        ScrollTrigger.refresh();
        resolve();
      },
    })
      .from(".loader__digital", { opacity: 0, letterSpacing: "1em", duration: 0.7, ease: "power3.out" }, 0.1)
      .from(".loader__word > *", { yPercent: 110, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }, 0.3)
      .from(".loader__emblem", { y: -50, opacity: 0, scale: 0.6, duration: 0.7, ease: "back.out(1.8)" }, 0.45)
      .to(path, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 0.35)
      .from(".loader__tag", { opacity: 0, y: 10, duration: 0.5 }, 1.05)
      // the staircase thins to an outline, then the panels lift away in steps
      .to(path, { stroke: "#ffffff", strokeWidth: 3, duration: 0.35, ease: "power2.in" }, 2.0)
      .to(".loader__brand", { opacity: 0, y: -20, duration: 0.35 }, 2.05)
      .to(".loader__panels i", { yPercent: -100, duration: 0.7, ease: "power3.inOut", stagger: 0.06 }, 2.3)
      .to([".loader__grid", path], { opacity: 0, duration: 0.35 }, 2.4);
  });

  /* =========================================================
     HERO — entrance, card stack, light/dark nav, section spy
     ========================================================= */
  const heroIn = gsap.timeline({ paused: true })
    .from(".hero__lead .eyebrow", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, 0)
    .from(".hero__title > span", { opacity: 0, x: -60, duration: 0.9, ease: "power3.out", stagger: 0.12 }, 0.05)
    .from([".hero__lede", ".hero__ctas"], { opacity: 0, y: 24, duration: 0.8, ease: "power3.out", stagger: 0.1 }, 0.4)
    .from(".stack__card", { opacity: 0, y: 80, rotate: 8, duration: 1, ease: "power3.out", stagger: 0.08 }, 0.2)
    .from(".hero__ticker", { yPercent: 100, duration: 0.8, ease: "power3.out" }, 0.5);
  introDone.then(() => heroIn.play());

  // card stack: one card in front, the rest fanned and blurred behind; rotates every few seconds
  const stackCards = gsap.utils.toArray(".stack__card");
  const slots = [
    { x: 0, y: 0, scale: 1, rotate: 0, blur: 0, z: 5, opacity: 1 },
    { x: 34, y: 6, scale: 0.8, rotate: 6, blur: 6, z: 4, opacity: 0.85 },
    { x: -36, y: 8, scale: 0.78, rotate: -7, blur: 7, z: 3, opacity: 0.8 },
    { x: 58, y: 14, scale: 0.62, rotate: 10, blur: 10, z: 2, opacity: 0.5 },
    { x: -58, y: 16, scale: 0.6, rotate: -11, blur: 10, z: 1, opacity: 0.45 },
  ];
  let front = 0;
  const layoutStack = (instant) => {
    stackCards.forEach((card, i) => {
      const s = slots[(i - front + stackCards.length) % stackCards.length];
      gsap.to(card, {
        xPercent: s.x, yPercent: s.y, scale: s.scale, rotate: s.rotate, opacity: s.opacity, zIndex: s.z,
        filter: `blur(${s.blur}px)`, duration: instant ? 0 : 0.7, ease: "power3.inOut",
      });
      card.classList.toggle("is-front", s.z === 5);
    });
  };
  if (stackCards.length) {
    layoutStack(true);
    if (!reduce) {
      const next = () => { front = (front + 1) % stackCards.length; layoutStack(); };
      let stackTimer = setInterval(next, 2000);
      stackCards.forEach((card, i) => card.addEventListener("click", () => {
        front = i;
        layoutStack();
        clearInterval(stackTimer);
        stackTimer = setInterval(next, 2000);
      }));
      // gentle tilt toward the cursor
      const stack = document.querySelector(".stack");
      const tiltX = gsap.quickTo(stack, "rotateX", { duration: 0.8, ease: "power2.out" });
      const tiltY = gsap.quickTo(stack, "rotateY", { duration: 0.8, ease: "power2.out" });
      window.addEventListener("pointermove", (e) => {
        tiltY(((e.clientX / window.innerWidth) * 2 - 1) * 8);
        tiltX(-((e.clientY / window.innerHeight) * 2 - 1) * 6);
      }, { passive: true });
    }
  }

  // nav reads dark-on-light over the hero, light-on-dark everywhere else
  ScrollTrigger.create({
    trigger: ".hero",
    start: "top bottom", // already active at the very top of the page
    end: () => `top+=${Math.round(window.innerHeight * 0.92)} top`,
    toggleClass: { targets: nav, className: "on-light" },
  });

  // pill nav highlights the section in view
  const navLinks = [...document.querySelectorAll(".nav__links a")];
  navLinks.forEach((a) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    ScrollTrigger.create({
      trigger: target,
      start: "top 45%",
      end: "bottom 45%",
      onToggle: (st) => st.isActive && navLinks.forEach((l) => l.classList.toggle("is-current", l === a)),
    });
  });

  // hero recedes as the About sheet slides over it (transform + overlay opacity only: cheap to paint)
  const recede = (pin, shade, trigger) => {
    const st = { trigger, start: "top bottom", end: "top top", scrub: true };
    gsap.to(pin, { scale: 0.94, borderRadius: "28px", ease: "none", scrollTrigger: st });
    gsap.to(shade, { opacity: 0.72, ease: "none", scrollTrigger: { ...st } });
  };
  recede(".hero__pin", ".hero__shade", ".manifesto");

  /* =========================================================
     ABOUT — word-by-word reveal + glowing emblem
     ========================================================= */
  const textEl = document.querySelector("[data-words]");
  const wrapWords = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(" "));
          else {
            const s = document.createElement("span");
            s.className = "w";
            s.textContent = part;
            frag.appendChild(s);
          }
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) wrapWords(child);
    });
  };
  wrapWords(textEl);
  const words = [...textEl.querySelectorAll(".w")];
  let lit = -1;
  ScrollTrigger.create({
    trigger: ".manifesto",
    start: "top 35%", // words start lighting while the sheet is still rising
    end: "bottom bottom",
    onUpdate: (st) => {
      const n = Math.round(clamp(st.progress / 0.8, 0, 1) * words.length);
      if (n === lit) return;
      lit = n;
      words.forEach((w, i) => w.classList.toggle("on", i < n));
    },
  });
  gsap.from(".manifesto__visual", {
    scale: 0.7, opacity: 0, rotate: -12, ease: "power2.out",
    scrollTrigger: { trigger: ".manifesto", start: "top 80%", end: "top 20%", scrub: true },
  });
  // climber walks the route to the summit flag as the About sheet scrolls
  const peakTrail = document.querySelector(".peak__trail");
  const peakClimber = document.querySelector(".peak__climber");
  const peakRoute = document.querySelector(".peak__route");
  const routeLen = peakRoute.getTotalLength();
  ScrollTrigger.create({
    trigger: ".manifesto",
    start: "top 60%",
    end: "bottom bottom",
    onUpdate: (st) => {
      const p = clamp(st.progress / 0.85, 0, 1);
      peakTrail.style.strokeDashoffset = 1 - p;
      const pt = peakRoute.getPointAtLength(p * routeLen);
      peakClimber.setAttribute("cx", pt.x);
      peakClimber.setAttribute("cy", pt.y);
    },
  });
  const embers = document.querySelector(".embers");
  for (let i = 0; i < 22; i++) {
    const e = document.createElement("i");
    e.style.left = 20 + Math.random() * 60 + "%";
    e.style.animationDuration = 4 + Math.random() * 6 + "s";
    e.style.animationDelay = -Math.random() * 8 + "s";
    e.style.setProperty("--dx", (Math.random() - 0.5) * 120 + "px");
    const sz = 2 + Math.random() * 4;
    e.style.width = e.style.height = sz + "px";
    embers.appendChild(e);
  }

  /* =========================================================
     SERVICES — scroll-driven list + sticky visual panel
     ========================================================= */
  const svcData = [
    ["Every rupee pulls its weight.", "Performance marketing"],
    ["Page one, then position one.", "SEO & content"],
    ["Thumb-stopping, on schedule.", "Social media"],
    ["Say it once. Say it well.", "Brand identity"],
    ["Visitors in. Leads out.", "Web design & CRO"],
  ];
  const svcs = gsap.utils.toArray(".svc");
  const svcInner = document.querySelector(".svc-list__inner");
  const svcBox = document.querySelector(".svc-list");
  const arts = gsap.utils.toArray(".svc-art");
  const svcBars = gsap.utils.toArray(".svc-panel__bars i");
  const bigNum = document.querySelector(".svc-panel__big");
  const capLine = document.querySelector(".svc-panel__line");
  const capLabel = document.querySelector(".svc-panel__label");
  const moveY = gsap.quickTo(svcInner, "y", { duration: 0.7, ease: "power3.out" });
  let active = -1;
  const setActive = (i) => {
    if (i === active) return;
    active = i;
    svcs.forEach((el, k) => el.classList.toggle("is-active", k === i));
    arts.forEach((el, k) => el.classList.toggle("is-on", k === i));
    svcBars.forEach((el, k) => el.classList.toggle("on", k <= i));
    bigNum.textContent = pad2(i + 1);
    gsap.fromTo(bigNum, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 0.9, duration: 0.6, ease: "power3.out" });
    capLine.textContent = svcData[i][0];
    capLabel.textContent = svcData[i][1];
    gsap.fromTo([capLine, capLabel], { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
  };
  const centerOf = (el) => el.offsetTop + el.offsetHeight / 2;
  ScrollTrigger.create({
    trigger: ".services__stage",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (st) => {
      const f = clamp(st.progress * svcs.length - 0.5, 0, svcs.length - 1);
      const a = Math.floor(f), b = Math.min(a + 1, svcs.length - 1);
      moveY(svcBox.clientHeight / 2 - lerp(centerOf(svcs[a]), centerOf(svcs[b]), smooth(f - a)));
      setActive(Math.round(f));
    },
  });
  setActive(0);
  gsap.set(svcInner, { y: () => svcBox.clientHeight / 2 - centerOf(svcs[0]) });
  gsap.from(".services__head > *", {
    y: 50, opacity: 0, stagger: 0.12, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: ".services__head", start: "top 85%" },
  });

  /* =========================================================
     THE CLIMB, CONNECTED — rungs light up as you scroll
     ========================================================= */
  const rungSteps = gsap.utils.toArray(".connect__steps li");
  const rungs = gsap.utils.toArray(".connect__ladder .rungs line");
  const litRails = gsap.utils.toArray(".connect__ladder .rail--lit");
  const climber = document.querySelector(".connect__ladder .climber");
  const connectIdx = document.querySelector(".connect__idx");
  const rungY = rungs.map((r) => +r.getAttribute("y1"));
  let rungOn = -1;
  ScrollTrigger.create({
    trigger: ".connect",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (st) => {
      const f = clamp(st.progress * rungSteps.length, 0, rungSteps.length - 0.001);
      const i = Math.floor(f);
      // climber glides between rungs; the lit rails follow it up
      const y = lerp(rungY[i], rungY[Math.min(i + 1, rungY.length - 1)], smooth(clamp((f - i - 0.6) / 0.4, 0, 1)));
      climber.setAttribute("cy", y);
      litRails.forEach((r) => r.setAttribute("y1", y));
      if (i === rungOn) return;
      rungOn = i;
      rungSteps.forEach((s, k) => {
        s.classList.toggle("is-active", k === i);
        s.classList.toggle("is-past", k < i);
      });
      rungs.forEach((r, k) => r.classList.toggle("on", k <= i));
      connectIdx.textContent = pad2(i + 1);
    },
  });
  gsap.from(".connect__head > *", {
    y: 40, opacity: 0, stagger: 0.1, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: ".connect", start: "top 70%" },
  });

  /* =========================================================
     WHY CLIMBX — swipeable reasons with arrows + counter
     ========================================================= */
  const reasonTrack = document.querySelector(".reasons__track");
  const reasonCards = gsap.utils.toArray(".reason");
  const reasonCount = document.querySelector(".reasons__count b");
  const cardStep = () => reasonCards[0].offsetWidth + parseFloat(getComputedStyle(reasonTrack).columnGap || 18);
  document.querySelectorAll(".reasons__btn").forEach((b) =>
    b.addEventListener("click", () => reasonTrack.scrollBy({ left: cardStep() * +b.dataset.dir, behavior: "smooth" }))
  );
  reasonTrack.addEventListener("scroll", () => {
    reasonCount.textContent = pad2(clamp(Math.round(reasonTrack.scrollLeft / cardStep()), 0, reasonCards.length - 1) + 1);
  }, { passive: true });
  // a sideways swipe over the cards scrolls the cards, not the page
  reasonTrack.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.stopPropagation();
  }, { passive: true });
  gsap.from(reasonCards, {
    y: 60, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: ".reasons", start: "top 70%" },
  });

  /* =========================================================
     HOW WE CLIMB — horizontal steps, altimeter, warming sky
     ========================================================= */
  const steps = gsap.utils.toArray(".step");
  const stepTrack = document.querySelector(".process__track");
  const altNum = document.querySelector(".alt-num");
  const altStatus = document.querySelector(".alt-status");
  const altFill = document.querySelector(".altimeter__fill");
  const altKnob = document.querySelector(".altimeter__knob");
  const stepIdx = document.querySelector(".step-idx");
  const progBar = document.querySelector(".process__progress i");
  const sky = document.querySelector(".process__sky");
  const mix = (c1, c2, t) => {
    const a = c1.match(/\w\w/g).map((x) => parseInt(x, 16));
    const b = c2.match(/\w\w/g).map((x) => parseInt(x, 16));
    return "rgb(" + a.map((v, i) => Math.round(lerp(v, b[i], t))).join(",") + ")";
  };
  let climbP = 0;
  ScrollTrigger.create({
    trigger: ".process",
    start: "top top",
    end: () => "+=" + window.innerHeight * 2.9,
    onUpdate: (st) => {
      const p = (climbP = st.progress);
      // rest on each card, glide between them
      const t = p * 2;
      const seg = Math.min(Math.floor(t), 1);
      const fr = t - seg;
      const glide = fr < 0.25 ? 0 : fr > 0.75 ? 1 : smooth((fr - 0.25) / 0.5);
      const fIdx = p >= 1 ? 2 : seg + glide;
      const stepW = steps[0].offsetWidth + parseFloat(getComputedStyle(stepTrack).gap);
      gsap.set(stepTrack, { x: -fIdx * stepW });
      const idx = Math.round(fIdx);
      steps.forEach((s, k) => {
        s.classList.toggle("is-active", k === idx);
        s.classList.toggle("is-past", k < fIdx - 0.35);
      });
      stepIdx.textContent = pad2(idx + 1);
      progBar.style.transform = `scaleX(${p})`;
      const alt = Math.round(p * 8848);
      altNum.textContent = alt.toLocaleString("en-US");
      altStatus.textContent = alt < 2500 ? "Base camp" : alt < 8000 ? "Ascending" : "Summit reached";
      altFill.style.transform = `scaleY(${p})`;
      altKnob.style.bottom = `calc(${p * 100}% - 11px)`;
      sky.style.setProperty("--sky-a", mix("2a1300", "d4831a", p));
      sky.style.setProperty("--sky-b", mix("0b0603", "3a1a02", p));
    },
  });

  // rising embers, drawn from one pre-rendered glow sprite (no per-particle blur)
  const pc = document.querySelector(".process__particles");
  const ctx = pc.getContext("2d");
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 32;
  const sctx = sprite.getContext("2d");
  const glow = sctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  glow.addColorStop(0, "rgba(255,214,140,1)");
  glow.addColorStop(0.25, "rgba(245,166,35,.9)");
  glow.addColorStop(1, "rgba(245,166,35,0)");
  sctx.fillStyle = glow;
  sctx.fillRect(0, 0, 32, 32);
  let embersOn = false, parts = [];
  const pcResize = () => {
    const dpr = Math.min(window.devicePixelRatio, 2);
    pc.width = pc.clientWidth * dpr;
    pc.height = pc.clientHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    parts = Array.from({ length: 80 }, () => ({
      x: Math.random() * pc.clientWidth, y: Math.random() * pc.clientHeight,
      r: 4 + Math.random() * 8, v: 0.2 + Math.random() * 0.8, w: Math.random() * Math.PI * 2,
    }));
  };
  pcResize();
  window.addEventListener("resize", pcResize);
  new IntersectionObserver(([e]) => (embersOn = e.isIntersecting)).observe(pc);
  const drawEmbers = () => {
    requestAnimationFrame(drawEmbers);
    if (!embersOn || reduce) return;
    const W = pc.clientWidth, H = pc.clientHeight, boost = 1 + climbP * 2.5;
    ctx.clearRect(0, 0, W, H);
    for (const q of parts) {
      q.y -= q.v * boost;
      q.w += 0.02;
      q.x += Math.sin(q.w) * 0.3;
      if (q.y < -12) { q.y = H + 12; q.x = Math.random() * W; }
      ctx.globalAlpha = 0.35 + 0.55 * (q.r / 12);
      ctx.drawImage(sprite, q.x - q.r, q.y - q.r, q.r * 2, q.r * 2);
    }
  };
  drawEmbers();

  // "How we climb" recedes under the founder + FAQ sheet
  recede(".process__pin", ".process__shade", "#faq");

  /* =========================================================
     FOUNDER + FAQ
     ========================================================= */
  gsap.from(".founder__photo", {
    y: 60, opacity: 0, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: ".founder", start: "top 75%" },
  });
  // keep only one answer open at a time
  const faqItems = [...document.querySelectorAll(".faq__list details")];
  faqItems.forEach((d) => d.addEventListener("toggle", () => {
    if (d.open) faqItems.forEach((o) => o !== d && (o.open = false));
  }));

  /* =========================================================
     CONTACT — free-audit request goes to WhatsApp
     ========================================================= */
  gsap.from([".contact__intro > *", ".contact__card"], {
    y: 40, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: ".contact", start: "top 60%" },
  });

  const form = document.querySelector(".contact__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const field = (id) => form.querySelector(id).value.trim();
    const ok = form.querySelector(".contact__ok");
    const name = field("#name"), phone = field("#phone"), link = field("#link"), msg = field("#msg");
    form.querySelectorAll(".is-invalid").forEach((f) => f.classList.remove("is-invalid"));
    if (!name) {
      ok.textContent = "Add your name so we know who to reply to.";
      form.querySelector("#name").classList.add("is-invalid");
      form.querySelector("#name").focus();
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      ok.textContent = "Add a WhatsApp number we can send your audit to.";
      form.querySelector("#phone").classList.add("is-invalid");
      form.querySelector("#phone").focus();
      return;
    }
    // no server yet: open WhatsApp with the request filled in, addressed to the studio
    const text = [
      "Hi ClimbX Digital, I'd like a free audit.",
      `Name: ${name}`,
      `WhatsApp: ${phone}`,
      link && `Website / Instagram: ${link}`,
      msg && `Notes: ${msg}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/918767198554?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    ok.textContent = "Opening WhatsApp with your request. Just hit send.";
  });

  /* =========================================================
     SMALL TOUCHES
     ========================================================= */
  // magnetic buttons (pointer devices only)
  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".btn").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4 });
      });
      b.addEventListener("pointerleave", () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" }));
    });
  }

  // custom cursor: the dot follows the mouse exactly, the ring trails behind (mouse users only)
  const cursor = document.querySelector(".cursor");
  if (cursor && !reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.documentElement.classList.add("has-cursor");
    const dot = cursor.querySelector(".cursor__dot");
    const ring = cursor.querySelector(".cursor__ring");
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const hoverables = "a, button, summary, .stack__card, .reasons__btn, label";
    window.addEventListener("pointermove", (e) => {
      dotX(e.clientX); dotY(e.clientY);
      ringX(e.clientX); ringY(e.clientY);
      cursor.classList.add("is-visible");
      cursor.classList.toggle("is-hover", !!e.target.closest(hoverables));
    }, { passive: true });
    document.addEventListener("pointerleave", () => cursor.classList.remove("is-visible"));
    window.addEventListener("blur", () => cursor.classList.remove("is-visible"));
    window.addEventListener("pointerdown", () => cursor.classList.add("is-down"));
    window.addEventListener("pointerup", () => cursor.classList.remove("is-down"));
  }

  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
