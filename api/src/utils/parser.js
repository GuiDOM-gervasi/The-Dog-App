module.exports = {
    parser : function (arr){

    var split = arr.map((e)=>{
         if(e !== undefined && e !== null){
            return e.split(",")                
         }
    })
    var arr2 = [];
    split.forEach(e=>arr2 = arr2.concat(e)) 
    
    var trim = arr2.map((e)=>{
        if(e !== undefined && e !== null){
        return e.trim()
        }
    })
    
    trim = [...new Set(trim)]
    
    var nulo = trim.findIndex(e=> typeof e !== "string")
    trim.splice(nulo,1)
    return trim
    },

    parserArray: function(array){
        
            let string = "";
            array.forEach(element => {
                return string += `${element.name}, `	
            });
            return string.substring(0, string.length - 2);
        
    },

    filtro: function(arr,value){    
        var a = arr.filter(element=>{
            return element.name.toLowerCase().includes(value.toLowerCase()) || (element.temperament && element.temperament.toLowerCase().includes(value.toLowerCase()))    
        })
         return a
    }

}    