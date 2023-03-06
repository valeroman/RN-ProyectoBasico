
import axios from 'axios';

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})