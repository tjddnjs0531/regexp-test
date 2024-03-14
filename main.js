const str = `
010-1234-5678
nct@dream
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jump over the lazy dog.
abbcccdddd
http://localhost:1234/
`

console.log(str.match(/d{2,}/g))
