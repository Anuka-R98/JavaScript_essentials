const posts = [
    { title:'Post One', body:'This is post one' },
    { title:'Post Two', body:'This is post two' },
];

// Hypothetically dealing with servers, so theres gonna be waiting times
function getPost() {
    setTimeout(() => {
        let outPut ='';

        posts.forEach((post, index) => {
            outPut += `<li>${post.title}</li>`
        });

        document.body.innerHTML = outPut;
    }, 1000); // 1 second
}

function createPost (post) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error : Something went wrong !');
            }
        }, 2000);
    });
}

createPost({title:'Post Three', body:'This is post three'})
.then(getPost)
.catch(err => console.log(err));
// First wait till time out, after that resolve and then only call getPost method
// Set error true to catch error on console


/// Async / Await

async function init() {
    await createPost({title:'Post Three', body:'This is post three'});

    getPost();
}

init();
// Waits till createPost method to be completed before moving to getPost method

// Async / Await with Fetch

async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

/// Promise All
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((reslove, reject) => setTimeout(reslove, 2000, 'GoodBye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
