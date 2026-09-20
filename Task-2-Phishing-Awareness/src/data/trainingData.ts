import type {
  LifecycleStage,
  RedFlagItem,
  EmailHotspot,
  WebsiteAnalysisItem,
  SocialEngineeringTactic,
  CaseStudy,
  QuizQuestion
} from '../types';

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: 'lure',
    number: '01',
    name: 'LURE',
    tag: 'INITIAL HOOK',
    shortDesc: 'Crafting compelling pretexts to bait the target.',
    attackerGoal: 'Evade initial automated mail filters and grab human attention before critical thinking activates.',
    tacticsUsed: [
      'Look-alike display names and deceptive spoofed sender domains',
      'Artificial emotional triggers (urgency, panic, curiosity, or financial incentives)',
      'Impersonating trusted internal leaders, IT desks, or high-profile service providers'
    ],
    victimImpact: 'The recipient feels an emotional impulse to act rather than pause and inspect the incoming communication.',
    defensiveAction: 'Pause. Verify sender headers and authenticate the context before clicking or replying.'
  },
  {
    id: 'interaction',
    number: '02',
    name: 'INTERACTION',
    tag: 'ENGAGEMENT',
    shortDesc: 'Victim engages with the payload or deceptive link.',
    attackerGoal: 'Drive user to click a hyperlink, scan a malicious QR code, or execute an attachment.',
    tacticsUsed: [
      'Prominent "Verify Now", "Review Document", or "Pay Invoice" call-to-action buttons',
      'Obfuscated URL redirects routing through cloud forwarders or compromised websites',
      'Weaponized files (.iso, .zip, password-protected archives, macros)'
    ],
    victimImpact: 'Browser or operating system is directed to attacker-controlled infrastructure or malicious code runs.',
    defensiveAction: 'Hover over hyperlinks to preview true destination. Never open unexpected attachments or archives.'
  },
  {
    id: 'theft',
    number: '03',
    name: 'CREDENTIAL THEFT',
    tag: 'HARVESTING',
    shortDesc: 'Harvesting authentication secrets and MFA tokens.',
    attackerGoal: 'Extract corporate credentials, personal passwords, or active session tokens.',
    tacticsUsed: [
      'Pixel-perfect replica portals mimicking Microsoft 365, Google Workspace, Okta, or banking portals',
      'Adversary-in-the-Middle (AiTM) proxies intercepting multi-factor one-time passcodes (OTP) in real time',
      'Fake form submission endpoints sending input directly to attacker command-and-control servers'
    ],
    victimImpact: 'Attacker obtains valid username, password hash/plaintext, and valid authentication cookie.',
    defensiveAction: 'Inspect URL domain bar closely. Use hardware security keys (FIDO2/WebAuthn) immune to AiTM proxying.'
  },
  {
    id: 'abuse',
    number: '04',
    name: 'ACCOUNT ABUSE',
    tag: 'EXPLOITATION',
    shortDesc: 'Lateral movement, data exfiltration, and extortion.',
    attackerGoal: 'Establish persistent backdoor access, siphon data, or conduct internal fraud.',
    tacticsUsed: [
      'Silent inbox forwarding rules created to monitor financial threads without detection',
      'Internal spear-phishing using the victim’s legitimate email account to compromise colleagues',
      'Data exfiltration, ransomware staging, or unauthorized fraudulent wire transfers'
    ],
    victimImpact: 'Severe organizational data breach, compliance penalties, loss of funds, and reputational damage.',
    defensiveAction: 'Immediately alert security operations (SOC). Revoke all active session tokens and reset passwords.'
  }
];

