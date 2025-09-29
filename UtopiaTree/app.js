function utopianTree(n) {
    let cnt=0
    for(let i=0;i<=n;i++)
    {
        if (i%2==0){
        cnt+=1
        }
        else{
           cnt*=2
        }
    }
    return(cnt)
}