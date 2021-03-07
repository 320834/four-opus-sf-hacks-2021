export let BASE_URI = 
    process.env.REACT_APP_STAGE === "dev" ? 
        process.env.REACT_APP_BASE_URI_DEV : 
        process.env.REACT_APP_BASE_URI_PROD 

export default BASE_URI;