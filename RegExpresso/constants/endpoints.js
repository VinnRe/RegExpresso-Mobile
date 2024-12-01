const localhost = "http://localhost:3000"

export const endpoints = {
    login: `${localhost}/api/user/login`,
    signup: `${localhost}/api/user/signup`,
    logout: `${localhost}/api/user/logout`,
    updatePassword: `${localhost}/api/user/update/password`,
    fetch: `${localhost}/api/user/fetch`,
    visualizeNFA: `${localhost}/api/parse/visualizeNFA`,
    visualizeDFA: `${localhost}/api/parse/visualizeDFA`,
    tuplesNFA: `${localhost}/api/parse/to5TuplesNFA`,
    tuplesDFA: `${localhost}/api/parse/to5TuplesDFA`,
    fetchRegex: `${localhost}/api/parse/fetchAll`,
    saveRegex: `${localhost}/api/parse/save`,
    deleteRegex: `${localhost}/api/parse/delete/`,
    svgNFA: `${localhost}/api/parse/svgNFA`,
} 