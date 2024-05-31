// Question 13:
// Create a JavaScript function that takes two arrays as input and returns a new array containing only the elements that are present in both arrays (intersection).
// Input:
// [1, 2, 3, 4]
// [2, 4, 6, 8]
// Output:
// [2, 4]

function arr(x , y){
    for(let i = 0; i < x.length; i++)
        {
            // console.log(x[i]);
            for(let j = 0; j < y.length; j++){
                // console.log(y[j]);
                if(x[i] === y[j]){
                    console.log(x[i])
                }
            }
            
        }
        

        
}

 let val = arr([1,2,3,4],[2,4,6,8]);
 console.log(val);