const str = 'abcDefGHiJK'
const res = str.replace(/[A-Z]/g,(match)=>{
    return '_' + match.toLowerCase()
})
console.log(res)
// 'abc_def_g_hi_j_k'
