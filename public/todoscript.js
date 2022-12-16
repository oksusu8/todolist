let day = new Date();
document.getElementById('date').innerHTML = day.getFullYear() + "년 " + parseInt(day.getMonth() + 1) + "월 " + day.getDate() + "일";

$(function(){
    // 체크박스 체크 여부에 따른 동작
    $('input:checkbox').on('click', function(){
        if ($(this).prop('checked')){
            $(this).parent().addClass('selected');
        }
        else {
            $(this).parent().removeClass('selected');
        }
    });

    // 추가 버튼을 누르지 않아도 enter키로도 작동
    $("input").keypress(function(e){
        if(e.keyCode == 13){
            $('#add_btn').click();
        }
    });

});