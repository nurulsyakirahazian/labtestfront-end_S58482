$(function(){
        
    crossroads.addRoute('', function(){ $(ajax({
        type: "xml|json|script|html",
        url: "https://kerbau.odaje.biz/getstaff.php" ,
        data: {get_param: 'value'} ,
        cache: false,
        success: function(employeeNumber, firstName, lastName, officeCode, extension, email, jobTitle,reportsTo){
            second="<a href='secondpage.html?id="+employeeNumber+"'>"+email+"</a>"
                
            secondpage.html = index.html + "<tr><td>"+second+"</td></tr>";

        },
        error:  function (error) {
            alert("Error, try again!");
        }
    }))})
        
        
    }); 

   


    var link2 = crossroads.addRoute('second/email', function(email) {
        alert("Click on Secondpage success!");

  




});