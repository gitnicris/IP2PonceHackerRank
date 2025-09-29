function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let changes = new Array(n).fill(false);
    let left = 0, right = n - 1;

    // Step 1: Make the string a palindrome
    while (left < right) {
        if (arr[left] !== arr[right]) {
            if (k <= 0) return '-1';
            let maxDigit = arr[left] > arr[right] ? arr[left] : arr[right];
            arr[left] = arr[right] = maxDigit;
            changes[left] = changes[right] = true;
            k--;
        }
        left++;
        right--;
    }

    left = 0; 
    right = n - 1;
    while (left <= right && k > 0) {
        if (left === right) { 
            if (k > 0) arr[left] = '9'; 
        } else {
            if (arr[left] !== '9') {
                if (changes[left] || changes[right]) {
                    arr[left] = arr[right] = '9';
                    k--;
                } else if (k >= 2) {
                    arr[left] = arr[right] = '9';
                    k -= 2;
                }
            }
        }
        left++;
        right--;
    }

    return arr.join('');
}