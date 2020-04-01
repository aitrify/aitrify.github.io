
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Đây là đâu và tôi là ai?",
    "body": "Về bản thân: Mình là Thành, kỹ sư ôtô ở Bỉ, 1 vợ, 2 con. Mình đam mê thử thách bản thân. Blog này cũng là một trong nhưng thử thách bản thân mình tự đặt ra: tập viết. Về 𝔸𝕀trify: Blog 𝔸𝕀trify được lập ra ban đầu để lưu trữ các blogs, tutorials, tricks . . . về lập trình AI, nhưng lập ra rồi thì mình lại nghĩ viết về cái mình biết thì mang lại gì cho bản thân, các bạn muốn học cũng có thể học qua các trang chính thống khác. Thế là mình viết về mình, về những thứ mình thích và quan tâm, để hình thành thói quen viết lách, để hiểu được mình hơn. Đơn giản như thế thôi. Mình thích thử thách bản thân nên mình sẽ viết về các thử thách mình tự đặt ra cho bản thân mình. Vừa giữ cho mình hứng khởi để cố gắng từng ngày, vừa là chỗ rút kinh nghiệm, và tổng hợp lại từng bước mình đã trải qua. Thử thách đang có:: Chạy: Qualify cho Boston Marathon - có 2 cách: chạy nhanh hơn hoặc giữ tốc độ hiện tại cho đến khi . . . 80 tuổi&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEADViết: Mỗi tuần viết 2 blogs, publish vào thứ 3 và thứ 7, bắt đầu từ thứ 3 ngày 03/03/2020. =======Blog: là cái này. Mỗi tuần viết ít nhất 1 blog, thế đã, xem có ra gì khôngĂn uống chất lượng hơn: thế nào là chất lượng, thế nào là tốt cho sức khỏe, đảm bảo cho 1 vận động viên không chuyên. Mở rộng network: mình không sống ở Việt Nam nhưng vẫn giữ liên lạc với bạn bè - và mình muốn mở rộng network với nhiều người hơn. Về nội dung blog: Viết thật với bản thân mình quan điểm, kinh nghiệm hay cảm nghĩ, phải thật với mìnhViết có cơ sở dẫn chứng, tính mình hay khái quát hóa, phỏng đoán mà tóm lược như chân lý, cái này phải sửaCuối cùng, phải nhấn mạnh là đây là blog cá nhân, mình viết điều mình muốn viết và chịu trách nhiệm về những gì mình viếtOur Location: Gladioolstraat3800 Sint-TruidenLimburg, BelgiumLoading. . . "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           My Hobbies Profile                              :               Running:                                                                                                                                                                       Thành Tiên                                14 Mar 2020                                                                                                                                                                                                                                                                                                                              Chạy bộ - như mình nghĩ về nó                              :               Chạy bộ là môn thể thao đơn giản nhất, chỉ là đưa chân, và tiến về phía trước. Nó chắc chắn là môn thể thao. . . :                                                                                                                                                                       Thành Tiên                                03 Mar 2020                                                                                                                      All Stories:                                                                                                     My Hobbies Profile              :       Running:                                                                               Thành Tiên                14 Mar 2020                                                                                                                                     Thói quen - làm sao để bắt đầu              :       Thói quen của bạn định hình phần nhiều con người của bạn bới chúng là các hành động được hình thành từ phản ứng của bạn đến môi trường được. . . :                                                                               Thành Tiên                10 Mar 2020                                                                                                                                     Marathon - như tôi nghĩ về nó              :       Marathon không dành cho tất cả mọi người chạy bộ, quá dài, quá mệt và quá khó. Tôi, nặng mông, chân to, ngồi văn phòng, đá bóng thì ít, đá. . . :                                                                               Thành Tiên                07 Mar 2020                                                                                                                                     Chạy bộ - như mình nghĩ về nó              :       Chạy bộ là môn thể thao đơn giản nhất, chỉ là đưa chân, và tiến về phía trước. Nó chắc chắn là môn thể thao lâu đời nhất. Bạn chạy. . . :                                                                               Thành Tiên                03 Mar 2020                                            "
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
    "url": "http://localhost:4000/hobbies_profile/",
    "title": "My Hobbies Profile",
    "body": "2020/03/14 - Running:  Learning: Reading: Creating: Foods and drinks: "
    }, {
    "id": 10,
    "url": "http://localhost:4000/thoi_quen_bat_dau_tu_dau/",
    "title": "Thói quen - làm sao để bắt đầu",
    "body": "2020/03/10 - Thói quen của bạn định hình phần nhiều con người của bạn bới chúng là các hành động được hình thành từ phản ứng của bạn đến môi trường được lặp đi lặp lại cho đến khi bạn thực hiện chúng gần như không cần suy nghĩ. Thói quen tốt sẽ làm con người tốt, và con người tốt sẽ có thói quen tốt và ngược lại. Nhưng làm sao để thiết lập thói quen? Tôi sẽ đưa ra một số nhận định về thực hành mà tôi thực hiện để thiết lập thói quen tốt. Có thể bắt đầu với lý do để thiết lập thói quen, nhưng tốt nhất là vứt nó đi: Bạn muốn thiết lập thói quen tập luyện thể thao, vì bạn muốn giảm cân. Thói quen dậy sớm vì bạn muốn đi làm sớm. Ngay lúc bắt đầu thiết lập các thói quen, bạn chắc chắn phải có lý do nào đó, và bạn nên có lý do nào đấy, tốt nhất là có thể đong đếm uược: bao nhiều kg bạn muốn giảm, muốn đến công ty lúc mấy giờ, … Như thế bạn có thể track được thành quả của mình, để điều chỉnh, để tiếp tục thói quen của mình. Nhưng nếu bạn đạt được kết quả mong muốn rồi thì sao, hoặc bạn tìm ra cách khác như nhịn ăn, lái xe nhanh hơn … bạn vẫn đạt được kết quả đấy mà. Thế nên, tốt nhất là vứt đi cái kết quả mà bạn mong muốn đi. Để thiết lập thói quen, quá trình quan trọng hơn kết quả. Lên kế hoạch cho thói quen và chuẩn bị trước và sau khi thực hiện: Bạn sẽ dễ dàng ghi nhớ thói quen khi gắn nó với routine nhất định. Tốt nhất là đặt ra các câu: “Nếu tôi làm xong …, thì tôi … và tôi …”. Ví dụ như thói quen chạy bộ của tôi, được lên kế hoạch trong google calendar, bởi vì tôi phải chuẩn bị từ hôm trước: quần áo, tất, đồ uống … Bởi vì tôi đã chuẩn bị nên tôi sẽ không để lỡ buổi tập, nếu không kế hoạch, chuẩn bị từ trước tan tành mây khói. Ngay trước khi tập, tôi chuẩn bị cốc nước hay cốc sữa chua mật ong, chờ sẵn, như thế tôi sẽ cố gắng ít ra là hoàn thành bài chạy, rồi thưởng thức phần thưởng mình xứng đáng đạt được. Thực hiện và nói về thói quen bạn đang thiết lập với người gần gũi nhất: Như thế bạn sẽ có người chứng kiến bạn tập, nhắc nhở bạn và học tập từ thói quen của bạn. Mỗi ngày, khi đi chạy, tôi thông báo với cả nhà, chạy về, tôi thông báo hôm nay chạy bao nhiêu, cảm giác thế nào. Mỗi lần làm push-ups hay sit-ups tôi làm trước mặt vợ con, nhờ bọn nhóc giúp đỡ, và hỏi xem làm thế đã được chưa, có đúng không. Thế là thói quen của tôi thành thói quen của cả nhà và chắc chắn là được thiết lập rất nhanh và khó có thể bỏ. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/marathons_as_I_see_it/",
    "title": "Marathon - như tôi nghĩ về nó",
    "body": "2020/03/07 - Marathon không dành cho tất cả mọi người chạy bộ, quá dài, quá mệt và quá khó. Tôi, nặng mông, chân to, ngồi văn phòng, đá bóng thì ít, đá bia thì nhiều, hoàn toàn chẳng phù hợp gì với cự ly 26,2 dặm này cả. Bắt đầu với chạy bộ: Sang châu Âu, ngay tháng đầu, tôi đã đăng ký chạy 10 hay 15km ở Karlsruhe, nói ra thì xấu hổ, tôi dừng lại đi bộ khá nhiều, nhìn trái nhìn phải toàn các cụ 70, 80. Áo của giải chạy đấy, tôi gửi về nhà để cổ vũ cu em thi phổ thông. Bẵng đi vài năm, tôi mới đăng ký tham gia giải chạy 12 hay 11km ở Brugge vào năm 2012, tôi mang cả nhà đi đến đó, chạy rồi nghỉ lại và dạo ở thành phố ngày hôm sau - tham gia lễ hội carnaval thì phải. Chẳng tập luyện gì nhiều, tôi về đích sau chắc 1 giờ 20 phút thì phải. Tôi vẫn giữ áo của giải đến tận bây giờ. Sau đấy khi nhà tôi chuyển đến thành phố mới vào năm 2014, không còn tham gia buổi đá bóng hàng tuần nữa, tôi lại tìm đến với chạy bộ, và lần này là chạy trail giải Cretes de Spa 21km, và tôi thích chạy bộ từ khi bò lên đỉnh dốc ở Spa. Sau đấy thì đều đặn tôi than gia các giải Brussels 20km, Hasselt 15km, hay chạy trong thành phố Sint-Truiden 5-10km. Pace cứ đều đều 6 phut 10 đến 0 giây cho 1 km. Tập luyện thì lúc được lúc không, chủ yếu phục vụ mục đích ấp trứng Pokemon, nhưng tôi bắt đầu thấy tôi thích chạy dài hơn, lâu hơn và khám phá ra nhiều nơi thú vị hơn ở trong thành phố trong quá trình chạy. Vậy tại sao không tham gia một giải marathon. Giải marathon đầu tiên: Tôi đăng ký tham giải Brussels Marathon tháng 10 năm 2017, và tập luyện từ tháng 4, không tham khảo gì chủ yếu là chạy và chạy dài ra. Tôi chạy nhanh hơn được chút xíu và giữ nhịp thở và tốc độ khá tốt. Nhưng tôi gặp phải 2 sai lầm: sai lầm thứ nhất: lần tập dài nhất là 32km và chỉ duy nhất 1 lần vào 2 tuần trước giải, và tôi thấy chân không ổn. Lý do của việc chân hơi đau đến từ sai lầm thứ 2, tôi chạy mãi với đôi giày Kalenji 12 euros suôt cả mùa tập. Không phải tiếc tiền gì, nhưng tôi nghĩ chạy từ chân chứ giày chỉ cần đi được là được, đó là suy nghĩ sai lầm chưa từng thấy. Nhưng tôi vẫn tham gia giải chạy, kết thúc 30km sau 3 tiếng, và bắt đầu cảm thấy đau và lết bộ từ km 28. Y tế mấy lần hỏi tôi có cần trợ giúp không vì gần như tôi không nhấc nổi chân nữa và chẳng sau toàn dốc là dốc. Được bổ sung nho khô và nươc ở km 35, tôiướiưới bắt đầu chạy lại dù rất đau. Tôi kết thúc cuộc đua sau 5g20 phút gì đấy, chỉ trên 6, 7 người nữa và troớc cut-off time vài phút - Ở giải Brussels cut-off time là 5h30 phút. Mệt lả và đau sau chặng đua dài, thâm chị ko tự đi bộ xuống cầu thang trong 1 tuần sau đó. Tổn thương IT band còn theo tôi đến năm trời. Quay lại với chạy bộ quá sớm ở giải Cretes de Spa 35km trail (vẫn với đôi giày cũ) khiến chấn thương càng nặng, tôi không thể chạy quá 2km, đi lại nhiều khi cũng gây đau đớn. Quay lại với marathon: Về Việt Nam chơi vào năm 2019, may mắn tôi chuẩn bị một đôi giày chạy mới (vẫn 12 euros) để thoáng khí và tiện di chuyện, thế là mọi người rủ chạy vài vòng Hồ Tây tôi cũng có đôi giày để đi. Chạy ở Việt Nam rất vui, và cũng rất nóng và dễ mệt. Cứ 5-10km là tôi lại hô các ông bạn nghỉ làm cốc trà đá hay nước dừa. Chạy cũng gặp nhiều bạn cũ, nhiều người cũng chỉ mới tập chạy, nhưng hầu như ai cũng đặt mục tiêu rất cao. Phong trào chạy bộ marathon, hay triathlon ở Việt Nam lên rất cao nữa, tôi gặp nhiều bạn cũ mới, chạy giải đều đều, quan trọng là ai cũng vui vẻ, khỏe mạnh. Và tại sao không, tôi quay lại với chạy bộ, xác định mục tiêu khung luôn: Boston Qualified : coi như 2h45 phút đi. Bắt đầu bằng sub 4 rồi sub 3h30. Tôi bắt đầu tìm hiểu về giày chạy, về bài tập bổ trợ, về chăm sóc các vùng cơ, tham khảo chỉnh form chạy, lên lịch tập luyện. Hiện tại pace rút xuống còn 4 phút 30 cho 10km và 4 phút 50 cho 21km, nhưng quan trọng hơn là tôi hình thành được thói quen chạy đều đặn, mỗi tháng quãng đường chạy đã tăng lên khoảng 230km. Chờ xem khả năng của tôi đến được đâu. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/running_as_I_see_it/",
    "title": "Chạy bộ - như mình nghĩ về nó",
    "body": "2020/03/03 - Chạy bộ là môn thể thao đơn giản nhất, chỉ là đưa chân, và tiến về phía trước. Nó chắc chắn là môn thể thao lâu đời nhất. Bạn chạy trên đường chạy hôm nay chắc cũng không khác mấy so với tổ tiên bạn mấy chục nghìn năm về trước. Với tôi, chạy bộ như một cách về nguồn, là cách để tôi trao đổi với bản thân mình, để tôi hiểu hơn về mình. Với cơ thể: Với các môn thể thao khác, bạn không thể có khả năng trao đổi với cơ thể của bạn như chạy bộ. Mục tiêu chiến thắng, đồng đội, đối thủ, các kỹ, chiến thuật trong các môn thể thao khác làm bạn phần nào disconnect với cơ thể của mình. Với chạy bộ, chỉ có bạn và bước chạy, mỗi bước bạn cảm thận hoàn toàn feedback cơ thể dành cho bạn. Chỉ có bạn và cơ thể parter với nhau trong suốt chặng đường. Bạn hiểu cơ thể mình và đặt niềm tin để hoàn thành quãng chạy. Cơ thể chấp hành và gửi phản hồi cho bạn đều đặn. Động tác lặp đi lặp lại, nhiều khi nhàm chán lại làm bạn trao đổi tốt hơn với cơ thể của mình. Nhiều hơn thế, chạy bộ lặp đi lặp lại trong nhiều ngày, nhiều tháng, nhiều năm, kết nối giữa bạn và cơ thể qua chạy bộ là quá rõ ràng. Mỗi lần bạn xỏ giầy là một lần bạn gặp lại cơ thể bạn với tất cả ý nghĩa của nó: “Hôm nay thấy thế nào, 10km nhé, chạy thôi” Với tinh thần: Có cả trời khác biệt giữa “Tôi mệt” và “Tôi cảm thấy mệt”. Bạn cảm thấy tốt hơn nhiều nếu bạn mệt và cảm thấy vui vẻ sau buổi tập. Nghịch lý là bạn thường “cảm thấy mệt” khi bạn không có mệt mỏi gì về thể chất, vì bạn không làm gì cả. Tinh thần cũng như cơ thể, cần tập luyện. Bạn chỉ tập tuyện tinh thần thông qua khó khăn, thức thách. Chịu đựng và vượt qua khó khăn mới trui rèn bản lĩnh của bạn. Chạy bộ mang đến cho bạn thử thách về thể chất, cũng như tinh thần. Mệt mỏi, buồn chán, cô đơn chẳng phải là điều bạn cảm thấy mỗi khi gặp khó khăn. Chẳng có cái gì gọi là khó khăn nếu bạn tràn đầy sinh lực, nếu bạn thực sự hứng thú, và nếu khó khăn được chia sẻ với người khác. Với chạy bộ, bạn chẳng có những thứ ấy, chỉ có bạn, đôi chân rã rời, quảng đường tẻ ngắt và mục tiêu phải hoàn thành. Bạn rèn luyện tinh thần của mình để không bỏ cuộc, để hoàn thành mục tiêu bằng chính sức của chính bạn, không có giúp đỡ hay trợ giúp. Được thế, thì những thử thách khó khăn trong cuộc sống liệu có mấy khác. Chạy, chạy , chạy mãi rồi bạn sẽ đạt đến cảnh giới hạnh phúc khi chịu đựng hay chịu đựng chính là hạnh phúc vậy. Chạy và thiền: Thật xấu hổ, tôi chẳng biết gì về thiền. Bạn bè, gia đình bao người tham gia các khóa học, và thực hành thiền định và chia sẻ nhiều, nhưng với tôi, thật khó để ngồi nguyên một chỗ, và còn khó hơn để ngồi yên và không suy nghĩ gì cả: tâm tĩnh lặng. Tôi có đọc ở Nhật có phái thiền định bằng hình thức chạy bộ, mỗi ngày chạy cỡ 1 marathon đường núi đến gần với giác ngộ. Tôi không rõ cảm giác giác ngộ là thế nào nhưng cảm giác tuyệt vời nhất về chạy bộ mà tôi có không phải là breaking PR, không phải là về đích, mà là cảm giác khám phá bản thân trong quá trình chạy. Điều tuyệt vời nhất của chạy bộ là mình có thể suy nghĩ về mọi thứ và chẳng suy nghĩ gì trong cùng một lúc. Mình vừa là chính mình mà vừa hòa vào thế giới xung quanh, trong cùng một lúc. "
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