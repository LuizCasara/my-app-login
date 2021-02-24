import getMessage from "../utils/getMessage";
import URL from "../utils/constants"

const url = URL.API;

function signIn(object) {
    return fetch(`https://6035d51e6496b9001749f6b6.mockapi.io/api/v1/signIn`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(object),
    })
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
            throw new Error(getMessage('error.login'));
        });
}

export default {
    signIn,
}