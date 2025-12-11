/*
 * Copyright © [YEAR] Licensor(s)
 * Licensed under the Kya’s Regular License (KRL).
 * You may not use this file except in compliance with the License.
 * A copy of the KRL should be included with this project or available upon request.
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
 

