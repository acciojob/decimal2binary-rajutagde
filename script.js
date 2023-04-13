function threeSum(arr, target) {
  // sort the input array in ascending order
  arr.sort((a, b) => a - b);
  
  const triplets = [];
  
  for (let i = 0; i < arr.length - 2; i++) {
    // check for duplicates
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    
    let j = i + 1;
    let k = arr.length - 1;
    
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      
      if (sum === target) {
        triplets.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        
        // check for duplicates
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
        
        while (j < k && arr[k] === arr[k + 1]) {
          k--;
        }
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  
  return triplets;
}
