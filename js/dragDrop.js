$(function()
    // Make elements with IDs MoveMe1 - MoveMe19 draggable
        {
            $("#MoveMe1").draggable();
            $("#MoveMe2").draggable();
            $("#MoveMe3").draggable();
            $("#MoveMe4").draggable();
            $("#MoveMe5").draggable();
            $("#MoveMe6").draggable();
            $("#MoveMe7").draggable();
            $("#MoveMe8").draggable();
            $("#MoveMe9").draggable();
            $("#MoveMe10").draggable();
            $("#MoveMe11").draggable();
            $("#MoveMe12").draggable();
            $("#MoveMe13").draggable();
            $("#MoveMe14").draggable();
            $("#MoveMe15").draggable();
            $("#MoveMe16").draggable();
            $("#MoveMe17").draggable();
            $("#MoveMe18").draggable();
            $("#MoveMe19").draggable();
        });
        $(document).ready(function () { 
            // Hide the image when the document is ready
            $("#image").hide(); 
            // Disable the hide button initially
            $("#hide").attr('disabled', true); 
            //When the hide button is clicked
            $("#hide").click(function () { 
                //Hide image
                $("#image").hide(); 
                //Disable the hide button and enable the show button 
                $("#hide").attr('disabled', true); 
                $("#show").attr('disabled', false); 
  
            }); 
            //When the show button is clicked
            $("#show").click(function () { 
                //Show image
                $("#image").show(); 
                //Enable the hide button and disable the show button 
                $("#hide").attr('disabled', false); 
                $("#show").attr('disabled', true); 
            }); 
        }); 