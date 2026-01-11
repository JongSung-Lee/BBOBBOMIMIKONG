
import { GoogleGenAI } from "@google/genai";

export const getCreativeIdea = async (topic: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
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
    
    // response.text가 undefined일 경우를 대비해 기본값 설정
    return response.text ?? "함께 만들며 즐거운 시간을 보내세요!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "새로운 창의적 아이디어를 구상 중입니다. 잠시만 기다려주세요!";
  }
};
