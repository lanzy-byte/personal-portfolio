import React, { useState, useRef, useEffect } from 'react';
import { CV_TEXT, FAQS, TECHNICAL_SKILLS, SOFT_SKILLS, CERTIFICATIONS, CONTACT, THESIS_SHORT, THESIS_LONG } from '../data/cv';
import { PROJECTS } from '../data/projects';

type Message = { from: 'bot' | 'user'; text: string };

type DragState = {
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
};

function findAnswer(question: string) {
  const q = question.toLowerCase();
  // simple keyword-based heuristics
  if (/email|contact|mail/.test(q)) {
    const m = CV_TEXT.match(/[\w.-]+@\w+\.\w+/);
    return m ? `Email: ${m[0]}` : "I couldn't find an email in the CV.";
  }
  if (/phone|contact|099|\d{9,}/.test(q)) {
    const m = CV_TEXT.match(/0\d{9,}/);
    return m ? `Phone: ${m[0]}` : "I couldn't find a phone number in the CV.";
  }
  if (/technical\s*skills/i.test(q) || /what\s+are\s+.*technical/i.test(q)) {
    return TECHNICAL_SKILLS.map(s => `- ${s}`).join('\n');
  }
  if (/soft\s*skills/i.test(q) || /what\s+are\s+.*soft/i.test(q)) {
    return SOFT_SKILLS.map(s => `- ${s}`).join('\n');
  }
  if (/certificat/i.test(q)) {
    return CERTIFICATIONS.map(c => `- ${c}`).join('\n');
  }
  if (/project|projects|list projects/i.test(q)) {
    return PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n');
  }
  if (/what\s+is\s+lanze\s*'?s?\s*thesis/i.test(q) || /what\s+is\s+lanze\s+thesis/i.test(q) || (q.includes('lanze') && q.includes('thesis'))) {
    return THESIS_SHORT;
  }
  if (/what\s+is\s+it\s+all\s+about|what\s+is\s+it\s+about/i.test(q) || /what\s+is\s+the\s+thesis\s+about/i.test(q) || (q.includes('thesis') && q.includes('about'))) {
    return THESIS_LONG;
  }
  if (/education|study|university|school|degree/.test(q)) {
    const m = CV_TEXT.match(/Southern\s+Luzon[\s\S]*?\n/);
    return m ? `Education: ${m[0].trim()}` : "No education details found.";
  }
  if (/experience|intern|freelance|work/.test(q)) {
    // return a few lines that mention experience
    const lines = CV_TEXT.split('\n').filter((l) => /Intern|Freelance|Developed|Managed/i.test(l));
    return lines.length ? lines.slice(0, 6).join(' ') : "No work experience details found.";
  }

  // fallback: find sentences matching keywords from query
  const sentences = CV_TEXT.split(/(?<=[.?!\n])\s+/).map(s => s.trim()).filter(Boolean);
  let best = sentences.find(s => q.split(/\s+/).some(w => w && s.toLowerCase().includes(w)));
  if (best) return best;

  return "Sorry — I couldn't find a clear answer in the CV. Try one of the FAQs below.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Hi — I'm BOJI. Ask me anything about Lanze's CV or pick a FAQ." }
  ]);
  const [value, setValue] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isIconDragging, setIsIconDragging] = useState(false);
  const iconDragRef = useRef<DragState | null>(null);
  const clickAllowedRef = useRef(true);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    if (iconPosition.x === 0 && iconPosition.y === 0) {
      setIconPosition({
        x: window.innerWidth - 92,
        y: window.innerHeight - 140,
      });
    }
  }, [iconPosition.x, iconPosition.y]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!iconDragRef.current) return;
      const nextX = iconDragRef.current.offsetX + event.clientX - iconDragRef.current.startX;
      const nextY = iconDragRef.current.offsetY + event.clientY - iconDragRef.current.startY;
      setIconPosition({
        x: Math.min(window.innerWidth - 76, Math.max(16, nextX)),
        y: Math.min(window.innerHeight - 76, Math.max(16, nextY)),
      });
      const moved = Math.hypot(event.clientX - iconDragRef.current.startX, event.clientY - iconDragRef.current.startY);
      if (moved > 4) clickAllowedRef.current = false;
    };
    const handleUp = () => {
      iconDragRef.current = null;
      setIsIconDragging(false);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  function send(q: string) {
    if (!q.trim()) return;
    const userMsg: Message = { from: 'user', text: q };
    setMessages(m => [...m, userMsg]);
    setValue('');
    // simulate thinking
    setTimeout(() => {
      const answer = findAnswer(q);
      const botMsg: Message = { from: 'bot', text: answer };
      setMessages(m => [...m, botMsg]);
    }, 300);
  }

  return (
    <>
      {/* BOJI floating icon */}
      <button
        aria-label="Open BOJI chat"
        onClick={() => { if (clickAllowedRef.current) setOpen(true); clickAllowedRef.current = true; }}
        onMouseDown={(event) => {
          if (event.button !== 0) return;
          iconDragRef.current = {
            startX: event.clientX,
            startY: event.clientY,
            offsetX: iconPosition.x,
            offsetY: iconPosition.y,
          };
          setIsIconDragging(true);
          clickAllowedRef.current = true;
        }}
        className={`fixed z-50 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 shadow-2xl transition-transform ${isIconDragging ? 'cursor-grabbing scale-105' : 'cursor-grab hover:scale-110'}`}
        style={{ top: iconPosition.y, left: iconPosition.x, animation: 'boji-bob 3s infinite, boji-glow 2.8s infinite' }}
      >
        <span className="sr-only">Open BOJI</span>
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 overflow-hidden">
          <img src="/img/boji.gif" alt="BOJI" className="h-full w-full object-cover" />
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900/95 p-5 text-slate-100 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
                  <img src="/img/boji2.png" alt="BOJI" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">BOJI — Resume assistant</div>
                  <div className="text-xs text-slate-400">Answers based on the uploaded CV</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-slate-400" onClick={() => { setMessages([{ from: 'bot', text: "Hi — I'm BOJI. Ask me anything about Lanze's CV or pick a FAQ." }]); setValue(''); }}>Reset</button>
                <button onClick={() => setOpen(false)} className="rounded bg-white/6 px-3 py-1 text-sm">Close</button>
              </div>
            </div>

            <div className="mt-5 max-h-72 overflow-auto rounded-2xl border border-white/10 p-4">
              {messages.map((m, idx) => (
                <div key={idx} className={`mb-4 flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`${m.from === 'bot' ? 'bg-white/10 text-slate-100' : 'bg-sky-400 text-slate-900'} max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed`}>{m.text}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="mt-4 flex gap-3">
              <input
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send(value); }}
                placeholder="Ask about education, skills, experience..."
                className="flex-1 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm outline-none"
              />
              <button onClick={() => send(value)} className="rounded-2xl bg-sky-400 px-4 py-3 font-semibold text-slate-900">Send</button>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-xs text-slate-400">FAQs</div>
              <div className="flex flex-wrap gap-2">
                {FAQS.map((f) => (
                  <button key={f} onClick={() => send(f)} className="rounded-full bg-white/5 px-3 py-2 text-xs text-slate-200">{f}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
