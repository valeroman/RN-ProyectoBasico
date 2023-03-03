import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';
import { sleep } from '../helpers/sleep';
import { Issue } from '../interfaces';

const getIssueInfo = async( issueNumber: number ):Promise<Issue> => {

    await sleep(2);

    const { data } = await githubApi.get<Issue>(`/issues/${ issueNumber }`);
    return data;
}

const getIssueCommets = async(issueNumber: number):Promise<Issue[]> => {

    await sleep(2);

    const { data } = await githubApi.get<Issue[]>(`/issues/${ issueNumber }/comments`);
    return data;

}


export const useIssue = ( issueNumber: number ) => {

    const issueQuery = useQuery(
        ['issue', issueNumber],
        () => getIssueInfo( issueNumber ),
    );

    const commentsQuery = useQuery(
        ['issue', issueNumber, 'comments'],
        () => getIssueCommets( issueQuery.data!.number ),
        // () => getIssueCommets( issueNumber ),
        {
            enabled: issueQuery.data !== undefined,
        }
    );

    return {
        issueQuery,
        commentsQuery
    }
}
