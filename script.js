//Notes on promises,async,await,callbacks

posts = [
    {title: "post one",about: "This is post one"},
    {title: "post two",about: "This is post two"}
]

//to demonsstrate loading from server
function getPosts(){
            console.log('hi in getPost')
    setTimeout(() =>{
//         console.log('wait')
        mystr = ''
        posts.forEach((post,index) =>{
            mystr += `<li>${post.title}</li>`
        })
        console.log(mystr)
    },2000)
}

function addPosts(postObj){
    console.log('hi wait for addPosts')
    setTimeout(()=>{
      	console.log('hi inside addPosts')
        posts.push(postObj)
        console.log(`added new post to the array\n${posts}`)
    },3000)
}
// getPosts()

//Async await
async function init(){
  await addPosts({title: 'Post Three',body: 'This is post three'})
  getPosts()
}

init()


//Async await with fetch
async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
  
  
}

//Using callbacks
function addPosts(postObj,callback){
    // console.log('hi for adding')
    setTimeout(()=>{
        posts.push(postObj)
        callback()
    },1000)
}
addPosts({title: "post three",about: "This is post three"},getPosts)



//PROMISES
function addPost(postObj){
    return new Promise((resolve,reject) =>{
        // console.log('first hi')
        setTimeout(()=>{
                    // console.log('second hi')
            posts.push(postObj)
            let error = false
            if (!error){
                resolve()
            }else{
                reject()
            }
        },1000)
    })
}

//PROMISES.all
addPost({title: "post three",about: "This is post three"}).then(getPosts).catch(err => console.log(err))


const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve,reject) => setTimeout(resolve, 2000,'Goodbye'))
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json())
Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(value))
