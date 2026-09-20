export interface LifecycleStage {
  id: string;
  number: string;
  name: string;
  tag: string;
  shortDesc: string;
  attackerGoal: string;
  tacticsUsed: string[];
  victimImpact: string;
  defensiveAction: string;
}

export interface RedFlagItem {
  id: string;
  title: string;
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  weight: number;
  description: string;
  attackerTactic: string;
  realWorldExample: string;
  howToDetect: string;
}

export interface EmailHotspot {
  id: string;
  label: string;
  element: 'sender' | 'urgency' | 'link' | 'footer';
  warningTitle: string;
  threatDetails: string;
  indicator: string;
}

export interface WebsiteAnalysisItem {
  id: string;
  title: string;
  isThreat: boolean;
  explanation: string;
  technicalDetail: string;
}

export interface SocialEngineeringTactic {
  id: string;
  name: string;
  quote: string;
  trigger: string;
  psychology: string;
  attackerPretext: string;
  defensiveResponse: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  whatHappened: string;
  warningSigns: string[];
  lesson: string;
  attackVector: string;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  channel: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  warningSigns: string[];
  threatVector: string;
}
