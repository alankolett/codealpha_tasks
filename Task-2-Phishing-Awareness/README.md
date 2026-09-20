# PHISH//TRAP — Phishing Awareness & Social Engineering Training
**CodeAlpha Cyber Security Internship — Task 2**

> *“Think before you click. Verify before you trust.”*

---

## 🛡️ Overview

**PHISH//TRAP** is an interactive, SOC-inspired cybersecurity awareness web application designed to train employees, students, and security analysts in recognizing and defending against modern social-engineering attacks.

Built with a dark, terminal-grade cybersecurity interface, **PHISH//TRAP** delivers realistic simulation sandboxes, an interactive email inspection laboratory, a fake website address analyzer, declassified real-world case studies, a practical defensive playbook, and a 10-scenario threat readiness quiz with instant pedagogical feedback.

---

## 🎯 Objectives

- **Demystify the Attack Lifecycle**: Break down social-engineering campaigns into four tangible stages: `LURE → INTERACTION → CREDENTIAL THEFT → ACCOUNT ABUSE`.
- **Cultivate Threat Recognition**: Train users to identify subtle behavioral and technical indicators (typosquatting, look-alike domains, artificial urgency, mismatched branding).
- **Dispel Cybersecurity Myths**: Explain why HTTPS and browser padlock icons guarantee transmission encryption but **do not** prove website authenticity.
- **Provide Actionable Defenses**: Establish the universal **STOP → CHECK → VERIFY → REPORT** workflow to neutralize phishing campaigns before compromise occurs.
- **Empirically Measure Readiness**: Test threat identification across multiple vectors (Email, SMS, MFA push bombing, Vishing, BEC) with automated scoring and readiness classification.

---

## ✨ Features

1. **Cybersecurity / SOC-Themed Interface**:
   - Near-black background with subtle cyber grid textures, neon green (`#00ff88`) primary accents, and threat alerts (`#ff3366`).
   - Sticky navigation bar with live status indicator (`● TRAINING MODULE ONLINE`) and active scroll tracking.

2. **Interactive Attack Lifecycle Pipeline**:
   - Clickable pipeline across **Lure**, **Interaction**, **Credential Theft**, and **Account Abuse**.
   - Inspects attacker motives, tactical vectors, victim impact, and interception points.

3. **Spot the Red Flags & Dynamic Threat Meter**:
   - Interactive 9-point warning sign checklist.
   - Dynamic **Threat Level Gauge** (Nominal → Guarded → Elevated → High → Critical) recalculating in real-time as vulnerabilities are flagged.
   - Detailed dossier cards detailing detection rules and simulated attack lures.

4. **Phishing Email Inspection Lab**:
   - Realistic simulated corporate webmail GUI (mimicking Microsoft Outlook).
   - Interactive clickable hotspots: Sender domain forgery, psychological urgency, fake call-to-action link, and generic headers.
   - Real-time hyperlink hover preview revealing destination URLs.

5. **Fake Website & URL Analyzer**:
   - Simulated browser address bar and Single Sign-On (SSO) login screen.
   - Interactive **`ANALYZE URL`** scanner highlighting deceptive subdomain stacking, typosquatting, and unauthenticated forms.
   - Educational breakdown of the **HTTPS / Padlock fallacy**.

6. **Social Engineering Tactics Workbench**:
   - 6 interactive tactical cards exploring cognitive exploitation: **Urgency**, **Authority**, **Fear**, **Curiosity**, **Reward**, and **Impersonation**.
   - Deconstructs psychological mechanics, real pretexts, and counter-defenses.

7. **Real-World Scenarios (Case Studies)**:
   - Structured analysis format: `WHAT HAPPENED → WARNING SIGNS → LESSON`.
   - Covers Credential Harvesting, Business Email Compromise (BEC), Delivery Smishing, and MFA Fatigue / Vishing attacks.

8. **Practical Defensive Playbook & Universal Directive**:
   - 10-step actionable safety checklist.
   - Grand cybersecurity banner: **`STOP → CHECK → VERIFY → REPORT`**.

9. **Interactive "Phish or Legit?" Evaluation Quiz**:
   - 10 real-world operational scenarios spanning Email, SMS, Phone/Vishing, MFA bombing, and attachments.
   - Immediate feedback showing **Correct / Incorrect status**, in-depth explanations, and highlighted warning signs.
   - Does not jump ahead automatically; allows full review of lessons.

10. **Threat Awareness Score Screen**:
    - Calculates total score (`X / 10`) and percentage readiness rating.
    - Categorizes performance into 4 distinct training tiers:
      - `9–10: PHISHING DEFENSE READY`
      - `7–8: GOOD AWARENESS`
      - `5–6: NEEDS PRACTICE`
      - `0–4: HIGH RISK — COMPLETE TRAINING AGAIN`
    - Retake Quiz and Review Training controls.

---

## 🛠️ Technologies Used

