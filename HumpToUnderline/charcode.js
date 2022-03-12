const str = 'abcDefGHiJK'
let res = ''
for(let i=0;i<str.length;i++){
    let char = str[i]
    if(char.charCodeAt()<=90 && char.charCodeAt() >= 65){
        char = '_' + String.fromCharCode(char.charCodeAt() | 32)
    }
    res += char
}
console.log(res)