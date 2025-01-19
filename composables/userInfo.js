export const useUserInfo = () => {
    const username = useState("username", () => useCookie("username"));
    const password = useState("password", () => useCookie("password"));
    const isLoggedIn = () => {
        return username.value != null
    }
    return {username, password, isLoggedIn}
}