export const fetchData = (URL) => {
    const data = fetch(URL).then((response) => response.json())
    return data
}