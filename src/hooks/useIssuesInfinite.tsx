import { useInfiniteQuery } from "@tanstack/react-query"
import { githubApi } from "../api/githubApi";
import { sleep } from "../helpers";
import { Issue, State } from "../interfaces";

interface Props {
    state?: State;
    labels: string[];
    page?: number;
};

interface QueryProps {
    pageParam?: number;
    queryKey: (string | Props)[];
}

const getIssues = async({ pageParam = 1, queryKey }: QueryProps):Promise<Issue[]> => {

    const [,, args] = queryKey;
    const { labels, state } = args as Props;

    await sleep(2);

    let params = '';

    params = `?page=${ pageParam.toString() }&per_page=5`;

    if ( state ) {
        params = params + `&state=${ state }`;
    } 

    if ( labels.length > 0 ) {
        const labelString = labels.join('&')
        params = params + `&labels=${ labelString }`
    }

    const { data } = await githubApi.get<Issue[]>(`/issues${ params }` );
    
    return data;
}

export const useIssuesInfinite = ({ state, labels }: Props) => {


    const issuesQuery = useInfiniteQuery(
        ['issues', 'infinite', { state, labels }],
        (data) => getIssues( data ),
        {
            getNextPageParam: ( lastPage, pages ) => {
                if ( lastPage.length === 0 ) return;

                return pages.length + 1;
            }
        }
    );

    return {
        issuesQuery,
    }
}
