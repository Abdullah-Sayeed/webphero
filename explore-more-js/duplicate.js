function removeDuplicate(names){
    const uniqueNames = [];
    const Duplicates = [];
    for(let i = 0; i<names.length;i++){
        const name = names[i];
        
        if(uniqueNames.includes(name)==false){
            uniqueNames.push(name);
        }
        else{
            Duplicates.push(name);
        }
        

    }
    return [uniqueNames,Duplicates];
}

let studentNames = ['rahim','steve','john','mark','jack','thomas','karim','jonny','ranveer','bablu','steve','josef','jim','karim','mark','stefen'];

let separate = removeDuplicate(studentNames);
console.log("Unique Names",separate[0]);
console.log("Duplicate Names",separate[1]);
