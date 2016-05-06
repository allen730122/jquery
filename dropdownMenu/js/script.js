$(document).ready(function() {
    //variable where currentAnchor is stored
    var currentSection = 0;
    // hides the slickbox as soon as the DOM is ready
    $('#productselection').hide();
    //下拉式選單隱藏
    // toggles the slickbox on clicking the noted link  
    $('#menu li a').click(function() {       
        
        $('#menu li a').removeClass('active');
        $(this).addClass('active');
        
        var href = $(this).attr('href');
        //hide all submenus
        $('#producttype>div').hide();
        
        //show one particular menu
        $(href).show();
              
        //logic for hiding and showing submenu
        if(currentSection == 0){
            $('#productselection').fadeToggle();
            currentSection = href;
        }else if(currentSection == href){
             $('#productselection').fadeToggle();
             currentSection = 0;    
        }else{
            currentSection = href;
        }
        return false;
    });
});