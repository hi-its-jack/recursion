function mergeSort(list) {

    if (list.length <= 1) return list
    
    let mid = Math.floor(list.length / 2)
    let left = list.slice(0, mid)
    let right = list.slice(mid)
    let sortLeft = mergeSort(left)
    let sortRight = mergeSort(right)
    return merge(sortLeft, sortRight)
}

function merge(left, right) {

    let list = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            list.push(left.shift())
        } else {
            list.push(right.shift())
        }
    }

    return [...list, ...left, ...right]
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) //[0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])) //[79, 100, 105, 110]