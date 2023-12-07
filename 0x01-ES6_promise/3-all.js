import { uploadPhoto, createUser} from "./utils"

export default function handleProfileSignup()
{
    const promise1 = uploadPhoto();
    const promise2 = createUser();

    Promise.all([promise1, promise2])
    .then((results)=> {
        let res = results
        let ans = `${res[0].body} ${res[1].firstName} ${results[1].lastName}`
        console.log(ans)
    })
    .catch((error)=> {
        console.error("problem", error)
    });
}
