$(function () {
  $.ajax({
    type: 'get',
    url: `${APP.A}/category/querySecondCategoryPaging`,
    data: {
      page: 1,
      pageSize: 10
    },
    success: function (r) {
      var html = template('secondTpl', {
        list: r,
        api: APP.A
      });
      $('#secondBox').html(html);
    }
  })
  $.ajax({
    type: 'get',
    url: `${APP.A}/category/queryTopCategoryPaging`,
    data: {
      page: 1,
      pageSize: 999999999
    },
    success: function (r) {
      var html = template('categoryFirstTpl', r);
      $('#categoryFirstBox').html(html);
    }
  })
  var brandLogo = '';
  // $('#fileUpload').fileupload({
  //   dataType: 'josn',
  //   done: function (e, data) {
  //     brandLogo = data._response.result.picAddr;
  //   }
  // })
  $('#fileUpload').change(() => {
    var fr = new FileReader();
    fr.readAsDataURL(this.files[0]);
    fr.onload = () => {
      $('#imgPreview').attr('src', fr.result);
    }
  }).fileupload({
    dataType: 'josn',
    done: function (e, data) {
      brandLogo = data._response.result.picAddr;
    }
  })
  $('#save').on('click', function () {
    var brandName = $('#brandName').val();
    var categoryId = $('#categoryFirstBox').val();
    var hot = 1;
    $.ajax({
      type: 'post',
      url: `${APP.A}/category/addSecondCategory`,
      data: {
        brandName,
        categoryId,
        brandLogo,
        hot
      },
      success: function (r) {
        if (r.success) {
          location.reload();
        } else {
          alert(r.message);
        }
      }
    })
  })
})