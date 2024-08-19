// https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1

// Hashing : sha-256 md5
// symmetric encryption : AES
// Asymmentric encryption : RSA , EDDSA , ECDSA

// Encodings
// Bytes are cool but highly unreadable. Imagine telling someone
// Hey, my name is 00101011101010101020
// It’s easier to encode data so it is more human readable . Some common encodings include - 
// Ascii
// Hex
// Base64
// Base58

// 1) Ascii 
function assciitoString(string){
    const arr = [];
    for(let i=0; i<string.length; i++){
        arr.push(string.charCodeAt(i));
    }
    return arr;
}

function assciitoString2(s){
    return ([...s].map(char=>{
        char.charCodeAt(0);
    }))
}

const asccii = "hey";
const result = assciitoString(asccii);
console.log(result);

// Hex
