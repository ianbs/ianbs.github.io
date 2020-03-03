const app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http, $element) {
	$http
		.get("https://api.github.com/users/ianbs/repos")
		.then(function(response) {
			const resp = response.data;
			const div = $("#projects", $element);
			resp.forEach(el => {
				div.append(
					`<a href='${el.html_url}' target='_blank'><div class='github'>
              <p>Nome: ${el.name}</p>
              <p>Owner: ${el.owner.login}</p>
              <p>Description: ${el.description}</p>
              <p>Language: ${el.language}</p>
          </div></a>`
				);
			});
		});
});
