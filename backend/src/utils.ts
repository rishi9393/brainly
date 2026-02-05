export function random(len: number){
    let option = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ans= "";
    let length = option.length;

    for(let i=0;i<length;i++){  
        ans += option[Math.floor((Math.random() * length))];
    }
    return ans;
}