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
    }
}    