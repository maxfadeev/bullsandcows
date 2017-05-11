import generatorics from 'generatorics'

const permutations = (digits, size) => {
  let pm = []

  for (let p of generatorics.clone.permutation(digits, size)) {
    if (p[0] !== 0) {
      pm.push(p)
    }
  }

  return pm
}

export default permutations