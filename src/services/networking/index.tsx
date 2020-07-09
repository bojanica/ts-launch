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
                return response.json()
                    .then((data) => reject(data));
            })
            .catch((e) => (e.json()
                .then((error: any) => reject(error))
            ))
    });
};

export default request;
