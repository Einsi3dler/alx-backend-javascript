import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename)
{
    const promise1 = signUpUser(firstName, lastName);
    const promise2 = uploadPhoto(filename);

    const pro =  Promise.allSettled([promise1,promise2])
    .then((results) => {
        return results.map((results) => {
            return {
                status: results.status,
                value: results.value ? results.value: `${results.reason.name}: ${results.reason.message}`
            }
        });
    });

    return pro
}