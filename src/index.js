module.exports = function reverse (n) {
if(n<0)
n=n*(-1);
let ff=0;
let kk=n.toString()
/*if(kk.length%2)
{
    for(let i=0;i<kk.length/2;i++)
        {
           ff=kk[i];
           kk[i]=kk[kk.length-1-i] 
           kk[kk.length-1-i]=ff;
        }
}else
{
    for(let i=0;i<(kk.length-1)/2;i++)
    {
        ff=kk[i];
        kk[i]=kk[kk.length-1-i] 
        kk[kk.length-1-i]=ff;       
    }
}
let k=0;
k=+kk;*/
return kk.split('').reverse().join('');
}
