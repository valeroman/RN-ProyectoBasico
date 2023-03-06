import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { sleep } from "../helpers/sleep";
import { Issue, State } from "../interfaces";

interface Props {
    state?: State;
    labels: string[];
}

const getIssues = async( labels: string[] = [], state?: State ):Promise<Issue[]> => {

    await sleep(2);

    // const params = new URLSearchParams();
    let params = '';

    params = '?page=1&per_page=5';

    if ( state ) {
        // params.append('state', state);
        params = params + `&state=${ state }`;
    } 

    if ( labels.length > 0 ) {
        const labelString = labels.join('&')
        params = params + `&labels=${ labelString }`
    }

    console.log('params=====>', params)

    const { data } = await githubApi.get<Issue[]>(`/issues${ params }` );
    
    return data;
}

export const useIssues = ({ labels, state }: Props) => { 

    const issuesQuery = useQuery(
        ['issues', { state, labels }],
        () => getIssues(labels, state),
    )


    return {
        issuesQuery
    }
}