
export default async function (key, model, systemPrompt, userPrompt) {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
                },
                {
                    role: 'user',
                    content: userPrompt,
                },
            ],
            stream: false
        }),
    });
    const data = await response.json();
    return reformatData(data);
}

const reformatData = (data) => {
    if (data.choices != null) {
        data.response = data.choices[0]?.message?.content
        data.reasoning = data.choices[0]?.message?.reasoning
        data.errorString = null
    }
    else {
        data.response = null
        data.reasoning = null
        data.errorString = `Code ${data.error?.code}: ${data.error?.metadata?.raw ?? data.error?.message}`
    }
    return data
}