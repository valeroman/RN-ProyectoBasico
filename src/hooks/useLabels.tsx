import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { sleep } from "../helpers/sleep";
import { Label } from "../interfaces/label";


 const getLabels = async():Promise<Label[]> => {

    await sleep(2);

    const { data } = await githubApi.get<Label[]>('/labels');
    return data;
  }

export const useLabels = () => {

    // Nota: como la data de los label no cambia mucho, le vamos a decir
    // que la data se mantenga fresca por 1 hora. 

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
            // initialData: [],
            placeholderData: [
                {
                    id: 69105383,
                    node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
                    url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
                    name: "Browser: IE",
                    color: "c7def8",
                    default: false,
                },
                {
                    id: 69105358,
                    node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
                    url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
                    name: "Browser: Safari",
                    color: "c7def8",
                    default: false,
                }
            ]
        }
        // {
        //   refetchOnWindowFocus: false // evita refrescar la data
        // }
    );

    return {
        labelsQuery
    }
}