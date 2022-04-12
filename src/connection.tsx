const API_BASE='https://DADOSMOCADOSTESTE';

const basicFetch = async (endpoint : any) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                title: 'Recomendados',
                items: await basicFetch(`/endpoint`)
            },
            {
                title: 'Lojas',
                items: await basicFetch(`/endpoint`)
            }
        ]
    }
}