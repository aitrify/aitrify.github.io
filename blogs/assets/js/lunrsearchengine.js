
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
    "body": "      Featured:                                                                                                                                                                                                                 The List of My Writings                              :               This list is organized by categories and time and update frequently. There is a dropdown in the menu bar for specific category and almost serve. . . :                                                                                                                                                                       Tien-Thanh                                22 Apr 2020                                                                                                                                                                                                                                                                                                                  The List of My Projects                              :               I will publish one project at the end of the month. In the beginning, I had quite a bunch of previous projects to show so. . . :                                                                                                                                                                       Tien-Thanh                                22 Apr 2020                                                                                                                      All Stories:                                                                                                     COVID-19 - What can we do to help?              :       As I start this blog, COVID-19 is taking over the world, forcing most of us in a situation that we have never experienced before. We live in Belgium and right. . . :                                                                               Tien-Thanh                24 Apr 2020                                                                                                                                     The List of My Writings              :       This list is organized by categories and time and update frequently. There is a dropdown in the menu bar for specific category and almost serve the same objectives. This blog. . . :                                                                               Tien-Thanh                22 Apr 2020                                                                                                                                     The List of My Projects              :       I will publish one project at the end of the month. In the beginning, I had quite a bunch of previous projects to show so there would be the matter. . . :                                                                               Tien-Thanh                22 Apr 2020                                            "
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
    "url": "http://localhost:4000/Covid_19_What_can_we_help/",
    "title": "COVID-19 - What can we do to help?",
    "body": "2020/04/24 - As I start this blog, COVID-19 is taking over the world, forcing most of us in a situation that we have never experienced before. We live in Belgium and right in the most damaged area. For previous month, our life was uprooted just as all of you: working from home, kids staying at home whole day, only go out for shopping once per week, … Thankfully, we are safe, and most of people in the small neighborhood also. Some advantages of this period to me: We allow to go out for running or cycling one per day: alone or with one family member - with respect to the social distancing restriction, which is perfect for my running. Even all the competition is cancelled, I can still practice and focus more on speed work. Moreover, isolation gives me precious time to think about my values, arrange my life, and having quality time with family - at home of course. That is why I open this blog, start writing and get back with my reading, learning further in data science and AI. Before starting all that, one of the question I asked myself is: What can I do to help during this crisis?: As engineer, I want to help with my skills and my free time. You can read a lot of contribution from kids, from DYI person about making medical support parts from 3D printing. People in DIY forum sharing the design of DYI ventilator which you can make from Arduino, Raspberry Pi and wood and 3D printing part. I myself would like nothing more than to assist to solve this problem and help save lifes. But I don’t think home-made devices like above are answer at least in the hospital where I live. They have special protective equiments and don’t have any complain about lack of equiment yet, except the ICU beds. However, personally, I think medical devices and equiments are high standard, and intended for used by professional medical personnel, especially about the ventilator which is designed to maintain human life, without propoer testing and quality check, using improperly home-made devices could lead to fatal result. Other protective masks for regular person for example is different story, our city have plan just roll out today about giving reuseable masks to all the citizens for free. There are also other volunteering activities which I can join, and you too if it is possible, like: helping the seniors with groceries, maintain connection - with respect to social distancing rule they don’t feel isolation or loneliness, . . Other actions like donating to good cause organizations: food bank, COVID-19 research, helping nurses and doctors also help a lot during this period. I will also join some tele-conferences about COVID-19, data analysis to help prediction, finding solution in term of tracking patients, prevent broken social distancing rules … What can robot do and should do for future after COVID-19?: COVID-19 will change the future and for sure it will speed up development and business in robotics. In laboratories:  There will be more and more researches for more and more dangerous virus than COVID-19, therefore laboratory automation is a must. Following in the product from ABB, YuMi mobile collaborative robot:  How about specific robot for pipetting from Andrew Alliance SA: In hospitals:  Tele-presence with Boston Dynamics Spot quadruped robot - why not now? Want to know more, go to their github pdf report  Hospital assistant Moxi  Or Social robot like Mabu - Personal health care companion  My take here: with the current hospital system, there is a long way for fully integration of the robot. As system engineer, I would design a full hospital automation system, where you have camera, sensors, and sound system for tele-presense and mornitor patient situation, and mobile carrier system to take care of logistics, and together with AI, and data analysis for helping the treatment.   In supermarket:   Long overview about Retail robot from BBC On the road, not necessary self-driving car:  Nuro R2 driverless vehicles is already heros during COVID-19 Final thought: It is not eay time for all of us. My thought go to the nurses and doctors in the frontline, and COVID-19 victims and their families. For all of you, stay safe, stay positive, don’t let the virus break your routine, your connection with the world. It is time for your family, for yourselves, to learn new things, make new things. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/the_list_of_my_writings/",
    "title": "The List of My Writings",
    "body": "2020/04/22 - This list is organized by categories and time and update frequently. There is a dropdown in the menu bar for specific category and almost serve the same objectives. This blog is the first of many blogs in my website so I hope there will be long blog for this one. Have fun reading. AI &amp; Data Science: Robotics: Engineering: Personal Thoughts: "
    }, {
    "id": 11,
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