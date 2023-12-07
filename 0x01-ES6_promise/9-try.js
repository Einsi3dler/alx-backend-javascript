export default function guardrail(mathFunction)
{
   
    let queue = ['Guardrail was processed']    
    try{
        var res = mathFunction()
        queue.unshift(res)
        return queue
    }catch(error)
    {
        queue.unshift(`Error: ${error.message}`)
        return queue
    }
}