import { useMutationGetUser } from "../api/useMutationGetUser"

export default function useLoginHook(){
    const{ mutationGetUser, isPendingMutationGetUser } = useMutationGetUser()

    return {
        mutationGetUser, 
        isPendingMutationGetUser
    }
}