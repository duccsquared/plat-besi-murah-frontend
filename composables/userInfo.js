export const useUserInfo = () => {
    const username = useCookie('username');
    const password = useCookie('password');
    const isLoggedIn = () => {
        return username.value != null
    }
    return {username, password, isLoggedIn}
}