| Technology | Role |
| :--- | :--- |
| **React 19** | Component-driven user interface architecture |
| **TypeScript** | Type-safe data modeling and robust compile-time guarantees |
| **Vite** | Next-generation fast frontend bundler and dev server |
| **Tailwind CSS v4** | Utility-first responsive styling and custom SOC dark theme |
| **Lucide Icons** | Clean, modern cybersecurity iconography |
| **Oxlint / ESLint** | Static code analysis ensuring 0 lint warnings |

---

## 📂 Project Structure

```text
Task-2-Phishing-Awareness/
│
├── index.html                   # HTML entrypoint with metadata and fonts
├── package.json                 # Project dependencies & build scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS v4
├── tsconfig.json                # TypeScript compiler configuration
├── .gitignore                   # Node modules, build artifacts, logs
├── README.md                    # Project documentation & evaluation guide
│
└── src/
    ├── main.tsx                 # React application mounting point
    ├── App.tsx                  # Primary view managing layout & scrollspy
    ├── index.css                # Tailwind CSS imports & theme utilities
    │
    ├── types/
    │   └── index.ts             # TypeScript definitions for quiz, labs, and stages
    │
    ├── data/
    │   └── trainingData.ts      # Structured training datasets & 10 scenarios
    │
    └── components/
        ├── Navbar.tsx           # Sticky SOC header with live status
        ├── Hero.tsx             # Landing hero with terminal telemetry
        ├── LifecycleSection.tsx # 4-stage attack lifecycle explorer
        ├── RedFlagsSection.tsx  # Red flag checklist & threat meter
        ├── EmailLabSection.tsx  # Interactive phishing email dissection lab
        ├── WebsiteAnalyzerSection.tsx # Browser URL scanner & SSL myth
        ├── SocialEngineeringSection.tsx # 6 psychological manipulation cards
        ├── RealWorldSection.tsx # Case studies (What Happened/Signs/Lesson)
        ├── StaySafeSection.tsx  # 10-point checklist & STOP-CHECK-VERIFY
        ├── QuizSection.tsx      # 10-question evaluation & score summary
        └── Footer.tsx           # Final takeaway and ethics disclaimer
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
- **Node.js** (v18 or higher recommended; verified on Node v24)
- **npm** (v9 or higher)

### 2. Installation
Navigate to the project directory and install dependencies:

```bash
cd Task-2-Phishing-Awareness
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the local server URL displayed in your terminal (typically `http://localhost:5173`).

### 4. Build for Production
To compile and test the optimized production build:

```bash
npm run build
```

To preview the production bundle locally:
```bash
npm run preview
```

---

## 📋 CodeAlpha Task Requirements Checklist

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Explain what phishing is** | Defined with clear terminology in [LifecycleSection.tsx](src/components/LifecycleSection.tsx) | ✅ Covered |
| **Attack lifecycle** | 4-stage clickable interactive pipeline (`Lure → Interaction → Theft → Abuse`) | ✅ Covered |
| **Recognize phishing emails** | Interactive 9 red flags checklist + live [EmailLabSection.tsx](src/components/EmailLabSection.tsx) | ✅ Covered |
| **Identify fake websites** | Simulated browser bar & [WebsiteAnalyzerSection.tsx](src/components/WebsiteAnalyzerSection.tsx) with SSL myth explanation | ✅ Covered |
| **Social-engineering tactics** | 6 psychological vector cards (Urgency, Authority, Fear, Curiosity, Reward, Impersonation) | ✅ Covered |
| **Practical prevention tips** | 10-point defensive checklist + **`STOP → CHECK → VERIFY → REPORT`** banner | ✅ Covered |
| **Realistic fictional examples** | Realistic safe simulated emails, web URLs, and 4 structured case studies | ✅ Covered |
| **Interactive quiz** | 10 realistic multi-vector scenarios with immediate feedback in [QuizSection.tsx](src/components/QuizSection.tsx) | ✅ Covered |
| **Score screen & explanations** | Score display (`X / 10`), percentage, 4 tier badges, and explanation per question | ✅ Covered |
| **Professional design** | Dark SOC/cybersecurity aesthetic, responsive, zero console errors, zero build errors | ✅ Covered |

---

## ⚠️ Safety & Ethical Disclaimer

**PHISH//TRAP** was developed strictly for educational and defensive training purposes as part of the **CodeAlpha Cyber Security Internship**.

- All simulated emails, domains (`.example`, `.test`), and companies are completely fictional.
- The application does **not** harvest, store, or transmit credentials or personal data.
- The application contains **no** malicious payloads, tracking beacons, or links to external phishing infrastructure.
- Always obtain written authorization before conducting phishing assessments or simulations on real organizations.

---

## 👤 Author & Acknowledgements

- **Author**: Alan Kolett
- **Internship**: CodeAlpha Cyber Security Internship
- **Task**: Task 2 — Phishing Awareness Training
- **Repository**: [github.com/alankolett/codealpha_tasks](https://github.com/alankolett/codealpha_tasks)
