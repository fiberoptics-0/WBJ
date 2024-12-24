$("document").ready(function() {
    $.getJSON('data/messages.json',function(data) {
        var messages = data.messages;
        $.each(messages,function(index, message) {
            var h1 = document.createElement('h1');
            h1.innerHTML = message.text;
            $("#messages").append(h1);
        })
    })
})