export const RED_FLAGS: RedFlagItem[] = [
  {
    id: 'sender',
    title: 'Suspicious Sender Address',
    category: 'IDENTITY',
    severity: 'critical',
    weight: 20,
    description: 'The display name claims to be a trusted authority, but the actual email domain is misspelled, spoofed, or hosted on free public mail services.',
    attackerTactic: 'Typosquatting (e.g., support@micros0ft-support.com instead of microsoft.com) or deceptive display names masking random domains.',
    realWorldExample: '"PayPal Security" <service-alert@notify-secure-billing-x92.com>',
    howToDetect: 'Always look past the friendly display name and examine the full email address following the "@" symbol.'
  },
  {
    id: 'urgency',
    title: 'Urgent or Threatening Language',
    category: 'PSYCHOLOGY',
    severity: 'critical',
    weight: 15,
    description: 'Artificial deadlines claiming an account will be terminated, legal action will be taken, or penalties applied within 15-30 minutes.',
    attackerTactic: 'Inducing panic or adrenaline rush to suppress normal analytical verification protocols.',
    realWorldExample: '"FINAL WARNING: Your mailbox will be deleted in 30 minutes due to storage exhaustion."',
    howToDetect: 'Legitimate organizations rarely impose immediate catastrophic deadlines via email without prior notice.'
  },
  {
    id: 'attachments',
    title: 'Unexpected Attachments',
    category: 'PAYLOAD',
    severity: 'high',
    weight: 15,
    description: 'Unsolicited invoices, receipts, payment notices, or resumes containing compressed archives or executable extensions.',
    attackerTactic: 'Hiding malware inside .zip, .iso, .html, .vbs, or password-protected archives to bypass basic gateway filters.',
    realWorldExample: 'invoice_overdue_4992.pdf.exe or encrypted archive with password in the email body.',
    howToDetect: 'Check the real file extension. Verify with the alleged sender via telephone or Slack before opening.'
  },
  {
    id: 'links',
    title: 'Suspicious Links & Mismatched URLs',
    category: 'DESTINATION',
    severity: 'critical',
    weight: 15,
    description: 'The displayed anchor text says one thing (e.g. "www.company.com"), but the underlying destination points to a completely different domain.',
    attackerTactic: 'Using URL shorteners, open redirects, or look-alike domains to obscure the destination.',
    realWorldExample: 'Displayed: https://bank.com/login — Destination: https://bank.com.attacker-domain.xyz/auth',
    howToDetect: 'Hover your cursor over the link before clicking to view the destination URL preview in your status bar.'
  },
  {
    id: 'sensitive-info',
    title: 'Requests for Passwords or Secrets',
    category: 'CREDENTIALS',
    severity: 'critical',
    weight: 15,
    description: 'Direct requests asking you to reply with your password, PIN, Social Security number, or 2FA authentication code.',
    attackerTactic: 'Pretexting as helpdesk support needing "temporary credentials" for routine server maintenance.',
    realWorldExample: '"Please reply with your current password and 6-digit authenticator code to synchronize your account."',
    howToDetect: 'Remember the golden rule: Legitimate IT departments and banks will NEVER ask for your password or MFA code.'
  },
  {
    id: 'branding',
    title: 'Mismatched or Outdated Branding',
    category: 'VISUALS',
    severity: 'medium',
    weight: 5,
    description: 'Pixelated logos, stretched corporate banners, inconsistent color schemes, or obsolete brand templates.',
    attackerTactic: 'Ripping old graphics from web scrapes without attention to modern typography or branding guidelines.',
    realWorldExample: 'Using a 2012 Windows logo for an alleged 2026 Microsoft 365 security notification.',
    howToDetect: 'Compare incoming email logos against official portals you regularly visit.'
  },
  {
    id: 'grammar',
    title: 'Unusual Grammar or Awkward Wording',
    category: 'SYNTAX',
    severity: 'medium',
    weight: 5,
    description: 'Stilted phrasing, awkward honorifics ("Dear Beloved Customer"), or unnatural grammatical structures.',
    attackerTactic: 'Automated machine translations used by non-native cybercrime syndicates.',
    realWorldExample: '"Kindly remit the verification swiftly to prevent your mail access termination."',
    howToDetect: 'Notice robotic cadence, unnecessary capitalizations, and overly formal or awkward phrasing.'
  },
  {
    id: 'bypass-procedures',
    title: 'Requests to Bypass Normal Procedures',
    category: 'COMPLIANCE',
    severity: 'high',
    weight: 5,
    description: 'Asking you to skip the ticketing system, wire funds without secondary approval, or keep a transaction strictly confidential.',
    attackerTactic: 'Executive impersonation demanding confidentiality to prevent internal peer verification.',
    realWorldExample: '"I am in a confidential board meeting. Do not call me or contact accounting; process this gift card purchase immediately."',
    howToDetect: 'Any request demanding you violate established standard operating procedures is an immediate red flag.'
  },
  {
    id: 'unexpected-login',
    title: 'Unexpected Login or Activity Notifications',
    category: 'AUTHENTICATION',
    severity: 'medium',
    weight: 5,
    description: 'Alerts claiming a login from a foreign country or device, urging you to click a button to "secure" your profile.',
    attackerTactic: 'Exploiting fear of being hacked to trick you into entering your real credentials into their fake security form.',
    realWorldExample: '"New sign-in from Moscow, Russia. If this was not you, click here immediately to lock your account."',
    howToDetect: 'Never click the link inside the alert. Open a new browser tab, navigate manually to the portal, and check security logs.'
  }
];

