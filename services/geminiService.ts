
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest, GeminiRecommendation } from "../types";

/**
 * DSIT 스마트 컨설팅 서비스: 사용자의 요구사항을 바탕으로 최적의 복합기 모델을 추천받습니다.
 */
export const getSmartConsulting = async (request: RecommendationRequest): Promise<GeminiRecommendation> => {
  // Always use the required initialization pattern with direct process.env.API_KEY access
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    사무기기 전문가로서 다음 조건에 맞는 최적의 복합기를 추천해줘.
    - 월 흑백 사용량: ${request.monoVolume}매
    - 월 컬러 사용량: ${request.colorVolume}매
    - 추가 요구사항: ${request.needs}

    [필수 권장 사항]
    1. 브랜드는 반드시 '후지필름(Fujifilm)' 또는 '제록스(Xerox)'를 우선적으로 고려해줘.
    2. 추천 모델은 가급적 다음 모델 중에서 사용량에 가장 적합한 것을 골라줘: 
       - Apeos C2561
       - Apeos C2560
       - ApeosPort C2560
    3. 만약 위 모델들이 사용량에 비해 너무 과하거나 부족하다면 후지필름의 다른 Apeos 시리즈를 추천해줘.
    
    왜 이 모델을 추천하는지 상세한 이유와 도입 시 기대 효과를 알려줘.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            modelName: { type: Type.STRING },
            brand: { type: Type.STRING },
            reason: { type: Type.STRING },
            expectedBenefit: { type: Type.STRING }
          },
          required: ["modelName", "brand", "reason", "expectedBenefit"]
        }
      }
    });

    // response.text is a property, not a method; extracting text from response
    const text = response.text || '';
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback recommendation in case of API error
    return {
      modelName: "Apeos C2561",
      brand: "후지필름",
      reason: "시스템 일시 오류로 가장 범용적인 고성능 모델을 추천합니다.",
      expectedBenefit: "DSIT의 전문 상담원이 곧 상세 정보를 안내해 드리겠습니다."
    };
  }
};
