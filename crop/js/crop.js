$(document).ready(function() {
    CropImageToSquare(400);
});

function CropImageToSquare(squareSize) {
    $('img.crop').each(function(i, item) {
        $(item).wrap('<div class="container" />');
    });

    $('div.container').each(function(i, item) {
        $(item).css({
            'height': squareSize + 'px',
            'width': squareSize + 'px'
        });
    });

    $('.container img').each(function(i, item) {
        executeToSquare(item, squareSize);
    });
}

function executeToSquare(imageItem, squareSize) {
    var width = $(imageItem).width();
    var height = $(imageItem).height();

    var tmp_width = 0;
    var tmp_height = 0;

    var position_top = 0;
    var position_left = 0;

    if (width == height) {
        tmp_width = squareSize;
        tmp_height = squareSize;

        position_top = parseInt(0 - ((tmp_height - squareSize) / 2), 10);
        position_left = parseInt(0 - ((tmp_width - squareSize) / 2), 10);
    } else if (width > height) {
        tmp_width = parseInt(((width / height) * squareSize), 10);
        tmp_height = squareSize;

        position_top = parseInt(((tmp_height - squareSize) / 2), 10);
        position_left = parseInt(0 - ((tmp_width - squareSize) / 2), 10);
    } else if (height > width) {
        tmp_width = squareSize;
        tmp_height = parseInt(((height / width) * squareSize), 10);

        position_top = parseInt(0 - ((tmp_height - squareSize) / 2), 10);
        position_left = parseInt(((tmp_width - squareSize) / 2), 10);
    }

    $(imageItem).attr('width', tmp_width).attr('height', tmp_height)
        .css({
            left: position_left,
            top: position_top
        });
}