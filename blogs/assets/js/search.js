(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';
      appendString += '<div class="col-md-8 pr-5"><h1>Search result for "'+searchTerm+'"</h1><br>'
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var post = store[results[i].ref];        
        appendString += '<a href="' + post.url + '"><h3>' + post.title+ '</h3></a>';
        appendString +=   "<p>" + post.content.substring(0, 200) + " ...</p> <hr>";
        //appendString += '<div class="row listrecent">{% include postbox.html %}</div>'; move to script maybe
      }
      appendString +=   "</div>";

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found for "'+searchTerm+'"</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-input').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('description');
      this.field('tag');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'description': window.store[key].description,
        'tag': window.store[key].tag,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
