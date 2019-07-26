const fetch = require('node-fetch');

getUsers = () => {
    return new Promise((resolve,reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => resolve(json))
    })
    

};

module.exports = {
    getUsers
};
