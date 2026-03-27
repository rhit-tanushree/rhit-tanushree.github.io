// GitHub API Reference:
// https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801
//Another site I looked at for more examples (same method though): https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data


fetch("https://api.github.com/users/rhit-tanushree/repos")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = "";
    for (let i = 0; i < data.length; i++) {
        let name = data[i].name;
        let link = data[i].html_url;
        let desc = data[i].description;
 
        result += "<div class='repo-box'>";
        result += "<h3><a href='" + link + "'>" + name + "</a></h3>";
        result += "<p>" + desc + "</p>";
        result += "</div>";
    }
    document.getElementById("my-repos").innerHTML = result;
});
 