export const EMAIL_HOTSPOTS: EmailHotspot[] = [
  {
    id: 'sender-hotspot',
    label: 'Sender Address',
    element: 'sender',
    warningTitle: 'Deceptive Domain & Generic Address',
    threatDetails: 'The sender claims to be "Security Team", but the domain is "account-verification.example" instead of the genuine organization domain. Attackers register look-alike domains to bypass casual scrutiny.',
    indicator: 'CRITICAL: Unrecognized domain masquerading as internal security.'
  },
  {
    id: 'urgency-hotspot',
    label: 'Urgency & Coercion',
    element: 'urgency',
    warningTitle: 'Artificial 30-Minute Threat Window',
    threatDetails: 'Claiming your account will be permanently suspended within 30 minutes creates extreme cognitive pressure. The goal is to force a panic reaction so you click before analyzing the message.',
    indicator: 'HIGH: Psychological coercion designed to short-circuit analytical thinking.'
  },
  {
    id: 'link-hotspot',
    label: 'Deceptive Call to Action',
    element: 'link',
    warningTitle: 'Credential Harvesting Hyperlink',
    threatDetails: 'The "VERIFY ACCOUNT" button does not route to official company infrastructure. Instead, hovering reveals a fake login portal designed to record your username, password, and MFA token.',
    indicator: 'CRITICAL: Button points to external attacker-controlled harvesting site.'
  },
  {
    id: 'footer-hotspot',
    label: 'Generic Sign-off',
    element: 'footer',
    warningTitle: 'Vague Authority & Missing Context',
    threatDetails: 'No employee name, no company ticketing ID, no verifiable contact telephone number, and generic "IT Automated Dispatch" footer.',
    indicator: 'MEDIUM: Impersonal sign-off avoiding verifiable corporate identification.'
  }
];

export const WEBSITE_ANALYSIS_ITEMS: WebsiteAnalysisItem[] = [
  {
    id: 'ssl-myth',
    title: 'The HTTPS / Padlock Myth',
    isThreat: true,
    explanation: 'A padlock icon / HTTPS only indicates that the connection between your browser and the server is encrypted. It does NOT mean the website is legitimate or trustworthy.',
    technicalDetail: 'Over 85% of phishing websites today obtain free, automated SSL/TLS certificates (e.g. Let\'s Encrypt) to appear trustworthy and bypass browser warnings.'
  },
  {
    id: 'domain-structure',
    title: 'Deceptive Subdomain Stacking',
    isThreat: true,
    explanation: 'The address "secure-login.example-security.test" uses "secure-login" as a misleading subdomain. The real registered domain is "example-security.test".',
    technicalDetail: 'Attackers prefix trusted brand names as subdomains (e.g., login.microsoft.com.attackerdomain.net) to fool users who only glance at the start of the URL.'
  },
  {
    id: 'typosquatting',
    title: 'Look-Alike Character Substitution',
    isThreat: true,
    explanation: 'Attackers frequently replace lowercase "l" with "1" or uppercase "I", or substitute Cyrillic letters (homograph attacks) that appear identical in fonts.',
    technicalDetail: 'IDN homograph attacks trick visual inspection by rendering foreign Unicode characters that look identical to ASCII characters.'
  },
  {
    id: 'unsolicited-form',
    title: 'Unsolicited Credential Form Prompt',
    isThreat: true,
    explanation: 'Landing on a login form directly from an unsolicited message without standard single-sign-on (SSO) or corporate cookie recognition is an immediate hazard indicator.',
    technicalDetail: 'Real enterprise services utilize persistent SSO cookies or identity federation tokens rather than prompting for raw username/passwords without company context.'
  }
];

