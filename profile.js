$(document).ready(function () {
   console.log("ready");
     $('.action2').click(function(){
       $(".profile").after(
          `<div class="innerDetails">
                      <div  class="collapse1">
             <h1>Education</h1> 
             <button class="sub2"><i class="fas fa-minus"></i></button>
             </div>
             <h2>Fill Your Details: </h2>
            <p class="note">Note: Click on the the field of education and fill the mandatory requirements</p>
            <div class="tenth">
               <button class="innerarrow"><i class="fas fa-chevron-right"></i></button>
               <h3 class="t10">10TH</h3>
               <button class="innerb1"><i class="fas fa-plus"></i></button>
            </div>
            <div class="twelfth">
               <button class="innerarrow"><i class="fas fa-chevron-right"></i></button>
               <h3 class="t12">12TH</h3>
               <button class="innerb2"><i class="fas fa-plus"></i></button>
            </div>
            <div class="Graduation">
               <button class="innerarrow"><i class="fas fa-chevron-right"></i></button>
               <h3 class="t13">Graduation</h3>
               <button class="innerb3"><i class="fas fa-plus"></i></button>
            </div>
          </div>`
       );
       //collapse button
       $(".sub2").click(function(){
             $(".innerDetails").hide();
             //$(".profile").show();
             //$(".profile").css({"opacity":"100%"}); 
             $(".innerb1").css({"opacity":"100%"});
             $("body").css({"overflow-y":"scroll"});
             $(".container").css({"overflow-y":"scroll"});
             $('button').attr('disabled', false);
             $('.value3').unbind('click', false);
             $(".profile").css({"opacity":"100%"});
          });
       
       
       //Button Visibility under InnerDetails
       $('.value3').bind('click', false);
       $('button').attr('disabled', true);
       $('.innerb1').attr('disabled',false);
       $('.sub2').attr('disabled',false);
       $('.innerb2').attr('disabled',false);
       $('.innerb3').attr('disabled',false);
       $('.innerarrow').attr('disabled',false);
       
       //modified css under innerDetails 
       $(".profile").css({"opacity":"0.2"});
       $(".innerDetails").css({"position":"absolute"});
       
    
       
       
       
       
       
     
       // Inner Button 1 function
      $('.innerb1').click(function(){
        $('.profile').after(`<div class="color1 cont1">
        <div class="el1">
        <div class="collapse2">
        <h1>10th</h1>
        <button class="sub1"><i class="fas fa-minus"></i></button>
        </div>
        <h2 class="innerp1">Enter Your Details:</h2>
        <input type='text' class="i1" placeholder='Enter your School Name'/>
        <input type='text' class="i2" placeholder='Enter Your Total Percentage'/>
       </div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        `);
        $(".picture").css({"justify-content":"center","align-items":"center"});
     //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
        // $(".innerDetails").css({"opacity":"0.4"});
        $(".innerDetails").hide();
      //$(".color1 *").prop('enabled', true);
       $("input").addClass("main2");
       $(".profile").css({"opacity":"0.2"});
        //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
       $(".color1").css({"position":"absolute","background-color":"white","border-radius":"2%","align-items":"center","top":"600px","z-index":"9","padding":"20px 20px 20px 20px"});
      $(".submit1").css({"position":"relative","top":"25px"});
       //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
 $(".main2").css({"position":"relative","width":"450px"});
       
       //$("body").css({"overflow":"hidden"});
       //$(".container").css({"overflow":"hidden"});
      
      //$('.action2').attr('disabled', true);
      $('button').attr('disabled', true);
      $(".submit1").attr('disabled',false);
        $(".sub1").attr('disabled',false);
       $('.value3').bind('click', false);
       $(".cont1").css({"width":"700px","height":"550px"});
       $(".innerp1").css({"font-size":"30px", "font-family": "Poppins , sans-serif"});
      
       //collapse button
       $(".sub1").click(function(){
             $(".color1").hide();
             //$(".profile").show();
             //$(".profile").css({"opacity":"100%"});
             $(".innerDetails").show();
             $(".innerb1").css({"opacity":"100%"});
             $("body").css({"overflow-y":"scroll"});
             $(".container").css({"overflow-y":"scroll"});
             $('button').attr('disabled', false);
             $('.value3').unbind('click', false);
          $(".innerDetails").css({"opacity":"100%"});
          });
        });
       
        // Inner Button 2 function
     $('.innerb2').click(function(){
        $('.profile').after(`<div class="color1 cont1">
        <div class="el1">
        <div  class="collapse2">
             <h1>12th</h1> 
             <button class="sub1"><i class="fas fa-minus"></i></button>
             </div>
        <h2 class="innerp1">Enter Your Details:</h2>
        <input type='text' class="i1" placeholder='Enter your College Name'/>
        <input type='text' class="i2" placeholder='Enter Your Total Percentage'/>
       </div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        `);
      
     //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
      $(".innerDetails").hide();
        //$(".innerDetails").css({"opacity":"0.4"});
      //$(".color1 *").prop('enabled', true);
       $("input").addClass("main2");
       $(".profile").css({"opacity":"0.2"});
        //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
       $(".color1").css({"position":"absolute","background-color":"white","border-radius":"2%","align-items":"center","top":"600px","z-index":"9","padding":"20px 20px 20px 20px"});
      $(".submit1").css({"position":"relative","top":"25px"});
       //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
 $(".main2").css({"position":"relative","width":"450px"});
       
       //$("body").css({"overflow":"hidden"});
       //$(".container").css({"overflow":"hidden"});
      
      //$('.action2').attr('disabled', true);
      $('button').attr('disabled', true);
      //$("this").attr("disabled","true") 
      $(".submit1").attr('disabled',false);
        $(".sub1").attr('disabled',false);
       $('.value3').bind('click', false);
       //$(".cont1").css({"width":"540px","height":"500px"});
       $(".cont1").css({"width":"700px","height":"550px"});
       $(".innerp1").css({"font-size":"30px", "font-family": "Poppins , sans-serif"});
      
       //collapse button
       $(".sub1").click(function(){
             $(".color1").hide();
             $(".innerDetails").show();
             //$(".profile").show();
             //$(".profile").css({"opacity":"100%"});
              //$("this").attr('diabled',false);
             $(".innerb2").css({"opacity":"100%"});
             $("body").css({"overflow-y":"scroll"});
             $(".container").css({"overflow-y":"scroll"});
             $('button').attr('disabled', false);
             $('.value3').unbind('click', false);
          $(".innerDetails").css({"opacity":"100%"});
          });
        }); 
       
        // Inner Button 3 function
     $('.innerb3').click(function(){
        $('.profile').after(`<div class="color1 cont1">
        <div class="el1">
        <div class="collapse2">
        <h1>Graduation</h1>
        <button class="sub1"><i class="fas fa-minus"></i></button>
        </div>
        <h2 class="innerp1">Enter Your Details:</h2>
        <input type='text' class="i1" placeholder='Enter Education Category'/>
        <input type='text' class="i2" placeholder='Enter Your Score'/>
       </div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        `);
      
     //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
        // $(".innerDetails").css({"opacity":"0.4"});
        $(".innerDetails").hide();
      //$(".color1 *").prop('enabled', true);
       $("input").addClass("main2");
       $(".profile").css({"opacity":"0.2"});
        //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
       $(".color1").css({"position":"absolute","background-color":"white","border-radius":"2%","align-items":"center","top":"600px","z-index":"9","padding":"20px 20px 20px 20px"});
      $(".submit1").css({"position":"relative","top":"25px"});
       //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
 $(".main2").css({"position":"relative","width":"450px"});
       
       //$("body").css({"overflow":"hidden"});
       //$(".container").css({"overflow":"hidden"});
      
      $('.action3').attr('disabled', true);
      $('button').attr('disabled', true);
      $(".submit1").attr('disabled',false);
        $(".sub1").attr('disabled',false);
       $('.value3').bind('click', false);
       $(".cont1").css({"width":"700px","height":"550px"});
       $(".innerp1").css({"font-size":"30px", "font-family": "Poppins , sans-serif"});
      
       //collapse button
       $(".sub1").click(function(){
             $(".color1").hide();
             $(".innerDetails").show();
             //$(".profile").show();
             //$(".profile").css({"opacity":"100%"});
        $('.action3').attr('disabled', false);
             $(".innerb3").css({"opacity":"100%"});
             $("body").css({"overflow-y":"scroll"});
             $(".container").css({"overflow-y":"scroll"});
             $('button').attr('disabled', false);
             $('.value3').unbind('click', false);
          $(".innerDetails").css({"opacity":"100%"});
          });
        });
      });
      
   
    $('.action3').click(function(){
        $('.profile').after(`<div class="color2 cont2">
        <div class="el1">
         <div class="collapse2">
        <h1>Skills</h1>
        <button class="sub3"><i class="fas fa-minus"></i></button>
        </div>
        <h2 class="innerp1">Enter Your Details:</h2>
        <input type='text' class="i1" placeholder='Enter your Course Name'/>
        <input type='text' class="i2" placeholder='Enter Your Certificate Credentials'/>
       </div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        `);
      
      $(".innerDetails").hide();
      
     //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
        //$(".innerDetails").css({"opacity":"0.4"});
      //$(".color1 *").prop('enabled', true);
       $("input").addClass("main2");
       $(".profile").css({"opacity":"0.2"});
        //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
       $(".color2").css({"position":"absolute","background-color":"white","border-radius":"2%","align-items":"center","top":"600px","z-index":"9","padding":"20px 20px 20px 20px"});
      $(".submit1").css({"position":"relative","top":"25px"});
       //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
 $(".main2").css({"position":"relative","width":"450px"});
       
       //$("body").css({"overflow":"hidden"});
       //$(".container").css({"overflow":"hidden"});
      
      //$('.action2').attr('disabled', true);
      $('button').attr('disabled', true);
      $('.action2').attr('diabled',true);
      $(".submit1").attr('disabled',false);
        $(".sub3").attr('disabled',false);
       $('.value3').bind('click', false);
       $(".cont2").css({"width":"540px","height":"500px"});
       $(".innerp1").css({"font-size":"30px", "font-family": "Poppins , sans-serif"});
      
       //collapse button
       $(".sub3").click(function(){
             $(".color2").hide();
             //$(".profile").show();
             $(".profile").css({"opacity":"100%"});
        $('.action2').attr('diabled',false);
             $(".innerb2").css({"opacity":"100%"});
             $("body").css({"overflow-y":"scroll"});
             $(".container").css({"overflow-y":"scroll"});
             $('button').attr('disabled', false);
             $('.value3').unbind('click', false);
          $(".innerDetails").css({"opacity":"100%"});
          });
      
     }); 
   
   $('.action4').click(function(){
        $('.profile').after(`<div class="color3 cont3">
        <div class="el1">
         <div class="collapse2">
        <h1>Achievements and Responsibilities</h1>
        <button class="sub4"><i class="fas fa-minus"></i></button>
        </div>
        <h2 class="innerp1">Enter Your Details:</h2>
        <input type='text' class="i1" placeholder='Enter your Course Name'/>
        <input type='text' class="i2" placeholder='Enter Your Certificate Credentials'/>
       </div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        `);
      
      $(".innerDetails").hide();
     $(".color2").hide();
      //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
        //$(".innerDetails").css({"opacity":"0.4"});
      //$(".color1 *").prop('enabled', true);
       $("input").addClass("main2");
       $(".profile").css({"opacity":"0.2"});
        //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
       $(".color3").css({"position":"absolute","background-color":"white","border-radius":"2%","align-items":"center","top":"600px","z-index":"9","padding":"20px 20px 20px 20px"});
      $(".submit1").css({"position":"relative","top":"25px"});
       //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
 $(".main2").css({"position":"relative","width":"450px"});
       
       //$("body").css({"overflow":"hidden"});
       //$(".container").css({"overflow":"hidden"});
      
      //$('.action2').attr('disabled', true);
      $('button').attr('disabled', true);
      $('.action2').attr('diabled',true);
      $(".submit1").attr('disabled',false);
        $(".sub4").attr('disabled',false);
       $('.value3').bind('click', false);
       $(".cont3").css({"width":"540px","height":"500px"});
       $(".innerp1").css({"font-size":"30px", "font-family": "Poppins , sans-serif"});
      
       //collapse button
       $(".sub4").click(function(){
             $(".color3").hide();
             //$(".profile").show();
             $(".profile").css({"opacity":"100%"});
        $('.action2').attr('diabled',false);
             $(".innerb2").css({"opacity":"100%"});
             $("body").css({"overflow-y":"scroll"});
             $(".container").css({"overflow-y":"scroll"});
             $('button').attr('disabled', false);
             $('.value3').unbind('click', false);
          $(".innerDetails").css({"opacity":"100%"});
          });
      
     }); 

     $(".arrow1").on("click",function(){
      //$('.arrow2').attr('disabled', false);
        //$(".innerinfo2").show();
            $(".info2").after(`<div class="innerinfo2">
              <p>why</p>
            </div>`);
            //  $('button').prop('disabled', false);
          //  $(".arrow1").replaceWith(`<button class="innerarrow1"><i class="fas fa-chevron-down"></i></button>`);
          $(`<button class="innerarrow1 f2"><i class="fas fa-chevron-down"></i></button>`).insertBefore(".text1");
          $(".f1").remove();
         $(".innerarrow1").on("click",function(){
            //  $(".innerarrow1").replaceWith(`<button class="arrow1"><i class="fas fa-chevron-right"></i></button>`);
            // $(".innnerarrow1")
            $(".innerinfo2").hide();
            $(".f2").remove();
            $(`<button class="arrow1 f1"><i class="fas fa-chevron-right"></i></button>`).insertAfter(".main");
            // $('button').prop("disabled", false);
          });
         $('.arrow1').on('click', true);   
        $('.arrow1').attr('disabled', false);
        // for(let i = 0; i < 20; i++) {
        //   $('.arrow1' + i).click( function(){
        //     alert('you clicked ' + i);
        //   });
        // }
      })
      
   
   
   
 });