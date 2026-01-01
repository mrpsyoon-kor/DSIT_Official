
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  comment: string;
  rating: number;
}

export interface RecommendationRequest {
  monoVolume: number;
  colorVolume: number;
  needs: string;
}

export interface GeminiRecommendation {
  modelName: string;
  brand: string;
  reason: string;
  expectedBenefit: string;
}
