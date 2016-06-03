// TODO: keep trying to find a better way to handle config so that it can be overwritten at runtime

const config = {
    backend: {
        contract: 'https://raw.githubusercontent.com/osoco/coupons-poc-contract/develop/coupons.yaml',
        host: 'localhost:5050',
        basePath: '/api'
    }
};

export default config