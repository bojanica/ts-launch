const request: (props: RequestProps) => Promise<object> = ({
    apiEndpoint,
}) => {
    return new Promise((resolve, reject) => {
        fetch(apiEndpoint, { method: 'GET' })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then((data) => resolve(data))
                }
                return reject(response);
            })
            .catch((e) => (reject(e)))
    });
};

export default request;
