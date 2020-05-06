var listElement = document.querySelector('#one ul');
var inputElement = document.querySelector('#one input');

function renderRepos(inputValue) {
    axios.get('https://api.github.com/users/' + inputValue + '/repos')
        .then(function (response) {
            var loadElement = document.getElementById('load');
            listElement.removeChild(loadElement);
            var repos = response.data;
            for (const value of repos) {

                var todoElement = document.createElement('li');
                var todoText = document.createTextNode('{ ' + Object.values(value) + ' }\n');

                todoElement.appendChild(todoText);
                listElement.appendChild(todoElement);
            }
        })
        .catch(function (error) {
            var loadElement = document.getElementById('load');
            listElement.removeChild(loadElement);
            alert("We didn't find this user ='( ");
            console.warn(error);
        });
}

function userName() {
    var inputValue = inputElement.value;
    inputElement.value = '';

    var todoElement = document.createElement('li');
    var todoText = document.createTextNode('loading...');
    todoElement.setAttribute('id', 'load');

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);

    renderRepos(inputValue);

}