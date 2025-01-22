

//axios promesse
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// axios metode asynchrone await
 async function getdata() {
    try {
         const  response = await axios.get("https://jsonplaceholder.typicode.com/posts")
         console.log(response.data);
    } catch (error) {
        console.error(error);
    }
 }
 getdata()
 
 //methode post
 axios.post('https://jsonplaceholder.typicode.com/posts') , {
    title: "titre2",
    body:"description de la vopokek"
    
 }
 .then((reponses) => console.log(reponses.data))
 .catch((error) => console.error(error) )

    
 


