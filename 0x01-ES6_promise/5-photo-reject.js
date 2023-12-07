export default function uploadPhoto(filename)
{
    const errormsg = `${filename} cannot be processed`;
    const errror = new Error(errormsg);

    const promise = Promise.reject(errror);

    return promise;
}