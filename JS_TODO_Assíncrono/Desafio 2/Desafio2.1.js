var listElement = document.querySelector('#one ul');
var inputElement = document.querySelector('#one input');

function renderRepos(inputValue) {
    axios.get('https://api.github.com/users/' + inputValue + '/repos')
        .then(function (response) {
            var repos = response.data;
            for (const value of repos) {

                var todoElement = document.createElement('li');
                var todoText = document.createTextNode('{ ' + Object.values(value) + ' }\n');

                todoElement.appendChild(todoText);
                listElement.appendChild(todoElement);
            }
        })
        .catch(function (error) {
            console.warn(error);
        });
}

function userName() {
    var inputValue = inputElement.value;
    inputElement.value = '';
    renderRepos(inputValue);

}