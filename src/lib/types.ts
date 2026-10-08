export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface GeneratedApp {
  id: string;
  type: 'loyalty' | 'appointment' | 'menu' | 'ecommerce' | 'none';
  status: 'generating' | 'ready';
  config: Record<string, any>; // Stores the dynamic state of the generated app
}

export interface Esnaf {
  id: string;
  businessName: string;
  businessType: string;
  ownerName: string;
}
