const average = (arr) => {
    let sum = 0;
    for(let i=0;i < arr.length;i++){
        // console.log(`arr[${i}]: ${arr[i]}`)
        sum+=arr[i];
        // console.log(`sum: ${sum}`)
    }
    console.log(`Average is: ${Math.round(sum/(arr.length))}`);
    return Math.round(sum/(arr.length));
}

average([1,5,10,20,50])

let scores = [90,98,89,100,100, 86,94]
average(scores)

let scores2 = [40,65,77,82,80,54,73,63,95,49]
average(scores2)