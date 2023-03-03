
import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})