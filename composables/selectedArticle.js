export const useSelectedArticle = () => {
    const selectedArticle = useState("selectedArticle", () => useCookie("selectedArticle"));
    return {selectedArticle}
}