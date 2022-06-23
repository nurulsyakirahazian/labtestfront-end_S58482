$(function(){
 

    crossroads.addRoute('', function(){
        query = window.location.search;
        urlParam = new URLSearchParams(query);
        var id = urlParam.get('id');
    }); 


    var link2 = crossroads.addRoute('www/index', function(email) {
        alert("Click on d success!");

        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM getstaff where id = ?', [id], function(tx, results) {
                var len = results.row.length;
                $("#staffnum").val(results.row.item(0).employeeNumber);
                $("#stafflastname").val(results.row.item(0).lastName);
                $("#stafffirstname").val(results.row.item(0).firstName);
                $("#staffextension").val(results.row.item(0).extension);
                $("#staffemail").val(results.row.item(0).email);
                $("#staffofficecode").val(results.row.item(0).officeCode);
                $("#staffreport").val(results.row.item(0).reportsTo);
                $("#staffjobtitle").val(results.row.item(0).jobTitle);
            });
        });

    });




});