/**
 * @param {number[]} salary
 * @return {number}
 */
let average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    console.log(min)
    console.log(max)
    let others = [];
    let avg;
    for(const no of salary){

        no != min && no != max ? others.push(no) : false
    }
    avg = others.reduce((accumulator, currentValue) => accumulator + currentValue );
    avg/=others.length
    return avg;
    
};

console.log(average([6000,5000,4000,3000,2000,1000]))