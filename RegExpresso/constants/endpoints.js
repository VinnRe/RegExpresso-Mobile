const url = "https://reg-expresso-mobile-backend-vercel.vercel.app"

export const endpoints = {
    login: `${url}/api/user/login`,
    signup: `${url}/api/user/signup`,
    logout: `${url}/api/user/logout`,
    updatePassword: `${url}/api/user/update/password`,
    fetch: `${url}/api/user/fetch`,
    visualizeNFA: `${url}/api/parse/visualizeNFA`,
    visualizeDFA: `${url}/api/parse/visualizeDFA`,
    tuplesNFA: `${url}/api/parse/to5TuplesNFA`,
    tuplesDFA: `${url}/api/parse/to5TuplesDFA`,
    fetchRegex: `${url}/api/parse/fetchAll`,
    saveRegex: `${url}/api/parse/save`,
    deleteRegex: `${url}/api/parse/delete/`,
    svgNFA: `${url}/api/parse/svgNFA`,
    svgDFA: `${url}/api/parse/svgDFA`,
} 