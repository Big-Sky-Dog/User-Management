$(function () {
  $('#loginBtn').on('click', function () {
    var result = $('#loginForm').serializeToJson();
    if (!$.trim(result.username)) {
      alert('请输入用户名');
      return;
    }
    if (!$.trim(result.password)) {
      alert('请输入密码');
      return;
    }
    $.ajax({
      type: 'post',
      url: `${APP.A}/employee/employeeLogin`,
      data: result,
      success: function (r) {
        if (r.success) {
          location.href = 'user.html';
        } else {
          alert('用户名或密码错误');
        }
      }
    })
  })
})