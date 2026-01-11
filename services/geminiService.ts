
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCreativeIdea = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `미술 재료 판매 회사로서 "${topic}"에 대한 어린이용 DIY 미술 활동 아이디어를 3줄 이내로 추천해줘.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "새로운 아이디어를 준비 중입니다.";
  }
};
