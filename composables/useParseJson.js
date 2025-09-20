export default (jsonString) => {
    if (!jsonString || typeof jsonString !== 'string') {
        return null
    }

    // Remove common AI response prefixes/suffixes
    let cleanedString = jsonString.trim()
    
    // Remove markdown code blocks if present
    cleanedString = cleanedString.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
    
    // Find JSON boundaries
    const openBraces = []
    const closeBraces = []
    
    for (let i = 0; i < cleanedString.length; i++) {
        if (cleanedString[i] === '{') openBraces.push(i)
        if (cleanedString[i] === '}') closeBraces.push(i)
    }
    
    if (openBraces.length === 0 || closeBraces.length === 0) {
        return null
    }
    
    // Try to extract JSON from first { to last }
    const startIndex = openBraces[0]
    const endIndex = closeBraces[closeBraces.length - 1] + 1
    
    const jsonCandidate = cleanedString.substring(startIndex, endIndex)
    
    try {
        const parsed = JSON.parse(jsonCandidate)
        
        // Validate the expected structure
        if (typeof parsed === 'object' && parsed !== null) {
            return parsed
        }
        
        return null
    } catch (e) {
        // If that fails, try the old approach
        const trimmedString = cleanedString.substring(Math.min(
            ...['[', '{'].map(char => {
                const index = cleanedString.indexOf(char)
                return index === -1 ? cleanedString.length : index
            })
        ), Math.max(
            ...[']', '}'].map(char => {
                const index = cleanedString.lastIndexOf(char)
                return index === -1 ? 0 : index + 1
            })
        ))
        
        try {
            return JSON.parse(trimmedString)
        } catch (e) {
            return null
        }
    }
}