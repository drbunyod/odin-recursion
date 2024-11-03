function fibs(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const seq = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    seq.push(seq[i] + seq[i + 1]);
  }

  return seq;
}

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const seq = fibsRec(n - 1);
  return [...seq, seq[seq.length - 1] + seq[seq.length - 2]];
}

console.log(fibs(8));
console.log(fibsRec(8));
