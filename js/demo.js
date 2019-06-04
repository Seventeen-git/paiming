$(function () {

    var arr = [];
    $(".add").on('click',function () {
        var name_val = $(".name_input input").val();
        var score_val = $(".score_input input").val();
        var han = /^[\u4e00-\u9fa5]+$/;
        if (name_val == '') {
            alert("请输入姓名");
            return false;
        };
        if (!han.test(name_val)) {
            alert("请输入正确的姓名")
            return false;
        };
        if (score_val == '') {
            alert("请输入成绩");
            return false;
        };
        if (isNaN(score_val)) {
            alert("请输入正确成绩")
            return false;
        };
        arr.push({name:$(".name_input input").val(),score:$(".score_input input").val()})
        console.log(arr);
        $('.container').append(
            '<div class="rank_list fix">' +
            '<div class="item_name l">'+$(".name_input input").val()+'</div>' +
            '<div class="item_score l">'+$(".score_input input").val()+'</div>' +
            '<div class="item_num r"></div>' +
            '</div>'
        )
    })


    $('.num').on('tap',function () {
        var rank_num = arr;
        $('.container').html('');
        function compare(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            }
        }
        rank_num.sort(compare('score'));
        for(var i=0;i<rank_num.length;i++){
            console.log(rank_num[i])
            $('.container').append(
                '<div class="rank_list fix">' +
                '<div class="item_name l">'+rank_num[i].name+'</div>' +
                '<div class="item_score l">'+rank_num[i].score+'</div>' +
                '<div class="item_num r">'+(i+1)+'</div>' +
                '</div>'
            )
        }
        // console.log(rank_num)
    })





})


