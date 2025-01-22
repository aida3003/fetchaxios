 // GET
 // 
fetch("https://jsonplaceholder.typicode.com/posts")
.then((reponse) =>reponse.json())
.then((donne)=>console.log(donne))
.catch((error)=> console.error(error))

// POST Evoyer des requetes
fetch("https://jsonplaceholder.typicode.com/posts"  , {
    method :"POST" ,
    headers:{
        "content-Typpe":"application/json",
    },
    body:JSON.stringify({
key : 'value'

    })
})

.then((reponse) =>reponse.json())
.then((donne)=>console.log(donne))
.catch((error)=> console.error(error))

 

 
