$(function() {
            $(#XISubmit).click(function(){

    var XIStudentPhone = document.forms[XIForm][XIStudentPhone].value;

        if (XIStudentPhone==null || XIStudentPhone==) { alert(Please Enter Student Phone no); return false; }
            document.getElementById(XIForm).submit();
            });
