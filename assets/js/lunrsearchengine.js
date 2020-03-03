
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Đây là đâu và tôi là ai?",
    "body": "Về bản thân: Mình là Thành, kỹ sư ôtô ở Bỉ, 1 vợ, 2 con. Mình đam mê thử thách bản thân. Blog này cũng là một trong nhưng thử thách bản thân mình tự đặt ra: tập viết. Về 𝔸𝕀trify: Blog 𝔸𝕀trify được lập ra ban đầu để lưu trữ các blogs, tutorials, tricks . . . về lập trình AI, nhưng lập ra rồi thì mình lại nghĩ viết về cái mình biết thì mang lại gì cho bản thân, các bạn muốn học cũng có thể học qua các trang chính thống khác. Thế là mình viết về mình, về những thứ mình thích và quan tâm, để hình thành thói quen viết lách, để hiểu được mình hơn. Đơn giản như thế thôi. Mình thích thử thách bản thân nên mình sẽ viết về các thử thách mình tự đặt ra cho bản thân mình. Vừa giữ cho mình hứng khởi để cố gắng từng ngày, vừa là chỗ rút kinh nghiệm, và tổng hợp lại từng bước mình đã trải qua. Thử thách đang có:: Chạy: Qualify cho Boston Marathon - có 2 cách: chạy nhanh hơn hoặc giữ tốc độ hiện tại cho đến khi . . . 80 tuổi&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEADViết: Mỗi tuần viết 2 blogs, publish vào thứ 3 và thứ 7, bắt đầu từ thứ 3 ngày 03/03/2020. =======Blog: là cái này. Mỗi tuần viết ít nhất 1 blog, thế đã, xem có ra gì khôngĂn uống chất lượng hơn: thế nào là chất lượng, thế nào là tốt cho sức khỏe, đảm bảo cho 1 vận động viên không chuyên. Mở rộng network: mình không sống ở Việt Nam nhưng vẫn giữ liên lạc với bạn bè - và mình muốn mở rộng network với nhiều người hơn. &gt;&gt;&gt;&gt;&gt;&gt;&gt; 8eb39c7244456119333770b7b333ffaaa7bde24dVề nội dung blog: Viết thật với bản thân mình quan điểm, kinh nghiệm hay cảm nghĩ, phải thật với mìnhViết có cơ sở dẫn chứng, tính mình hay khái quát hóa, phỏng đoán mà tóm lược như chân lý, cái này phải sửaCuối cùng, phải nhấn mạnh là đây là blog cá nhân, mình viết điều mình muốn viết và chịu trách nhiệm về những gì mình viếtOur Location: Gladioolstraat3800 Sint-TruidenLimburg, BelgiumLoading. . . "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Chạy bộ - như mình nghĩ về nó                              :               Chạy bộ là môn thể thao đơn giản nhất, chỉ là đưa chân, và chạy. Nó chắc chắn là môn thể thao lâu đời nhất. . . . :                                                                                                                                                                       Thành Tiên                                03 Mar 2020                                                                                                                      All Stories:                                                                                                     Chạy bộ - như mình nghĩ về nó              :       Chạy bộ là môn thể thao đơn giản nhất, chỉ là đưa chân, và chạy. Nó chắc chắn là môn thể thao lâu đời nhất. Mình chạy hôm nay chắc. . . :                                                                               Thành Tiên                03 Mar 2020                                            "
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
    "url": "http://localhost:4000/author/thanhtien/",
    "title": "Author: thanhtien",
    "body": ""
    }, {
    "id": 8,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 9,
    "url": "http://localhost:4000/running_as_I_see_it/",
    "title": "Chạy bộ - như mình nghĩ về nó",
    "body": "2020/03/03 - Chạy bộ là môn thể thao đơn giản nhất, chỉ là đưa chân, và chạy. Nó chắc chắn là môn thể thao lâu đời nhất. Mình chạy hôm nay chắc cũng không khác mấy khi xét về chuyển động so với tổ tiên mình mấy chục nghìn năm về trước. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}If you want to get really fancy, you can even add syntax highlighting using Rouge.  Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
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