 $(function()
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
            $("#image").hide(); 
            $("#hide").attr('disabled', true); 
            $("#hide").click(function () { 
                $("#image").hide(); 
                $("#hide").attr('disabled', true); 
                $("#show").attr('disabled', false); 
  
            }); 
            $("#show").click(function () { 
                $("#image").show(); 
                $("#hide").attr('disabled', false); 
                $("#show").attr('disabled', true); 
            }); 
        }); 