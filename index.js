require('node-fetch');

fetch('http://random.cat/meow')
    .then(res => res.json());