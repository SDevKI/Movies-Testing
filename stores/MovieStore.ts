import { defineStore } from "pinia";

interface Data {
    createdAt:string,
    duration:number,
    id:string,
    language:string,
    poster:string,
    rating:string,
    title:string,
}

export const useMovieStore = defineStore('movieStore', () => {
    //state
    const data = ref<Data[]>([]);


    //function
    const fetchData = async () => {
        try {
            const response = await $fetch<Data[]>('/movies.json')
            data.value = response
            console.log(data.value)
        } catch (err) {
            console.error(err)
        }

    }


    return { fetchData ,data}
})