export const SOCIAL_ENGINEERING_TACTICS: SocialEngineeringTactic[] = [
  {
    id: 'urgency',
    name: 'URGENCY',
    quote: '"Act immediately or your account will be permanently locked."',
    trigger: 'Time Scarcity & Impending Loss',
    psychology: 'Creates artificial adrenaline and panic, forcing victims into rapid impulsive action without time to consult peers or verify headers.',
    attackerPretext: 'Expiring passwords, impending severance notices, immediate tax audits, or cancelled bank accounts.',
    defensiveResponse: 'Deliberately slow down. Legitimate administrative actions always provide reasonable escalation periods.'
  },
  {
    id: 'authority',
    name: 'AUTHORITY',
    quote: '"This is IT Security Compliance. You must comply immediately."',
    trigger: 'Obedience to Perceived Hierarchy',
    psychology: 'Humans are conditioned to follow instructions from superiors, law enforcement, or executive leadership without challenging them.',
    attackerPretext: 'Calling as senior IT administrator, federal tax auditor, CEO, or corporate legal counsel demanding immediate action.',
    defensiveResponse: 'Always verify through an independent secondary channel (call back via the official corporate phonebook).'
  },
  {
    id: 'fear',
    name: 'FEAR',
    quote: '"Your workstation is actively infected with illegal spyware."',
    trigger: 'Perception of Imminent Danger',
    psychology: 'Fear paralyzes analytical reasoning. The victim will do whatever is suggested by the attacker to escape the perceived danger.',
    attackerPretext: 'Fraudulent charges on bank accounts, fake court subpoenas, or terrifying browser popup warnings claiming compromise.',
    defensiveResponse: 'Close the browser window completely. Run local antivirus or contact your official internal help desk.'
  },
  {
    id: 'curiosity',
    name: 'CURIOSITY',
    quote: '"Confidential: Updated 2026 employee salary and bonus schedule."',
    trigger: 'Desire for Forbidden or Exclusive Information',
    psychology: 'Exploits natural human inquisitive instincts, prompting users to open spreadsheets, documents, or links they feel privileged to view.',
    attackerPretext: 'Leaked executive compensation spreadsheets, provocative employee gossip links, or secret company restructuring files.',
    defensiveResponse: 'Never open unsolicited attachments dealing with sensational or confidential gossip topics.'
  },
  {
    id: 'reward',
    name: 'REWARD',
    quote: '"Congratulations! You were selected for a $500 Amazon gift card bonus."',
    trigger: 'Greed & Hope of Unearned Gain',
    psychology: 'Bypasses skepticism by promising an exciting windfall with seemingly minimal effort, requiring only "quick verification".',
    attackerPretext: 'Corporate wellness incentives, raffle rewards, lottery payouts, or uncollected cryptocurrency dividends.',
    defensiveResponse: 'If an offer sounds too good to be true, it is guaranteed to be fraudulent.'
  },
  {
    id: 'impersonation',
    name: 'IMPERSONATION',
    quote: '"Hey, I am on the road and need you to handle this vendor wire transfer."',
    trigger: 'Social Familiarity & Helpfulness',
    psychology: 'Exploits trust by masquerading as a trusted colleague, vendor, client, or executive in a scenario where helping seems normal.',
    attackerPretext: 'Posing as a vendor requesting an updated bank routing number or an executive asking an assistant for gift cards.',
    defensiveResponse: 'Always enforce out-of-band verification (voice confirmation using known phone numbers) for financial requests.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Credential Harvesting: The Fake Microsoft 365 Shared Document',
    category: 'CREDENTIAL PHISHING',
    attackVector: 'Email with embedded hyperlink to fake OneDrive portal',
    whatHappened: 'An employee received an email notifying them that an external client had shared an urgent proposal document via OneDrive. Clicking the link led to a cloned Microsoft login page hosted on a compromised third-party domain.',
    warningSigns: [
      'Sender address was support@external-onedrive-share.cc instead of microsoft.com',
      'The login prompt did not remember the user’s active corporate session',
      'The browser URL bar displayed a strange top-level domain (.cc) despite showing Microsoft logos'
    ],
    lesson: 'Always bookmark your official organization login portal. Never authenticate on an identity provider page reached via an external unsolicited hyperlink.'
  },
  {
    id: 'case-2',
    title: 'Business Email Compromise (BEC): The Executive Wire Transfer',
    category: 'EXECUTIVE IMPERSONATION',
    attackVector: 'Display-name spoofed email to junior finance accountant',
    whatHappened: 'A junior finance employee received an email apparently from the Chief Executive Officer with the subject "Confidential Acquisition — Urgent Wire". The email demanded $45,000 be wired to an escrow account before 5 PM to close an NDA-protected deal.',
    warningSigns: [
      'The email originated from a free webmail account (ceo.company.corp@gmail.com) with the CEO’s real full name',
      'The message explicitly demanded secrecy: "Do not discuss this with anyone in the office yet"',
      'It demanded a complete bypass of standard multi-signature purchase orders'
    ],
    lesson: 'Every financial transfer or bank routing modification requires strict two-person authorization through known, out-of-band communication channels.'
  },
  {
    id: 'case-3',
    title: 'MFA Fatigue Attack & IT Helpdesk Vishing',
    category: 'MFA SOCIAL ENGINEERING',
    attackVector: 'Credential compromise followed by push notification spam and phone call',
    whatHappened: 'After an attacker obtained a user’s password from a third-party leak, they initiated 40 consecutive Duo push notifications at 2:00 AM. Simultaneously, the attacker called the employee posing as IT, claiming: "We are mitigating a cyberattack on your account; please tap Approve on your phone to resolve the alert."',
    warningSigns: [
      'Flooding of unsolicited MFA authentication prompts outside of working hours',
      'Inbound caller claiming to be IT asking the user to accept an MFA challenge',
      'Creating artificial urgency during late-night vulnerable hours'
    ],
    lesson: 'Never approve an MFA challenge you did not personally trigger. Treat repeated unprompted push notifications as an active compromise in progress and alert your SOC.'
  },
  {
    id: 'case-4',
    title: 'Delivery Smishing: The Unpaid Customs Fee',
    category: 'SMS PHISHING (SMISHING)',
    attackVector: 'Automated SMS text message with shortened tracking URL',
    whatHappened: 'A mobile user received an SMS: "USPS Notice: Your parcel #940019 cannot be delivered due to an outstanding $1.85 shipping fee. Update address & pay at: bit.ly/usps-track-99." The victim entered their credit card credentials.',
    warningSigns: [
      'Arrived via SMS from a random 10-digit consumer phone number',
      'Used a generic URL shortener (bit.ly) rather than official usps.com infrastructure',
      'Demanded credit card input for an ambiguous, unexpected shipment'
    ],
    lesson: 'Postal services do not suspend deliveries over micro-fees via SMS. Always enter tracking numbers directly into the carrier’s official web app.'
  }
];

