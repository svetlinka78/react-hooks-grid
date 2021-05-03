
import useAxios from '../../src/services/useAxioshooks'

export default function useAxiosHook(options,pages)
{
        return useAxios({
            url: 'https://localhost:44322/api/uptl',
            method: 'POST',
            data: {
                pageNumber:pages.pageNumber, 
                pageRows: pages.pageRows,
                checkCount:pages.checkCount
            }
        },
        options
    )
}
