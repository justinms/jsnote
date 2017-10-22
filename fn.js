function print_single(str){
      document.getElementById('elem_print').innerHTML += str + " "
    }
    
    function println_single(str){
      document.getElementById('elem_print').innerHTML += str + "<br>"
    }
    
    function argumentsToArray(ob){
      return Array.prototype.slice.apply(ob)
    }
    
    function print(){
      var arg = argumentsToArray(arguments)
      arg.forEach(print_single)
      print_single("<br>")
    }
    
    function println(){
      var arg = argumentsToArray(arguments)
      arg.forEach(println_single)
      print_single("<br>")
    }
    
