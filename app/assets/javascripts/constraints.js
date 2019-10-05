document.addEventListener("turbolinks:load", function() {
// 投稿フォームへ
$(function() {
  var children = $('.children');
  var original = children.html();

  $('.parent').change(function() {
    var val1 = $(this).val();
    children.html(original).find('option').each(function() {
      var val2 = $(this).data('val');
      if (val1 != val2) {
        $(this).not('optgroup,.msg').remove();
      }
    });
    if ($(this).val() === '') {
      children.attr('disabled', 'disabled');
    } else {
      children.removeAttr('disabled');
    }
  });
});

$('#toformbutton').on('click', function(e){
  e.preventDefault();
  if ($.trim($("#selectcategory").val()) === "") {
    alert('全項目入力してください');
    return false;
  }
  var month = $('h2')[0].innerText.replace('年', '').replace('月', '').split(' ')
  location.href = "/years/" + month[0] + "/months/" + month[1] + "/members/" + $('#selectmember').val() + "/categories/" + $('#selectcategory').val() + "/details/" + $('#selectdetail').val()
})
//何も入力していない時押せないようにする。
$('#new_howmuch').submit(function() {
  if ($.trim($("#howmuch_name").val()) === "" || $.trim($("#howmuch_money").val()) === ""|| $.trim($("#howmuch_where").val()) === ""|| $.trim($("#created_at").val()) === "") {
      alert('全項目入力してください');
      return false;
  }
});
// 投稿フォームへ
})