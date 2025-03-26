function fibs(n) {

    let nums = [0, 1]

    for(let i = 2; i < n; i++) {
        nums.push(nums[i-2] + nums[i-1])
    }

    return nums
}

function fibsRec(n, nums = [0, 1]) {
    if (nums.length >= n) return nums.slice(0, n);

    nums.push(nums[nums.length - 1] + nums[nums.length - 2]);

    return fibsRec(n, nums);  
}

console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)) //[0, 1, 1, 2, 3, 5, 8, 13]

