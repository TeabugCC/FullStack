const {log} = console
export const t1 = function(){
  console.log('this is t1')
}
let t0 = 't0'
export default t0 = '22'
export const t2 = 't2'
let setObj = new Set()
setObj.add(2)
setObj.add(1)
setObj.add({a:'a'})
setObj.add({a:'a'})
const a = {a:'a'}
setObj.add(a)
setObj.add(a)
setObj.add(a)
setObj.add(null)
setObj.add(NaN)
setObj.add(NaN)
setObj.add(undefined)
setObj.add(undefined)
setObj.add(-0)
setObj.add(+0)

log(setObj.size)