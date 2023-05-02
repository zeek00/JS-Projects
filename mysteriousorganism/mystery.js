// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}

  // console.log(returnRandBase())
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
// console.log(mockUpStrand())
  
const pAequorFactory = (no,dna)=>{
  return {
    specimenNum: no,
    dna: dna,
    mutate(){
      //Mutates the object dna strand
      const random = Math.floor(Math.random() * 15);
      const baseToModify = returnRandBase();
      const dnaBases = ['A', 'T', 'C', 'G'];
      const arrMinusBaseToModify = dnaBases.filter(letter=>letter !== baseToModify);
      const newBase = Math.floor(Math.random() * 3);
      this.dna[random] === baseToModify ? this.dna[random] = arrMinusBaseToModify[newBase] : this.dna[random] = baseToModify;
      return this.dna;
    },
    compareDNA(pAequor){
      //compares an object instance of the pAequorFactory dna with the current instance dna
      let count = 0;
      console.log(`this is the current obj: ${this.specimenNum} and ${this.dna}`)
      console.log(`this is the passed in dna: ${pAequor.specimenNum} and ${pAequor.dna}`)
      if(this.specimenNum != pAequor.specimenNum && this.dna.length === pAequor.dna.length){
        const condition = this.dna.every((element,index)=> element === pAequor[index]);
        if(condition === false){
          this.dna.forEach((item, index)=>{item == pAequor.dna[index] ? count++ : false})
        }
        count = (count / this.dna.length) * 100
      }
      return `Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${count}% DNA in common`;
    },
    willLikelySurvive(){
      //detect the percentage of survival for pAequors dna
      let count = {};
      for(const item of this.dna){
        count[item] = count[item] ? count[item]+1 : 1;
      }
      console.log(count)
      return  count['C'] == 9 || count['G'] == 9 ? true : false;
      
    },
    complementStrand(){
      const complementedDna= [];
      this.dna.forEach(item =>{
        item === 'A' ? complementedDna.push('T') : false;
        item === 'T' ? complementedDna.push('A') : false;
        item === 'C' ? complementedDna.push('G') : false;
        item === 'G' ? complementedDna.push('C') : false;
      });
      return complementedDna;
    }
  };

};

let i = 0;
const result = [];
do{
  const test = pAequorFactory(i, mockUpStrand())
  if(test.willLikelySurvive() === true){
    result.push(test);
    i++
  } 
}while(i<30);






let obj = pAequorFactory(1, mockUpStrand());
console.log(obj.dna)
console.log(obj.complementStrand())
// 
// console.log(obj.mutate())
// console.log(obj.compareDNA(pAequorFactory(5,mockUpStrand())))
// console.log(obj.willLikelySurvive())

// console.log(result[9].dna)