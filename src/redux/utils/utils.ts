export const reverseArr = (input: any[]) => {
    const ret = [];
    for(let i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}
