var getUserRepos = function() {
  fetch("https://api.github.com/users/gewalex/repos")
    .then(function(response){
    response.json().then(function(data){
      console.log(data);
    });
  });
};

getUserRepos();
  