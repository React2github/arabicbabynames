
document.getElementById("male").addEventListener("click", displayName);
var boyNames = ['Aalam', 'Abdalah','Abdulkareem', 'Abednego', 'Adnan', 'Akeem']


    function displayName() {
        for (i=0;i < boyNames.length;i++) 
        document.getElementById("boyNames").innerHTML += "<p>" + boyNames[i] + "</p>" ;
    
    }
    
    document.getElementById("female").addEventListener("click", displayName2);
    var girlNames = ['Aaliyah', 'Adila','Aizza', 'Alima', 'Aliyya', 'Altaf']
    
        function displayName2() {
            for (i=0;i < girlNames.length;i++) 
            document.getElementById("girlNames").innerHTML += "<p>" + girlNames[i] + "</p>" ;
        }
    






