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

function createPost (post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title:'Post Three', body:'This is post three'}, getPost);
// Here call back function (getPost) fires right after createPost function ,waiting 2 secs

