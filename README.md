# mistery-organism

There is an organism whose DNA **mutates**, our function will be able to generate _n_ organsms objects that have a +60% probability of survival.

### Here is an example of our object:

```javascript
{
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
```