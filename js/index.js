$(document).ready(function() {
    //animating developer text
    var count=0;
    //calling the function
    developer_animation();
    
    //definig the function
    function developer_animation() {
    
        //this the code for animation
    setTimeout ( function() {
    
    count++;
    if(count==1){
        title="D";
    }
    else if(count==2){
        title="De";
    }
    else if(count==3){
        title="Dev";
    }
    else if(count==4){
        title="Deve";
    }
    else if(count==5){
        title="Devel";
    }
    else if(count==6){
        title="Develo";
    }
    else if(count==7){
            title="Develop";
        }
    else if(count==8){
            title="Develope";
        }
    else if(count==9){
            title="Developer";
        }
        if(count!=10){
            $('.title').text(`I'm a ${title}`);
            developer_animation();
        
        }
        else if(count==10){
    
            count=0;
            setTimeout(function(){
    
                //this will performed after 1 sec
                designer_animation();
           },1000);
        }
    
    
    
    },100);
    }


    //animating designer text
    


    function designer_animation(){

        setTimeout(function(){

            count++;
            if(count==1){
                title="D";
            }
            else if(count==2){
                title="De";
            }
            else if(count==3){
                title="Des";
            }
            else if(count==4){
                title="Desi";
            }
            else if(count==5){
                title="Desig";
            }
            else if(count==6){
                title="Design";
            }
            else if(count==7){
                    title="Designe";
                }
            else if(count==8){
                    title="Designer";
                }
            
                
                if(count!=10){
                    $('.title').text(`I'm a ${title}`);
                    designer_animation();
                }
                else if(count==10){
    
                    count=0;
                    setTimeout(function(){
            
                        //this will performed after 1 sec
                        developer_animation();
                    },1000);
                }

                
        },100);
    }
      //adding effects for resume button
      $('.see_resume').mouseenter(function(){
          $(this).css('background-color','rgb(207, 91, 49)');
      })

      $('.see_resume').mouseleave(function(){
          $(this).css('background-color','rgb(238, 139, 103)');
      })
         //performing animation on elements
         animate_title();
         function animate_title(){
             setTimeout(function(){
                
                $(".java_name").animate({ fontSize:"+=30px"},500);
                $(".java_name").animate({ letterSpacing:"+=15px"},1000);

                $(".andr_name").animate({ fontSize:"+=30px"},500);
                $(".andr_name").animate({ letterSpacing:"+=15px"},1000);

                $(".adobe_name").animate({ fontSize:"+=30px"},500);
                $(".adobe_name").animate({ letterSpacing:"+=15px"},1000);
                
                 
                 setTimeout(function(){
                
                    $(".java_name").animate({ fontSize:"-=30px"},500);
                    $(".java_name").animate({ letterSpacing:"-=15px"},1000);
    
                    $(".andr_name").animate({ fontSize:"-=30px"},500);
                    $(".andr_name").animate({ letterSpacing:"-=15px"},1000);
    
                    $(".adobe_name").animate({ fontSize:"-=30px"},500);
                    $(".adobe_name").animate({ letterSpacing:"-=15px"},1000);
                    animate_title();
                },4000);
            },2000);

            }
            $('.project_name').text('WorkRe');
  $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
  //Changing project images while clicking next and prev
  var project_count = 1;
  $('.next').click(function () {
    if (project_count == 4) {
        
      project_count = 0;
    }
    project_count++;
    $('.actual_img').attr('src', './img/project_' + project_count + '.jpeg');
    if (project_count == 1) {
      $('.project_name').text('WorkRe');
      $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
    } else if (project_count == 2) {
      $('.project_name').text('MovieMa');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
      $('.project_content').text('')
    } else if (project_count == 3) {
      $('.project_name').text('Geofence App');
      $('.project_content').text('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
    } else if (project_count == 4) {
      $('.project_name').text('TechUtsav');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

    }

  });

  $('.prev').click(function () {
    if (project_count == 1) {
      project_count = 5;
    }
    project_count--;
    $('.actual_img').attr('src', './img/project_' + project_count + '.jpeg');
    if (project_count == 1) {
      $('.project_name').text('WorkRe');
      $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
    } else if (project_count == 2) {
      $('.project_name').text('MovieMan');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
    } else if (project_count == 3) {
      $('.project_name').text('Geofence App');
      $('.project_content').text('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
    } else if (project_count == 4) {
      $('.project_name').text('TechUtsav');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

    }

})
})
