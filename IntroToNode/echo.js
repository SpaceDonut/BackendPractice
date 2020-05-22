const echo = (text, times) => {
    for(let i=0;i < times; i++){
        if(i === 0){
           console.log(`Will print ${text} ${times} times`)
        }
        console.log(`${i+1}: ${text}`);
    }
}

echo("Hey listen!", 9);
echo("TUNA IS GOOD , WONDERFUL DUWANG ZA WARUDO", 13);