var axios = require('axios');

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserBio(username) {
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getGitHubInfo: function(username) {
    return axios.all([
      getRepos(username),
      getUserBio(username)
    ]).then(function(array) {
      return {
        repos: array[0].data,
        bio: array[1].data
      };
    });
  }
};

module.exports = helpers;
