/**
 * HTTP SERVICE USING AXIOS
 * EASY TO ADPOT IF WE DECIDE TO USE OTHER HTTP CLIENT
 */

import axios from "axios";

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
