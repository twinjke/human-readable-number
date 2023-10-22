module.exports = function toReadable (number) {
  const numm = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  }

  let arr = Array.from(String(number))
  let result = ``
 
  if (arr.length === 3) {
      result = result + numm[arr[0]] + ' ' + 'hundred'
      arr.shift()
     
      if (arr[0] === '0' && arr[1] === '0') {
          return result
      }
     
      if (arr[0] === '0' && arr[1] !== '0') {
          result = result + ' ' + numm[arr[1]]
          return result
      }
     
  }
 
  if ((arr[0] === '1' && arr.length === 2) || (arr.length === 2 && arr[1] === '0')) {
      result = result + ' ' + numm[(arr[0]) + (arr[1])]
      return result.trim()
  }
 
  if (arr.length === 2) {
      result = result + ' ' + numm[arr[0] + '0']
      arr.shift()
  }
 
  if (arr.length === 1) {
      result = result + ' ' + numm[arr[0]]
      return result.trim()
  }
}
