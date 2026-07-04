import { useState } from "react";

// Stable Money Color System (derived from app/brand)
const C = {
  bg: "#F7F6FB",
  surface: "#F0EFF5",
  card: "#FFFFFF",
  cardHover: "#F0EBFF",
  border: "#E5E7EB",
  teal: "#6C3CE0",
  tealDark: "#5B2BC7",
  tealBg: "rgba(108,60,224,0.06)",
  amber: "#D97706",
  amberBg: "rgba(217,119,6,0.06)",
  red: "#EF4444",
  redBg: "rgba(239,68,68,0.06)",
  green: "#10B981",
  greenBg: "rgba(16,185,129,0.06)",
  white: "#1E1B39",
  textPrimary: "#1E1B39",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
};

const screens = [
  "report_issue",
  "auto_investigation",
  "status_tracker",
  "follow_up_48h",
  "resolved",
  "ticket_list",
];

const screenLabels = [
  "Report Issue",
  "Auto-Investigation",
  "Status Tracker",
  "48h Follow-up",
  "Resolved",
  "My Tickets",
];

export default function SilentCoordinator() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [showWireframe, setShowWireframe] = useState(false);

  return (
    <div style={{ background: "#EEEAF5", minHeight: "100vh", padding: "24px 16px", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ maxWidth: 900, margin: "0 auto 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <div style={{ width: 32, height: 32, background: C.teal, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L20 7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: C.white, fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Silent Coordinator</span>
          <span style={{ color: C.textMuted, fontSize: 13, marginLeft: "auto" }}>Stable Money Integration</span>
        </div>
        <p style={{ color: C.textSecondary, fontSize: 13, margin: "8px 0 16px", lineHeight: 1.5 }}>
          Automated issue resolution workflow — from complaint to closure without manual intervention for 90% of cases.
        </p>

        {/* Toggle */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <button
            onClick={() => setShowWireframe(false)}
            style={{
              padding: "7px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
              background: !showWireframe ? C.teal : "#F0EFF5",
              color: !showWireframe ? "#FFFFFF" : C.textSecondary,
            }}
          >
            High-Fidelity UI
          </button>
          <button
            onClick={() => setShowWireframe(true)}
            style={{
              padding: "7px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
              background: showWireframe ? C.teal : "#F0EFF5",
              color: showWireframe ? "#FFFFFF" : C.textSecondary,
            }}
          >
            Wireframe
          </button>
        </div>

        {/* Screen Tabs */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          {screenLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveScreen(i)}
              style={{
                padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeScreen === i ? C.teal : C.border}`,
                background: activeScreen === i ? C.tealBg : "transparent",
                color: activeScreen === i ? C.teal : C.textSecondary,
                fontSize: 12, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Phone Frame */}
      <div style={{ maxWidth: 380, margin: "0 auto" }}>
        <div style={{
          background: showWireframe ? "#F0EFF5" : C.bg,
          borderRadius: 40,
          border: "2px solid #E0DDE8",
          padding: "48px 0 24px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(108,60,224,0.08)",
          position: "relative",
        }}>
          {/* Notch */}
          <div style={{
            position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
            width: 120, height: 28, borderRadius: 14,
            background: "#1E1B39",
          }} />

          {/* Status Bar */}
          <div style={{ padding: "0 24px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: C.textSecondary, fontSize: 12, fontWeight: 600 }}>9:41</span>
            <div style={{ display: "flex", gap: 4 }}>
              <div style={{ width: 16, height: 10, borderRadius: 2, border: `1px solid ${C.textMuted}` }}>
                <div style={{ width: 10, height: 6, background: C.textSecondary, borderRadius: 1, margin: "1px" }} />
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div style={{ padding: "0 20px 20px", minHeight: 580 }}>
            {activeScreen === 0 && (showWireframe ? <WF_ReportIssue /> : <UI_ReportIssue />)}
            {activeScreen === 1 && (showWireframe ? <WF_AutoInvestigation /> : <UI_AutoInvestigation />)}
            {activeScreen === 2 && (showWireframe ? <WF_StatusTracker /> : <UI_StatusTracker />)}
            {activeScreen === 3 && (showWireframe ? <WF_FollowUp /> : <UI_FollowUp />)}
            {activeScreen === 4 && (showWireframe ? <WF_Resolved /> : <UI_Resolved />)}
            {activeScreen === 5 && (showWireframe ? <WF_TicketList /> : <UI_TicketList />)}
          </div>

          {/* Bottom Nav */}
          <BottomNav wireframe={showWireframe} />
        </div>
      </div>

      {/* Screen Description */}
      <div style={{ maxWidth: 380, margin: "20px auto 0" }}>
        <ScreenDescription index={activeScreen} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// BOTTOM NAV
// ═══════════════════════════════════════
function BottomNav({ wireframe }) {
  const items = [
    { label: "Home", icon: "⌂" },
    { label: "Invest", icon: "↗" },
    { label: "Portfolio", icon: "◧" },
    { label: "Support", icon: "◉", active: true },
    { label: "More", icon: "≡" },
  ];
  return (
    <div style={{
      display: "flex", justifyContent: "space-around", padding: "10px 16px 4px",
      borderTop: `1px solid ${wireframe ? "#E5E7EB" : C.border}`,
    }}>
      {items.map((item, i) => (
        <div key={i} style={{ textAlign: "center", cursor: "pointer" }}>
          <div style={{
            fontSize: 18,
            color: item.active ? C.teal : (wireframe ? "#9CA3AF" : C.textMuted),
          }}>{item.icon}</div>
          <div style={{
            fontSize: 10, marginTop: 2,
            color: item.active ? C.teal : (wireframe ? "#9CA3AF" : C.textMuted),
            fontWeight: item.active ? 600 : 400,
          }}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════
// SCREEN DESCRIPTIONS
// ═══════════════════════════════════════
function ScreenDescription({ index }) {
  const descs = [
    { title: "Screen 1: Report Issue", desc: "User selects issue type from pre-categorized options. Each category maps to a specific automated workflow. The FD selector pulls from the user's active portfolio — no manual entry needed." },
    { title: "Screen 2: Auto-Investigation (Instant)", desc: "Within seconds of submission, the system pulls transaction logs, checks payment gateway status, and fires an automated query to the partner bank's operations contact. User sees all of this happening in real-time." },
    { title: "Screen 3: Status Tracker", desc: "The ticket detail view — user can return anytime to check progress. Each step shows what Stable Money found, what the bank has been asked, and what's pending. No phone call needed." },
    { title: "Screen 4: 48-Hour Follow-Up", desc: "If the bank hasn't responded in 48 hours, the system auto-escalates, sends another query, and updates the user with their transaction reference and direct bank contact details as backup." },
    { title: "Screen 5: Resolved", desc: "Issue resolved. The screen shows what was found, how it was fixed, and offers one-tap options to continue investing — turning a support moment into a re-engagement opportunity." },
    { title: "Screen 6: My Tickets", desc: "All open and resolved tickets in one place. User never has to wonder 'did anyone see my complaint?' Every ticket has a visible ID, status, and timeline." },
  ];
  const d = descs[index];
  return (
    <div style={{ background: C.card, borderRadius: 12, padding: 16, border: `1px solid ${C.border}` }}>
      <div style={{ color: C.teal, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{d.title}</div>
      <div style={{ color: C.textSecondary, fontSize: 12, lineHeight: 1.6 }}>{d.desc}</div>
    </div>
  );
}

// ═══════════════════════════════════════
// HIGH-FIDELITY UI SCREENS
// ═══════════════════════════════════════

function UI_ReportIssue() {
  const [selected, setSelected] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: C.textMuted, fontSize: 20 }}>←</span>
        <span style={{ color: C.white, fontSize: 17, fontWeight: 700 }}>Report an Issue</span>
      </div>

      {/* FD Selector */}
      <div style={{ background: C.card, borderRadius: 12, padding: 14, marginBottom: 16, border: `1px solid ${C.border}` }}>
        <div style={{ color: C.textMuted, fontSize: 11, marginBottom: 8, fontWeight: 500 }}>SELECT YOUR FD</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg, #6C3CE0, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>SUR</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>Suryoday SF Bank</div>
            <div style={{ color: C.textSecondary, fontSize: 12 }}>₹2,50,000 · 12 months · 8.25%</div>
          </div>
          <span style={{ color: C.textMuted, fontSize: 16 }}>▾</span>
        </div>
      </div>

      {/* Issue Categories */}
      <div style={{ color: C.textMuted, fontSize: 11, marginBottom: 10, fontWeight: 500 }}>WHAT'S THE ISSUE?</div>
      {[
        { icon: "⚠", label: "Money debited but FD not created", sub: "Payment went through but deposit not visible" },
        { icon: "⏳", label: "Withdrawal delayed", sub: "Requested withdrawal but money not received" },
        { icon: "📄", label: "FD certificate missing", sub: "Can't find my FD certificate in the app" },
        { icon: "💳", label: "Interest not credited", sub: "Expected interest payout hasn't arrived" },
        { icon: "🔄", label: "Other FD issue", sub: "Something else related to my deposit" },
      ].map((item, i) => (
        <div
          key={i}
          onClick={() => setSelected(i)}
          style={{
            background: selected === i ? C.tealBg : C.card,
            borderRadius: 12,
            padding: "12px 14px",
            marginBottom: 8,
            border: `1px solid ${selected === i ? C.teal : C.border}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 20 }}>{item.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{item.label}</div>
            <div style={{ color: C.textSecondary, fontSize: 11, marginTop: 2 }}>{item.sub}</div>
          </div>
          <div style={{
            width: 20, height: 20, borderRadius: 10,
            border: `2px solid ${selected === i ? C.teal : C.textMuted}`,
            background: selected === i ? C.teal : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {selected === i && <span style={{ color: "#FFFFFF", fontSize: 12 }}>✓</span>}
          </div>
        </div>
      ))}

      {/* Submit */}
      <button style={{
        width: "100%", padding: 14, borderRadius: 12, border: "none",
        background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
        color: "#FFFFFF", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8,
      }}>
        Investigate My Issue
      </button>
      <div style={{ color: C.textMuted, fontSize: 11, textAlign: "center", marginTop: 8 }}>
        Automated check starts immediately — no wait time
      </div>
    </div>
  );
}

function UI_AutoInvestigation() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: C.textMuted, fontSize: 20 }}>←</span>
        <span style={{ color: C.white, fontSize: 17, fontWeight: 700 }}>Investigating...</span>
      </div>

      {/* Animated Header Card */}
      <div style={{
        background: "rgba(108,60,224,0.06)",
        borderRadius: 16, padding: 20, marginBottom: 20, border: "1px solid rgba(108,60,224,0.15)",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🔍</div>
        <div style={{ color: C.teal, fontSize: 15, fontWeight: 700 }}>Auto-Investigation in Progress</div>
        <div style={{ color: C.textSecondary, fontSize: 12, marginTop: 4 }}>Checking 3 systems simultaneously</div>
      </div>

      {/* Investigation Steps */}
      {[
        { label: "Checking Stable Money records", detail: "Payment of ₹2,50,000 confirmed via Razorpay", status: "done", time: "0.3s" },
        { label: "Verifying payment gateway", detail: "Transaction ID: RPY_8847291 — Status: SUCCESS", status: "done", time: "1.2s" },
        { label: "Querying Suryoday SF Bank", detail: "Automated status request sent to bank operations", status: "loading", time: "..." },
      ].map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14,
              background: step.status === "done" ? C.teal : C.amberBg,
              border: step.status === "done" ? "none" : `2px solid ${C.amber}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {step.status === "done" ? (
                <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>✓</span>
              ) : (
                <span style={{ color: C.amber, fontSize: 14, animation: "spin 1s linear infinite" }}>◌</span>
              )}
            </div>
            {i < 2 && <div style={{ width: 2, height: 24, background: step.status === "done" ? C.teal : C.border, marginTop: 4 }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>{step.label}</div>
            <div style={{ color: step.status === "done" ? C.green : C.amber, fontSize: 12, marginTop: 2 }}>{step.detail}</div>
            <div style={{ color: C.textMuted, fontSize: 11, marginTop: 2 }}>Completed in {step.time}</div>
          </div>
        </div>
      ))}

      {/* What We Found So Far */}
      <div style={{ background: C.card, borderRadius: 12, padding: 14, marginTop: 8, border: `1px solid ${C.border}` }}>
        <div style={{ color: C.teal, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>WHAT WE'VE FOUND SO FAR</div>
        <div style={{ color: C.textSecondary, fontSize: 12, lineHeight: 1.6 }}>
          Your payment of <span style={{ color: C.white, fontWeight: 600 }}>₹2,50,000</span> was successfully debited on <span style={{ color: C.white, fontWeight: 600 }}>28 Jun 2026 at 3:42 PM</span> and confirmed by the payment gateway. We've sent an automated query to <span style={{ color: C.white, fontWeight: 600 }}>Suryoday SF Bank</span> for FD creation confirmation.
        </div>
      </div>

      {/* Ticket Created */}
      <div style={{
        background: C.tealBg, borderRadius: 12, padding: 14, marginTop: 12,
        border: "1px solid rgba(108,60,224,0.15)", display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{ fontSize: 18 }}>🎫</span>
        <div>
          <div style={{ color: C.teal, fontSize: 13, fontWeight: 600 }}>Ticket #SM-284719 created</div>
          <div style={{ color: C.textSecondary, fontSize: 11 }}>We'll update you within 48 hours</div>
        </div>
      </div>
    </div>
  );
}

function UI_StatusTracker() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: C.textMuted, fontSize: 20 }}>←</span>
        <span style={{ color: C.white, fontSize: 17, fontWeight: 700 }}>Ticket #SM-284719</span>
      </div>

      {/* Status Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: C.amberBg, padding: "5px 12px", borderRadius: 20, marginBottom: 16,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: C.amber }} />
        <span style={{ color: C.amber, fontSize: 12, fontWeight: 600 }}>Awaiting Bank Confirmation</span>
      </div>

      {/* FD Details Card */}
      <div style={{ background: C.card, borderRadius: 12, padding: 14, marginBottom: 16, border: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <div>
            <div style={{ color: C.textMuted, fontSize: 11 }}>BANK</div>
            <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>Suryoday SF Bank</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: C.textMuted, fontSize: 11 }}>AMOUNT</div>
            <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>₹2,50,000</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: C.textMuted, fontSize: 11 }}>TRANSACTION ID</div>
            <div style={{ color: C.teal, fontSize: 12, fontWeight: 500 }}>RPY_8847291</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: C.textMuted, fontSize: 11 }}>BOOKED ON</div>
            <div style={{ color: C.textSecondary, fontSize: 12 }}>28 Jun 2026, 3:42 PM</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ color: C.textMuted, fontSize: 11, marginBottom: 12, fontWeight: 500 }}>RESOLUTION TIMELINE</div>
      {[
        { time: "28 Jun, 3:42 PM", label: "Issue reported", detail: "Money debited but FD not visible", status: "done", color: C.teal },
        { time: "28 Jun, 3:42 PM", label: "Payment verified", detail: "₹2,50,000 confirmed by Razorpay", status: "done", color: C.teal },
        { time: "28 Jun, 3:43 PM", label: "Bank query sent", detail: "Automated request to Suryoday operations", status: "done", color: C.teal },
        { time: "—", label: "Awaiting bank response", detail: "Expected within 24-48 hours", status: "current", color: C.amber },
        { time: "—", label: "Resolution", detail: "Will update once bank confirms", status: "pending", color: C.textMuted },
      ].map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 4 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 20 }}>
            <div style={{
              width: step.status === "current" ? 14 : 10, height: step.status === "current" ? 14 : 10,
              borderRadius: "50%",
              background: step.status === "pending" ? "transparent" : step.color,
              border: step.status === "pending" ? `2px solid ${C.textMuted}` : "none",
              boxShadow: step.status === "current" ? `0 0 8px ${C.amber}` : "none",
            }} />
            {i < 4 && <div style={{ width: 2, height: 28, background: step.status !== "pending" ? `${step.color}40` : C.border }} />}
          </div>
          <div style={{ flex: 1, paddingBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: step.status === "pending" ? C.textMuted : C.white, fontSize: 13, fontWeight: 600 }}>{step.label}</span>
              <span style={{ color: C.textMuted, fontSize: 11 }}>{step.time}</span>
            </div>
            <div style={{ color: C.textSecondary, fontSize: 12, marginTop: 2 }}>{step.detail}</div>
          </div>
        </div>
      ))}

      {/* Action Card */}
      <div style={{
        background: C.card, borderRadius: 12, padding: 14, marginTop: 8,
        border: `1px solid ${C.border}`, display: "flex", gap: 10, alignItems: "center",
      }}>
        <span style={{ fontSize: 20 }}>📋</span>
        <div style={{ flex: 1 }}>
          <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>Download Transaction Receipt</div>
          <div style={{ color: C.textSecondary, fontSize: 11 }}>PDF with all transaction details for your records</div>
        </div>
        <span style={{ color: C.teal, fontSize: 16 }}>↓</span>
      </div>
    </div>
  );
}

function UI_FollowUp() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: C.textMuted, fontSize: 20 }}>←</span>
        <span style={{ color: C.white, fontSize: 17, fontWeight: 700 }}>Ticket #SM-284719</span>
      </div>

      {/* Alert Banner */}
      <div style={{
        background: C.amberBg, borderRadius: 12, padding: 14, marginBottom: 16,
        border: `1px solid rgba(255,176,32,0.25)`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 16 }}>⏱</span>
          <span style={{ color: C.amber, fontSize: 14, fontWeight: 700 }}>48-Hour Update</span>
        </div>
        <div style={{ color: C.textSecondary, fontSize: 12, lineHeight: 1.6 }}>
          We're still awaiting confirmation from <span style={{ color: C.white, fontWeight: 600 }}>Suryoday SF Bank</span>. We've sent them a follow-up reminder on your behalf.
        </div>
      </div>

      {/* What We've Done */}
      <div style={{ color: C.textMuted, fontSize: 11, marginBottom: 10, fontWeight: 500 }}>ACTIONS TAKEN</div>
      {[
        { icon: "✓", label: "Payment verified via Razorpay", color: C.teal },
        { icon: "✓", label: "First query sent to bank (28 Jun)", color: C.teal },
        { icon: "✓", label: "Follow-up reminder sent (30 Jun)", color: C.amber },
        { icon: "⏳", label: "Escalation to bank senior ops (if no response by 2 Jul)", color: C.textMuted },
      ].map((item, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "8px 0",
          borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
        }}>
          <span style={{ color: item.color, fontSize: 14, fontWeight: 700, width: 20, textAlign: "center" }}>{item.icon}</span>
          <span style={{ color: item.color === C.textMuted ? C.textMuted : C.textPrimary, fontSize: 13 }}>{item.label}</span>
        </div>
      ))}

      {/* Your Reference */}
      <div style={{ background: C.card, borderRadius: 12, padding: 14, marginTop: 16, border: `1px solid ${C.border}` }}>
        <div style={{ color: C.teal, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>YOUR TRANSACTION REFERENCE</div>
        {[
          { label: "Transaction ID", value: "RPY_8847291" },
          { label: "Amount", value: "₹2,50,000" },
          { label: "Date", value: "28 Jun 2026, 3:42 PM" },
          { label: "Ticket #", value: "SM-284719" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
            <span style={{ color: C.textMuted, fontSize: 12 }}>{row.label}</span>
            <span style={{ color: C.white, fontSize: 12, fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Direct Bank Contact */}
      <div style={{
        background: C.card, borderRadius: 12, padding: 14, marginTop: 12,
        border: `1px solid ${C.border}`,
      }}>
        <div style={{ color: C.textMuted, fontSize: 11, marginBottom: 6, fontWeight: 500 }}>CONTACT BANK DIRECTLY (OPTIONAL)</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: C.white, fontSize: 13, fontWeight: 600 }}>Suryoday SF Bank Helpline</div>
            <div style={{ color: C.textSecondary, fontSize: 12 }}>1800-266-7711 (toll-free)</div>
          </div>
          <button style={{
            padding: "8px 16px", borderRadius: 8, border: `1px solid ${C.teal}`,
            background: "transparent", color: C.teal, fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>
            Call
          </button>
        </div>
        <div style={{ color: C.textMuted, fontSize: 11, marginTop: 8 }}>
          Quote your Transaction ID: RPY_8847291
        </div>
      </div>

      {/* Pre-filled email */}
      <button style={{
        width: "100%", padding: 12, borderRadius: 12, border: `1px solid ${C.border}`,
        background: C.card, color: C.teal, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 12,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}>
        ✉ Send Pre-filled Complaint to Bank
      </button>
    </div>
  );
}

function UI_Resolved() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: C.textMuted, fontSize: 20 }}>←</span>
        <span style={{ color: C.white, fontSize: 17, fontWeight: 700 }}>Ticket #SM-284719</span>
      </div>

      {/* Success Card */}
      <div style={{
        background: "rgba(16,185,129,0.06)",
        borderRadius: 16, padding: 24, marginBottom: 20,
        border: "1px solid rgba(16,185,129,0.15)", textAlign: "center",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 28, background: C.greenBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 12px", border: `2px solid ${C.green}`,
        }}>
          <span style={{ color: C.green, fontSize: 28 }}>✓</span>
        </div>
        <div style={{ color: C.green, fontSize: 17, fontWeight: 700 }}>Issue Resolved</div>
        <div style={{ color: C.textSecondary, fontSize: 13, marginTop: 6 }}>
          Your FD has been confirmed by Suryoday SF Bank
        </div>
      </div>

      {/* Resolution Details */}
      <div style={{ background: C.card, borderRadius: 12, padding: 14, marginBottom: 16, border: `1px solid ${C.border}` }}>
        <div style={{ color: C.teal, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>RESOLUTION SUMMARY</div>
        <div style={{ color: C.textSecondary, fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>
          Your FD of <span style={{ color: C.white, fontWeight: 600 }}>₹2,50,000</span> at <span style={{ color: C.white, fontWeight: 600 }}>8.25% p.a.</span> has been created. The delay was due to a bank processing queue. Your FD certificate is now available in Passbook.
        </div>
        {[
          { label: "FD Certificate", value: "SUR-FD-884729" },
          { label: "Maturity Date", value: "28 Jun 2027" },
          { label: "Expected Returns", value: "₹20,625" },
          { label: "Resolved In", value: "52 hours" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderTop: i === 0 ? `1px solid ${C.border}` : "none" }}>
            <span style={{ color: C.textMuted, fontSize: 12 }}>{row.label}</span>
            <span style={{ color: C.white, fontSize: 12, fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Re-engagement CTA */}
      <div style={{ background: C.card, borderRadius: 12, padding: 14, marginBottom: 12, border: `1px solid ${C.border}` }}>
        <div style={{ color: C.white, fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
          Maximize your DICGC coverage
        </div>
        <div style={{ color: C.textSecondary, fontSize: 12, lineHeight: 1.5, marginBottom: 12 }}>
          You've used ₹2.5L of ₹5L DICGC limit at Suryoday. Consider your next FD at a different bank.
        </div>
        <button style={{
          width: "100%", padding: 12, borderRadius: 10, border: "none",
          background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
          color: "#FFFFFF", fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>
          Explore FDs at Other Banks →
        </button>
      </div>

      {/* Rate Experience */}
      <div style={{ textAlign: "center", padding: "12px 0" }}>
        <div style={{ color: C.textMuted, fontSize: 12, marginBottom: 8 }}>How was your resolution experience?</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {["😞", "😐", "🙂", "😊", "🤩"].map((e, i) => (
            <span key={i} style={{ fontSize: 28, cursor: "pointer", opacity: i === 3 ? 1 : 0.4 }}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function UI_TicketList() {
  const tickets = [
    { id: "SM-284719", bank: "Suryoday SF Bank", amount: "₹2,50,000", issue: "FD not reflecting", status: "resolved", statusColor: C.green, date: "28 Jun" },
    { id: "SM-291034", bank: "Unity SF Bank", amount: "₹1,00,000", issue: "Withdrawal delayed", status: "in progress", statusColor: C.amber, date: "01 Jul" },
    { id: "SM-287455", bank: "Shivalik SF Bank", amount: "₹50,000", issue: "Certificate missing", status: "resolved", statusColor: C.green, date: "15 Jun" },
  ];
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: C.textMuted, fontSize: 20 }}>←</span>
        <span style={{ color: C.white, fontSize: 17, fontWeight: 700 }}>My Tickets</span>
      </div>

      {/* Summary Stats */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {[
          { n: "3", label: "Total", bg: C.card },
          { n: "1", label: "Active", bg: C.amberBg },
          { n: "2", label: "Resolved", bg: C.greenBg },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, background: s.bg, borderRadius: 10, padding: "12px 10px",
            textAlign: "center", border: `1px solid ${C.border}`,
          }}>
            <div style={{ color: C.white, fontSize: 20, fontWeight: 700 }}>{s.n}</div>
            <div style={{ color: C.textMuted, fontSize: 11 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tickets */}
      {tickets.map((t, i) => (
        <div key={i} style={{
          background: C.card, borderRadius: 12, padding: 14, marginBottom: 10,
          border: `1px solid ${C.border}`, cursor: "pointer",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ color: C.teal, fontSize: 12, fontWeight: 600 }}>#{t.id}</span>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              background: t.status === "resolved" ? C.greenBg : C.amberBg,
              padding: "3px 10px", borderRadius: 12,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: t.statusColor }} />
              <span style={{ color: t.statusColor, fontSize: 11, fontWeight: 500, textTransform: "capitalize" }}>{t.status}</span>
            </div>
          </div>
          <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>{t.issue}</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ color: C.textSecondary, fontSize: 12 }}>{t.bank} · {t.amount}</span>
            <span style={{ color: C.textMuted, fontSize: 11 }}>{t.date}</span>
          </div>
        </div>
      ))}

      {/* Average Resolution */}
      <div style={{
        background: C.tealBg, borderRadius: 12, padding: 14, marginTop: 12,
        border: "1px solid rgba(108,60,224,0.12)", textAlign: "center",
      }}>
        <div style={{ color: C.textSecondary, fontSize: 12 }}>Average Resolution Time</div>
        <div style={{ color: C.teal, fontSize: 24, fontWeight: 700, marginTop: 4 }}>38 hours</div>
        <div style={{ color: C.textMuted, fontSize: 11, marginTop: 2 }}>Across your last 3 tickets</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// WIREFRAME SCREENS
// ═══════════════════════════════════════
const WF = {
  bg: "#F7F6FB", card: "#FFFFFF", border: "#D1D5DB", text: "#6B7280", textDim: "#9CA3AF", accent: "#6C3CE0",
};

function WFBox({ children, style }) {
  return <div style={{ background: WF.card, border: `1px dashed ${WF.border}`, borderRadius: 8, padding: 10, marginBottom: 8, ...style }}>{children}</div>;
}
function WFLabel({ children }) {
  return <div style={{ color: WF.textDim, fontSize: 10, fontFamily: "monospace", marginBottom: 4 }}>{children}</div>;
}
function WFText({ children, bold }) {
  return <div style={{ color: WF.text, fontSize: 12, fontFamily: "monospace", fontWeight: bold ? 700 : 400 }}>{children}</div>;
}

function WF_ReportIssue() {
  return (
    <div>
      <WFLabel>← HEADER: "Report an Issue"</WFLabel>
      <WFBox><WFLabel>[FD SELECTOR DROPDOWN]</WFLabel><WFText>Bank name | Amount | Tenure | Rate</WFText></WFBox>
      <WFLabel>ISSUE CATEGORIES (radio select):</WFLabel>
      {["Money debited, FD not created", "Withdrawal delayed", "FD certificate missing", "Interest not credited", "Other"].map((item, i) => (
        <WFBox key={i} style={{ padding: 8 }}><WFText>{i === 0 ? "◉" : "○"} {item}</WFText></WFBox>
      ))}
      <WFBox style={{ background: "#E5E7EB", textAlign: "center" }}><WFText bold>[INVESTIGATE MY ISSUE] button</WFText></WFBox>
      <WFLabel>↳ Triggers automated 3-step check</WFLabel>
    </div>
  );
}

function WF_AutoInvestigation() {
  return (
    <div>
      <WFLabel>← HEADER: "Investigating..."</WFLabel>
      <WFBox style={{ textAlign: "center" }}>
        <WFText bold>🔍 Auto-Investigation</WFText>
        <WFText>Checking 3 systems simultaneously</WFText>
      </WFBox>
      <WFLabel>STEP CHECKLIST (vertical timeline):</WFLabel>
      <WFBox><WFText>✓ Step 1: Check SM records → Payment confirmed</WFText></WFBox>
      <WFBox><WFText>✓ Step 2: Verify gateway → Txn SUCCESS</WFText></WFBox>
      <WFBox><WFText>◌ Step 3: Query bank → Sent, awaiting...</WFText></WFBox>
      <WFBox><WFLabel>FINDINGS SUMMARY CARD</WFLabel><WFText>Payment ₹2.5L confirmed. Bank query sent.</WFText></WFBox>
      <WFBox><WFText>🎫 Ticket #SM-284719 created</WFText><WFText>Update within 48 hours</WFText></WFBox>
    </div>
  );
}

function WF_StatusTracker() {
  return (
    <div>
      <WFLabel>← HEADER: "Ticket #SM-284719"</WFLabel>
      <WFBox style={{ display: "inline-block" }}><WFText>⬤ STATUS: Awaiting Bank Confirmation</WFText></WFBox>
      <WFBox>
        <WFLabel>FD DETAILS CARD</WFLabel>
        <WFText>Bank: Suryoday | ₹2,50,000 | Txn: RPY_884...</WFText>
      </WFBox>
      <WFLabel>VERTICAL TIMELINE:</WFLabel>
      {["● Issue reported (3:42 PM)", "● Payment verified (3:42 PM)", "● Bank query sent (3:43 PM)", "◐ Awaiting bank response", "○ Resolution (pending)"].map((s, i) => (
        <div key={i} style={{ color: WF.text, fontSize: 11, fontFamily: "monospace", padding: "4px 0 4px 16px", borderLeft: `2px solid ${WF.border}` }}>{s}</div>
      ))}
      <WFBox style={{ marginTop: 8 }}><WFText>📋 [Download Transaction Receipt] →</WFText></WFBox>
    </div>
  );
}

function WF_FollowUp() {
  return (
    <div>
      <WFLabel>← HEADER: "Ticket #SM-284719"</WFLabel>
      <WFBox style={{ borderColor: "#D97706" }}>
        <WFText bold>⏱ 48-HOUR UPDATE BANNER</WFText>
        <WFText>Still awaiting bank. Follow-up sent.</WFText>
      </WFBox>
      <WFLabel>ACTIONS TAKEN:</WFLabel>
      <WFBox>
        <WFText>✓ Payment verified</WFText>
        <WFText>✓ First query sent (28 Jun)</WFText>
        <WFText>✓ Follow-up sent (30 Jun)</WFText>
        <WFText>⏳ Escalation if no reply by 2 Jul</WFText>
      </WFBox>
      <WFBox>
        <WFLabel>TRANSACTION REFERENCE CARD</WFLabel>
        <WFText>Txn ID | Amount | Date | Ticket #</WFText>
      </WFBox>
      <WFBox>
        <WFLabel>DIRECT BANK CONTACT</WFLabel>
        <WFText>Suryoday: 1800-266-7711 [Call btn]</WFText>
      </WFBox>
      <WFBox style={{ textAlign: "center" }}><WFText>✉ [Send Pre-filled Complaint] btn</WFText></WFBox>
    </div>
  );
}

function WF_Resolved() {
  return (
    <div>
      <WFLabel>← HEADER: "Ticket #SM-284719"</WFLabel>
      <WFBox style={{ textAlign: "center", borderColor: "#10B981" }}>
        <WFText bold>✓ ISSUE RESOLVED</WFText>
        <WFText>FD confirmed by Suryoday SF Bank</WFText>
      </WFBox>
      <WFBox>
        <WFLabel>RESOLUTION SUMMARY</WFLabel>
        <WFText>FD created. Delay: bank processing queue.</WFText>
        <WFText>Certificate: SUR-FD-884729</WFText>
        <WFText>Resolved in: 52 hours</WFText>
      </WFBox>
      <WFBox>
        <WFLabel>RE-ENGAGEMENT CTA</WFLabel>
        <WFText>DICGC: ₹2.5L used of ₹5L at Suryoday</WFText>
        <WFText bold>[Explore FDs at Other Banks] →</WFText>
      </WFBox>
      <WFBox style={{ textAlign: "center" }}>
        <WFLabel>RATE EXPERIENCE</WFLabel>
        <WFText>😞 😐 🙂 😊 🤩</WFText>
      </WFBox>
    </div>
  );
}

function WF_TicketList() {
  return (
    <div>
      <WFLabel>← HEADER: "My Tickets"</WFLabel>
      <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
        {["3 Total", "1 Active", "2 Resolved"].map((s, i) => (
          <WFBox key={i} style={{ flex: 1, textAlign: "center", marginBottom: 0 }}><WFText>{s}</WFText></WFBox>
        ))}
      </div>
      {[
        { id: "SM-284719", issue: "FD not reflecting", status: "Resolved ✓" },
        { id: "SM-291034", issue: "Withdrawal delayed", status: "In Progress ◐" },
        { id: "SM-287455", issue: "Certificate missing", status: "Resolved ✓" },
      ].map((t, i) => (
        <WFBox key={i}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <WFText bold>#{t.id}</WFText>
            <WFText>{t.status}</WFText>
          </div>
          <WFText>{t.issue}</WFText>
        </WFBox>
      ))}
      <WFBox style={{ textAlign: "center" }}>
        <WFLabel>AVG RESOLUTION TIME</WFLabel>
        <WFText bold>38 hours</WFText>
      </WFBox>
    </div>
  );
}
