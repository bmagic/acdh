import fetch from 'isomorphic-fetch'

function getUser(req) {
    return async dispatch => {
        function onSuccess(user) {
            dispatch({type: "USER", payload: user});
            return user;
        }

        function onError(error) {
            dispatch({type: "ERROR_GENERATED", error});
            return error;
        }

        try {
            if (!!req) {
                const res = await fetch('http://localhost:4000/api/v1/users/profile', {
                    headers: {cookie: req.headers.cookie}
                })
                const json = await res.json()
                return onSuccess(json);
            }
        } catch (error) {
            return onError(error);
        }
    }
}

function logout() {
    return async dispatch => {
        function onSuccess() {

            dispatch({type: "USER", payload: {}});
            return null;
        }

        function onError(error) {
            dispatch({type: "ERROR_GENERATED", error});
            return error;
        }

        try {
            const res = await fetch('http://localhost:4000/api/v1/users/logout', {credentials: 'include'})
            return onSuccess();

        } catch (error) {
            console.log(error)

            return onError(error);
        }
    }
}

export {getUser, logout}