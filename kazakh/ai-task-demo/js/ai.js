const API_KEY = "AIzaSyCEjNymVkR3dhxEa6Bjt9K8QT8fk7gE26g";

async function getAIResponse(message, retries = 3) {
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `
ANSWER IN KAZAKH, but if user writes in other language answer in it.
You are a life coach AI.

Ask user if he wants some tasks and if he accepts give him one.
Rules:
- Give short answers
- Always include 1 practical real-life task
- Be motivating and simple

User: ${message}

No longer than 3 sentences.
Try to help him as you can, support him, believe in him.
Be nice with a user, if he wants some support or is bothered by something take a good care of him.
`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (response.status === 503 && retries > 0) {
            await new Promise(r => setTimeout(r, 1500));
            return getAIResponse(message, retries - 1);
        }
        console.log("FULL RESPONSE:", data);

        if (!response.ok) {
            return "API error: " + (data.error?.message || "unknown error");
        }

        if (!data.candidates || !data.candidates[0]) {
            return "No response from AI.";
        }

        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error(error);
        return "Network error (API unreachable)";
    }
}
