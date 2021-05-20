const checkYuGioh = (n)=>{
    let resArr = [];

    if (isNaN(n) || parseInt(n) < 1 ){
        console.log(`invalid Parameter: ${n}`);
        return `invalid Parameter: ${n}`;
    }
    for (let i = 1; i <= n; i++){
        let current_string = [];
        let fstring ="";

        (i % 2 == 0) ? (current_string.push("yu")) : "";
        (i % 3 == 0) ? (current_string.push("gi")) : "";
        (i % 5 == 0) ? (current_string.push("oh")) : "";

        fstring = current_string.join("_");

        (fstring) ? (resArr.push(fstring)) : (resArr.push(i));

        console.log(resArr);
        return resArr

        
    }
}