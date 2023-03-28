$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        $('#restore').show();
        $('#transform').hide();
        $("title").text('Challenge: the changing tadpole');
        $("h1").text('The Frog');
        $("h1").css("color", "brown");
        $("#p1").html("This is <strong>frog</strong> in its natural habitat");
        $("h2").addClass('frog');
        $('img').attr('src', "https://cdn.britannica.com/72/45872-004-8FBD2FE1/Green-frog.jpg");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Frog");
        $('a').text('Frog');

        $('#p1').addClass('Frog');

        $('a').after('<ul>');
        $('ul').append('<li><a href="https://www.pbs.org/wnet/nature/blog/frog-fact-sheet/">Fact about frog</a></li>');
        $('ul').append('<li><a href="https://www.amnh.org/exhibitions/frogs-a-chorus-of-colors/featured-frog-species">Frog species</a></li>');
        $('ul').append('<li><a href="https://learning-center.homesciencetools.com/article/life-cycle-frog/">Cycle life of frog</a></li>');
    });

    $("#restore").on('click', function() {
        location.reload(true); 
    }); 

});