$('#logout').on('click', function() {
    if (confirm('您真的要退出吗?')) {
        $.ajax({
            url: '/logout',
            type: 'post',
            success: function() {
                location.href = '/admin/login.html'
            }
        })
    }
})