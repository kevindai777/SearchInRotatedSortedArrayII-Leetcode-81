//Objective is the same as 'Search In Rotated Sorted Array', except now with duplicates

let nums = [2,5,6,0,0,1,2], target = 0


//Same solution as the first question, except now we have an extra check statement
//to remove duplicates

let low = 0
let high = nums.length - 1

while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    
    if (nums[mid] == target) {
        return true
    } else if (nums[mid] == nums[high]) {
        high--
    } else if (nums[low] <= nums[mid]) {
        if (target < nums[mid] && target >= nums[low]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    } else {
        if (target > nums[mid] && target <= nums[high]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
}

return false