export const DEFENSIVE_CHECKLIST = [
  {
    step: '01',
    title: 'Stop and Inspect Unexpected Messages',
    desc: 'Never reflexively react to sudden urgent communications. Take a breath and evaluate the context.'
  },
  {
    step: '02',
    title: 'Check the Sender Carefully',
    desc: 'Examine the full email address behind the display name. Look out for subtle character substitutions and spoofed domains.'
  },
  {
    step: '03',
    title: 'Hover Over Links Before Clicking',
    desc: 'Inspect the destination URL preview in your browser/email client status bar before opening any hyperlink.'
  },
  {
    step: '04',
    title: 'Verify the Complete Domain Name',
    desc: 'Confirm the root domain matches the authentic company. Remember: HTTPS and lock icons do NOT guarantee legitimacy.'
  },
  {
    step: '05',
    title: 'Never Share Passwords or MFA Codes',
    desc: 'No legitimate organization, security team, or bank will ever ask you for your plaintext password or authentication codes.'
  },
  {
    step: '06',
    title: 'Avoid Opening Unexpected Attachments',
    desc: 'Treat attachments—especially .zip, .iso, .exe, or macro-enabled documents—as hazardous until independently verified.'
  },
  {
    step: '07',
    title: 'Verify via an Independent Channel',
    desc: 'Call the purported sender using a phone number from an official directory or website, never the number listed in the suspicious email.'
  },
  {
    step: '08',
    title: 'Use Phishing-Resistant MFA',
    desc: 'Enable Multi-Factor Authentication everywhere, preferably using hardware security keys (FIDO2/WebAuthn) or authenticator apps over SMS.'
  },
  {
    step: '09',
    title: 'Keep Software & Browsers Updated',
    desc: 'Apply operating system and browser patches immediately to protect against zero-day exploits and malicious drive-by downloads.'
  },
  {
    step: '10',
    title: 'Report Suspected Phishing Immediately',
    desc: 'Use your organization\'s "Report Phish" button or notify the SOC. Early reporting protects colleagues and the entire network.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: 'You receive an unexpected email claiming your account will be disabled in 15 minutes unless you log in through the provided link to confirm your details.',
    channel: 'EMAIL',
    options: [
      'Phishing attack exploiting artificial urgency',
      'Standard corporate security procedure',
      'Automated routine database backup notification',
      'Safe message that should be forwarded to your personal email'
    ],
    correctIndex: 0,
    explanation: 'Legitimate IT systems and cloud services do not impose immediate 15-minute ultimatums to disable accounts. The extreme time pressure is an attacker tactic designed to make you act without thinking.',
    warningSigns: ['Extreme 15-minute urgency', 'Unsolicited login request', 'Threat of account termination'],
    threatVector: 'Credential Phishing via Psychological Urgency'
  },
  {
    id: 2,
    scenario: 'Your CEO or direct supervisor sends an unexpected email from "ceo.corporate@gmail.com" asking you to urgently purchase $500 in Apple gift cards for a confidential client meeting.',
    channel: 'EMAIL / BEC',
    options: [
      'Follow instructions immediately to impress management',
      'Potential social-engineering attack (Business Email Compromise)',
      'A legitimate emergency request since the CEO has higher authority',
      'Reply with your personal credit card information to assist'
    ],
    correctIndex: 1,
    explanation: 'Executive impersonation demanding gift cards or urgent off-procedure purchases is the hallmark of Business Email Compromise (BEC). The sender used a free public webmail address and demanded confidentiality to evade peer review.',
    warningSigns: ['Public Gmail address used for executive business', 'Request for untraceable gift cards', 'Demand for secrecy'],
    threatVector: 'Business Email Compromise (BEC)'
  },
  {
    id: 3,
    scenario: 'You receive an unexpected password-reset notification for an online service you use. Instead of clicking the button in the email, you open a new browser tab and independently visit the official website to review your security settings.',
    channel: 'BEHAVIOR',
    options: [
      'Dangerous behavior that violates terms of service',
      'Safe and commendable verification behavior',
      'A waste of time because the email button is always faster',
      'An action that alerts the attacker to your IP address'
    ],
    correctIndex: 1,
    explanation: 'Navigating directly to an official site via an independent browser tab is textbook defensive security behavior. It guarantees you are interacting with authentic servers rather than a phishing proxy.',
    warningSigns: ['Unsolicited password reset email'],
    threatVector: 'Safe Verification Practice'
  },
  {
    id: 4,
    scenario: 'You receive an SMS from an unknown number: "USPS: Your parcel is on hold due to $1.25 unpaid postage. Update delivery address at: http://usps-track-parcel.xyz/fee".',
    channel: 'SMS / SMISHING',
    options: [
      'Smishing (SMS Phishing) scam stealing payment credentials',
      'Legitimate postal notification requiring payment',
      'Carrier network speed test link',
      'Official postal address confirmation'
    ],
    correctIndex: 0,
    explanation: 'Delivery services do not send text messages with strange non-governmental top-level domains (.xyz) demanding credit card payments for minor fees. This is a common smishing lure.',
    warningSigns: ['Suspicious .xyz domain', 'Unsolicited text message', 'Demanding credit card credentials for a package you may not have ordered'],
    threatVector: 'Smishing / Credit Card Harvesting'
  },
  {
    id: 5,
    scenario: 'A website you visited displays a green padlock icon in the browser address bar. Does this guarantee the website is authentic, safe, and not a phishing site?',
    channel: 'WEB BROWSER',
    options: [
      'Yes, the padlock proves the company identity was verified by government regulators',
      'No, HTTPS only encrypts communication; attackers easily get free SSL certificates for fake websites',
      'Yes, modern browsers block all phishing sites if they use HTTPS',
      'Yes, the padlock means the website cannot harbor malware or steal passwords'
    ],
    correctIndex: 1,
    explanation: 'HTTPS guarantees that data in transit is encrypted between your browser and the remote server. However, attackers regularly obtain free SSL/TLS certificates for their malicious domains. HTTPS does NOT prove the site is legitimate.',
    warningSigns: ['Relying solely on padlock icons without checking the full domain name'],
    threatVector: 'SSL/TLS Misconception'
  },
  {
    id: 6,
    scenario: 'You receive a phone call from someone claiming to be "James from the Corporate IT Service Desk". He asks you to read aloud the 6-digit one-time passkey currently being texted to your mobile phone.',
    channel: 'PHONE / VISHING',
    options: [
      'Read the code immediately so James can finish his IT maintenance',
      'Vishing attack attempting to hijack your Multi-Factor Authentication (MFA)',
      'Standard corporate security procedure for software upgrades',
      'Ask James to text you the code back to verify his identity'
    ],
    correctIndex: 1,
    explanation: 'MFA passcodes are strictly secret single-user authentication tokens. Attackers call victims (vishing) while attempting to log into their accounts to trick them into verbally relaying the 2FA code.',
    warningSigns: ['Unsolicited call from alleged IT staff', 'Direct request for temporary MFA token or SMS code'],
    threatVector: 'Voice Phishing (Vishing) & MFA Interception'
  },
  {
    id: 7,
    scenario: 'An email arrives with an attached file named "Q3_Performance_Bonus_Calculation.xlsx.iso". What is the primary indicator that this is a dangerous file?',
    channel: 'EMAIL ATTACHMENT',
    options: [
      'The file name contains the word Bonus',
      'It has a double extension ending in .iso (a disk image), which can bypass antivirus to execute malware',
      'Excel files cannot be sent over email',
      'The file size is likely too small to contain financial data'
    ],
    correctIndex: 1,
    explanation: 'Attackers use disk image formats (.iso, .vhd) or double extensions to package executable malware, tricking Windows into mounting virtual drives that bypass email gateway security filters.',
    warningSigns: ['Double file extension (.xlsx.iso)', 'Disk image format sent as a spreadsheet', 'Sensational financial lure'],
    threatVector: 'Malware Payload Distribution'
  },
  {
    id: 8,
    scenario: 'You notice that an incoming email from your bank has the sender domain "@secure-chase-online-banking-alerts.com". The official bank website is "chase.com". How should you classify this?',
    channel: 'EMAIL IDENTITY',
    options: [
      'Legitimate secondary notification server used by Chase',
      'Deceptive typosquatting / look-alike domain used in phishing',
      'Safe partner affiliate communication',
      'Internal corporate testing server'
    ],
    correctIndex: 1,
    explanation: 'Attackers register long, convincing-sounding domain names containing authentic brand keywords to fool people who only read the words and do not verify the primary root domain.',
    warningSigns: ['Unrecognized third-party root domain', 'Brand keywords stacked into a deceptive URL'],
    threatVector: 'Domain Spoofing / Look-Alike Phishing'
  },
  {
    id: 9,
    scenario: 'Your phone starts receiving dozens of push notifications from your corporate authenticator app at midnight, asking you to approve logins you did not initiate.',
    channel: 'MFA PUSH',
    options: [
      'Approve one notification so your phone will stop buzzing and you can sleep',
      'An MFA Fatigue / Prompt Bombing attack; deny the requests and notify the SOC',
      'Your phone software is malfunctioning and needs a battery reset',
      'Your company is running an automated midnight database check'
    ],
    correctIndex: 1,
    explanation: 'MFA Fatigue (push bombing) occurs when an attacker with your compromised password floods your phone with authorization prompts hoping you will accidentally or exasperatedly tap Approve.',
    warningSigns: ['Repeated unprompted login push challenges', 'Challenges occurring outside normal working hours'],
    threatVector: 'MFA Fatigue / Push Bombing Attack'
  },
  {
    id: 10,
    scenario: 'You discover a phishing email in your inbox. What is the most responsible, security-conscious action you should take?',
    channel: 'INCIDENT RESPONSE',
    options: [
      'Delete the email and ignore it so you do not waste your time',
      'Forward it to all your colleagues to warn them using their personal emails',
      'Report it using the internal "Report Phish" tool or alert your security/SOC team',
      'Reply to the attacker with an angry message telling them you caught them'
    ],
    correctIndex: 2,
    explanation: 'Reporting the email to your Security Operations Center (SOC) enables security analysts to block the malicious domain across the entire enterprise, inspect gateway logs, and protect other coworkers who may have received the same email.',
    warningSigns: ['Identified phishing communication'],
    threatVector: 'Defensive Incident Reporting'
  }
];
