 
 
 function countVowels(sentence){

    sentence = sentence.toLowerCase()

    const vowels = ['a','e','i','o','u'] 

    let vowelCount = 0;

    for (const char of sentence) {
        if(vowels.includes(char)){
            vowelCount++;
        }
        
    }
    return vowelCount;
}

const sentence = 'This is sample sentence.'

console.log('Number of vowels:', countVowels(sentence))