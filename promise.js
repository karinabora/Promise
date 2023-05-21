function a(){
    return new Promise((resolve,reject)=>{
    n=false
    if (n){
        resolve("yes")
    }
    else{
        reject("no")
    }
})
}
z=a()

z.then((i)=>console.log(i))
.catch((j)=>console.log(j))
