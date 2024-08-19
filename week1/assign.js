// write a function to find an input string that produces a hash starting with 00000;

// proof of work

const crypto = require ('crypto');

function findHashwith0(prefix){
    let input = 0;
    while(true){
        const inputstring = "100xdevs"+input.toString();
        const hash = crypto.createHash('sha256').update(inputstring).digest('hex');

        if(hash.startsWith(prefix)) {
            return {input: inputstring , hash:hash};
        }

        input++;

        }

}

const ans = findHashwith0('00000');
console.log(`ans: ${ans.input}`);
console.log(ans.hash);

// Proof of work (PoW) is a decentralized consensus mechanism that requires network members to expend effort in solving an encryption puzzle. Proof of work is also called mining, in reference to receiving a reward for work done.

// What if I ask you that the input string should start with 100xdevs ? How would the code change?

// input string = "100xdevs"+ input.string();  //prefix+nonce


