
function readfile(){
    let p=new Promise(function(resolve){
       resolve(1);
    })
    return p;
}
async function call(){
    let a = await readfile()
    console.log(a+1)
}
call();
