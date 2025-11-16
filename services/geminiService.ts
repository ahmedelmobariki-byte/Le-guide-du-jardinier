import { GoogleGenAI } from "@google/genai";

// NOTE: La clé API est gérée par l'environnement d'exécution.
// Ne pas la modifier ou l'ajouter manuellement ici.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Obtient des informations de jardinage détaillées pour une plante spécifique.
 * @param plantName Le nom de la plante.
 * @returns Un guide de jardinage structuré en Markdown.
 */
export const getPlantDetails = async (plantName: string): Promise<string> => {
  try {
    const systemInstruction = `
      Vous êtes un expert en jardinage pour débutants. Votre ton est encourageant, simple et très clair.
      Votre mission est de fournir un guide pratique et concis pour la plante spécifiée.
      Structurez votre réponse EXACTEMENT comme suit, en utilisant les emojis indiqués et le format Markdown :

      ### 🌿 Méthode de plantation
      - **Quand :** [Meilleure période pour planter]
      - **Où :** [Type d'exposition au soleil, type de sol]
      - **Comment :** [Instructions simples, étape par étape, pour la plantation en pot ou en pleine terre]

      ### ❤️ Soins et entretien
      - **Arrosage :** [Fréquence et conseils d'arrosage]
      - **Nutrition :** [Faut-il de l'engrais ? Si oui, lequel et quand ?]
      - **Taille / Entretien :** [Conseils spécifiques, ex: tuteurage pour les tomates]

      ### ⚠️ Erreurs à éviter
      - **Erreur 1 :** [Décrivez une erreur commune et comment l'éviter]
      - **Erreur 2 :** [Décrivez une deuxième erreur commune et comment l'éviter]

      Ne rajoutez aucune information ou en-tête supplémentaire. Allez droit au but.
    `;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Guide de jardinage pour : ${plantName}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.4,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API Gemini pour les détails de la plante:", error);
    throw new Error("Impossible d'obtenir les détails pour cette plante. Veuillez réessayer.");
  }
};