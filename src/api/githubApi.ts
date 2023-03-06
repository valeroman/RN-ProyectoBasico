
import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})