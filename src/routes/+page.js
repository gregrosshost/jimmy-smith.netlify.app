export const load = async ({fetch}) => {

    const fetchDates = async () => {
        const response = await fetch('https://jimmy-smith.gregross.host/api/dates')
        const api = await response.json()
        const data = api.data;
        return data;
    }

    return {
        api: fetchDates(),
    }
}

export const prerender = true;