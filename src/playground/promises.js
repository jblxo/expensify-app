const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Ondra',
            age: 18
        });
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((data) => {
    console.log('does this run?', data);
}).catch((e) => {
    console.log('error: ', e);
});

console.log('after');