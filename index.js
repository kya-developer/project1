/*
initial time: 00:10:16:034(hh:mm:ss:ms)
final time after fixings: 00:13:37:747(hh:mm:ss:ms)
*/

function formatUsername(username){
    const trimmed = username.trim();
    const lowercased = trimmed.toLowerCase();

    if (lowercased === ""){
        return "unknown";
    } else {
        return lowercased.replace(/\s+/g, '_');
    }
}

const name = process.argv[2];
console.log(formatUsername(name));
 