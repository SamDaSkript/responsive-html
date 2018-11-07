function refresh()
{
    var textContent = document.getElementById("editor-textarea").value;
    document.getElementById("viewer").srcdoc=textContent;
    
}

function resetArea()
{
    document.getElementById('editor-textarea').value="";
    document.getElementById('viewer').srcdoc="";
}
