// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    mutate(){
      let randomBase =  Math.floor(Math.random() * 15);
      this.dna[randomBase] = returnRandBase();
      return this.dna;
    },
    // Simplify
    compareDNA(pAequor){
      let equalBases = 0;
      for(let i = 0; i < pAequor.dna.length; i++){
        if(pAequor.dna[i] === this.dna[i]){
          equalBases++;
        }
      }
      let percentageOfDNA = ((equalBases/pAequor.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageOfDNA}% DNA in common`);
    },
    willLikelySurvive(pAequor){
      let numCG = 0;
      for(let i = 0; i < pAequor.dna.length; i++){
        if(pAequor.dna[i] === 'C' || pAequor.dna[i] === 'G'){
          numCG++;
        }
      }
      let survivalPercentage = ((numCG / pAequor.dna.length) * 100).toFixed(2);
      if(survivalPercentage >= 60){
        return true;
      } else {
        return false;
      }
    }

  }
}

// Generate 30 instances of pAequor, save them in an array.
const genratePAequor = (num) => {
  let pAequorSurvivors = [];
  // Let's change the loop
  for(let i = 1; i <= num; i++){
    let s = 1;
    while(s < 1000){
      let pAequorCandidate = pAequorFactory(i, mockUpStrand());
      if(pAequorCandidate.willLikelySurvive(pAequorCandidate)){
        pAequorSurvivors.push(pAequorCandidate);
        break
      }
      s++;
    }
  }
  return pAequorSurvivors;
}

// console.log(pAequorFactory(2, mockUpStrand()));
let pAequor5 = genratePAequor(30);
//console.log(pAequor30);


