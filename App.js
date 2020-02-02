const readline=require('readline')
const fs=require('fs')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
const getName=()=>
{
    return new Promise((resolve,reject)=>
    {
        rl.question('what you want to write today',(name)=>{
            if(name==="")
                {
                    reject("invalid ip")
                }
            else
                {
                    resolve(name)
                }
        })
        
    })
    
}


function main()
{
   
    getName().then((data)=>
                        {
                            
                            var date = new Date();
                            fs.appendFileSync('notesapp.txt',`#${date}-->${data} \n ------- \n`)
                                                        
                            rl.close()
                        })
                        .catch((err)=>
                            {
                                fs.appendFileSync('notesapp.txt'," # # # #EMPTY STRING # # # # ")
                                console.log(err)
                                rl.close()
                            })
}
                                
                                
///call the async main func
main()