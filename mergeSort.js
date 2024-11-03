function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.trunc((arr.length - 1) / 2);

  const a = mergeSort(arr.slice(0, mid + 1));
  const b = mergeSort(arr.slice(mid + 1, arr.length));

  return merge(a, b);
}

function merge(a, b) {
  let c = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c.push(a[i++]);
    } else {
      c.push(b[j++]);
    }
  }

  return [...c, ...a.slice(i), ...b.slice(j)];
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
