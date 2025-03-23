export const catchError=(passedFn)=>
{
    return (req,res,next)=>{
Promise.resolve(passedFn(req,res,next))
.catch(next)
    }
}