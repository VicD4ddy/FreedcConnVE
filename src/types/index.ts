export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  badge?: string;
  badgeColor?: string;
  category: 'individual' | 'grupal' | 'camara' | 'accesorio';
  priceUSD: number;
  originalPriceUSD?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    maxRiders: string;
    range: string;
    batteryLife: string;
    waterproof: 'IP65' | 'IP67' | 'Resistente';
    bluetooth: string;
    hasCamera?: boolean;
    cameraRes?: string;
    musicSharing: boolean;
    fmRadio: boolean;
    noiseCancel: string;
    jogWheel?: boolean;
  };
  boxIncludes: string[];
  helmetTypes: string[];
  bestFor: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMicType?: 'Varilla (Abatible/Jet)' | 'Cable/Velcro (Integral)';
}

export interface QuizState {
  step: number;
  answers: {
    ridingStyle: 'solo' | 'pillion' | 'group' | null;
    needsCamera: boolean | null;
    budget: 'budget' | 'mid' | 'premium' | null;
  };
  recommendedProduct: Product | null;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  deliveryType: 'retiro' | 'envio';
  courier: 'MRW' | 'Zoom' | 'Tealca';
  stateCity: string;
  shippingAddressOrAgency: string;
  paymentMethod: 'Pago Móvil (Bs)' | 'Zelle ($)' | 'Binance Pay (USDT)' | 'Efectivo USD';
  notes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'compatibilidad' | 'resistencia' | 'envios' | 'garantia';
}

export interface ReelStory {
  id: string;
  title: string;
  route: string;
  location: string;
  duration: string;
  description: string;
  modelTested: string;
  repsCount: string;
  likes: string;
  badge: string;
  gradient: string;
}

export interface MoteroReview {
  id: string;
  name: string;
  bike: string;
  city: string;
  model: string;
  rating: number;
  comment: string;
  verified: boolean;
}
