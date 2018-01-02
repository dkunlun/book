function sum(str1, str2) {
    let { str1Arr, str2Arr } = zeroFill(str1, str2)
    let str1t = str1Arr.join(''),
        str2t = str2Arr.join(''),
        res = '',
        nextFill = 0
    for (let i = str1t.length - 1;i >= 0;i--) {
        let next = Number(str1t[i]) + Number(str2t[i]) + nextFill,
            cur = null
        if(next >= 10) {
            cur = ('' + next)[1]
            nextFill = 1
        }else {
            cur = next
            nextFill = 0
        }
        if(i == 0 && cur == 0) {
            res += '1'
        }
        res = cur + res
    }
    return res
}

function zeroFill (str1, str2) {
    let str1Arr = str1.split(''),
        str2Arr = str2.split(''),
        temp = []
    if(str1Arr.length > str2Arr.length) {
        temp.length = str1Arr.length - str2Arr.length
        temp.fill(0)
        str2Arr = temp.concat(str2Arr)
    } else if(str2Arr.length > str1Arr.length) {
        temp.length = str2Arr.length - str1Arr.length
        temp.fill(0)
        str1Arr = temp.concat(str1Arr)
    }
    return {
        str1Arr,
        str2Arr
    }
}

function sum(str1, str2) {
    let res = '',
        next = 0
    str1 = str1.split(''),
    str2 = str2.split('')
    while (str1.length || str2.length || next) {
        next += ~~str1.pop() + ~~str2.pop()
        res = next % 10 + res
        next = next > 9
    }
    return res.replace(/^0+/, '')
}
