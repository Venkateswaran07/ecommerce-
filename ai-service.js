/**
 * ShopAI - Real-Time AI Intelligence Service
 * Handles communication with Gemini API or fallback simulation.
 */

class AIService {
    constructor(apiKey = null) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
    }

    setApiKey(key) {
        this.apiKey = key;
    }

    async getRecommendation(userQuery, productCatalog) {
        if (!this.apiKey) {
            console.warn('AIService: No API Key provided. Running in Simulation Mode.');
            return this.simulateDiscovery(userQuery, productCatalog);
        }

        try {
            const prompt = `
                You are ShopAI, an elite ecommerce curator. 
                User Query: "${userQuery}"
                Catalog: ${JSON.stringify(productCatalog.map(p => ({ id: p.id, name: p.name, category: p.category, description: p.description })))}
                
                Task: Return a JSON object with:
                1. "reasoning": A 1-sentence expert insight about the user's need.
                2. "recommendedIds": Array of IDs of the 3 most relevant products.
                3. "scoutPrompt": A short, catchy AI tag for the UI.
            `;

            const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            const data = await response.json();
            const resultText = data.candidates[0].content.parts[0].text;
            // Extract JSON from potential markdown response
            const jsonMatch = resultText.match(/\{.*\}/s);
            return jsonMatch ? JSON.parse(jsonMatch[0]) : this.simulateDiscovery(userQuery, productCatalog);
        } catch (error) {
            console.error('AIService Error:', error);
            return this.simulateDiscovery(userQuery, productCatalog);
        }
    }

    simulateDiscovery(query, catalog) {
        // Advanced local logic for high-quality fallback
        const filtered = catalog.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) || 
            p.category.toLowerCase().includes(query.toLowerCase()) ||
            p.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
        );

        return {
            reasoning: `Based on your interest in "${query}", I've curated items that prioritize performance and smart integration.`,
            recommendedIds: filtered.slice(0, 3).map(p => p.id),
            scoutPrompt: `AI Scout: Optimal matches found for ${query}.`
        };
    }
}

window.shopAI = new AIService();
