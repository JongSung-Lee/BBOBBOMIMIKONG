
import { GoogleGenAI } from "@google/genai";

export const getCreativeIdea = async (topic: string) => {
  // 브라우저 환경에서 process.env 접근 시 에러 방지
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
  
  if (!apiKey) {
    console.warn("API Key is missing. AI suggestions will be disabled.");
    return "아이들의 상상력을 자극하는 멋진 미술 활동을 준비해보세요!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `미술 재료 판매 회사로서 "${topic}"에 대한 어린이용 DIY 미술 활동 아이디어를 3줄 이내로 추천해줘.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "새로운 창의적 아이디어를 구상 중입니다. 잠시만 기다려주세요!";
  }
};
