import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  try {
    // Define the model to use
    const modelId = 'gemini-2.5-flash';

    // Create a chat session
    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: `Eres "InnovaBot", el asistente virtual de la Academia Innovamas. 
        Tu tono es profesional, motivador y académico, similar al estilo de la academia Aduni pero enfocado en Innovamas.
        
        Información clave de Innovamas:
        - Especialidad: Preparación para UNI, San Marcos (UNMSM) y Callao (UNAC).
        - Ciclos: Anual (fundamentación), Semestral (intensivo), Repaso (full práctica).
        - Modalidades: Presencial y Virtual con plataforma intranet de alta tecnología.
        - Ubicación: Tenemos sedes en Lima Norte y Lima Centro (datos simulados).
        - Filosofía: Exigencia académica y formación humanista.
        
        Responde preguntas sobre costos, inicios de ciclo y métodos de enseñanza de manera breve y persuasiva para que se matriculen.
        Si no sabes un dato específico (como un precio exacto), invita al usuario a contactar por WhatsApp o visitar la sede.`,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Lo siento, no pude procesar tu respuesta en este momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Hubo un error al conectar con el servidor de IA. Por favor, intenta más tarde.";
  }
};