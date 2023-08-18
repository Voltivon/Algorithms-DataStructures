function solution(start, finish) 
{
   let stepsToClimb = finish - start;

   let numBigJumps = Math.floor(stepsToClimb / 3);

   let numSmallJumps = stepsToClimb % 3;

   return numBigJumps + numSmallJumps;
}


console.log(solution(2, 4));