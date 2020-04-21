
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Đây là đâu và tôi là ai?",
    "body": "About me: I'm Thành. I'm engineer, husband, father, also runner, reader, learner, creator, and writer. This blog is about me as a writer. Our Location: Gladioolstraat3800 Sint-TruidenLimburg, BelgiumLoading. . . "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Blogs",
    "body": "      Featured:                                                                                                                                                                                                           The List of My Writings                              :               This list is organized by categories and time and update frequently. There is a dropdown in the menu bar for specific category and almost serve. . . :                                                                                                                                                                       Tien-Thanh                                22 Apr 2020                                                                                                                                                                                                                                                                                                                  The List of My Projects                              :               I will publish one project at the end of the month. In the beginning, I had quite a bunch of previous projects to show so. . . :                                                                                                                                                                       Tien-Thanh                                22 Apr 2020                                                                                                                      All Stories:                                                                                                     The List of My Writings              :       This list is organized by categories and time and update frequently. There is a dropdown in the menu bar for specific category and almost serve the same objectives. This blog. . . :                                                                               Tien-Thanh                22 Apr 2020                                                                                                                                     The List of My Projects              :       I will publish one project at the end of the month. In the beginning, I had quite a bunch of previous projects to show so there would be the matter. . . :                                                                               Tien-Thanh                22 Apr 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/search/",
    "title": "Archive",
    "body": "  Posts with {{ page. type }} '{{ page. title }}': {% for post in page. posts %}  {% include postbox. html %}{% endfor %}      "
    }, {
    "id": 5,
    "url": "http://localhost:4000/search.json",
    "title": "",
    "body": "[ {% for post in site. posts %}   {% comment %} Determine post URL {% endcomment %}   {% if post. external_url %}    {% assign post_url = post. external_url %}   {% else %}    {% assign post_url = post. url | relative_url %}   {% endif %}  {   “title”  : “{{ post. title | escape }}”,   “category” : “{{ post. category }}”,   “tags”   : “{{ post. tags | join: ‘, ‘ }}”,   “url”   : “{{ post_url}}”,   “date”   : “{{ post. date }}”  } {% unless forloop. last %},{% endunless %} {% endfor %}] "
    }, {
    "id": 6,
    "url": "http://localhost:4000/search",
    "title": "Search",
    "body": ""
    }, {
    "id": 7,
    "url": "http://localhost:4000/author/tien-thanh/",
    "title": "Author: tien-thanh",
    "body": ""
    }, {
    "id": 8,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 9,
    "url": "http://localhost:4000/the_list_of_my_writings/",
    "title": "The List of My Writings",
    "body": "2020/04/22 - This list is organized by categories and time and update frequently. There is a dropdown in the menu bar for specific category and almost serve the same objectives. This blog is the first of many blogs in my website so I hope there will be long blog for this one. Have fun reading. AI &amp; Data Science: Robotics: Engineering: Personal Thoughts: "
    }, {
    "id": 10,
    "url": "http://localhost:4000/the_list_of_my_projects/",
    "title": "The List of My Projects",
    "body": "2020/04/22 - I will publish one project at the end of the month. In the beginning, I had quite a bunch of previous projects to show so there would be the matter of writing, however, when they run out, creating a new one may take quite sometime, but I will keep updating the progress for each month. So stay tuned. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});