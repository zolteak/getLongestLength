const getLongestLength = (string) => {
    let len = 0;
    let max = 0;
    let flag = 0;
    let mass = [];
    for (let i = 0; i < string.length+1; i++){

        if (len > max){
            max = len;
        }
        if(flag!==0){
            for (let j = 0; j <= i; j++){
                if (string[i] == mass[j]){
                    len = 0;
                    mass.splice(0,mass.length);
                    flag=0;
                }
            }
        }   
        flag++;
        len++;
        mass.push(string[i]);
    }


    let len2 = 0;
    let max2 = 0;
    let flag2 = 0;
    let mass2 = [];

    for (let i = string.length-1; i >= 0; i--){
        if (len2 > max2){
            max2 = len2;
        }       
        if(flag2!==0){
            for (let j = 0; j <= i; j++){
                if (string[i] === mass2[j]){
                    len2 = 0;
                    mass2.splice(0,mass2.length);
                    flag2=0;
                }
            }
        }
        flag2++;
        len2++;
        mass2.push(string[i]);
    }

    if (max > max2) {
        return max;
    }
    else {
        return max2;
    }
};

exports.getLongestLength = getLongestLength;