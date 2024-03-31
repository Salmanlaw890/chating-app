import {create} from "zustand"


const useConversationStore = create((set)=>({

    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    
    messages:{},
    setMessages: (messages) => set({messages})

}))

export default useConversationStore








//*in the above we created store named(useConversation) in which null is initial state, (set) is a function which updates the state. it takes (SelectedConversation) as an argument and updates it (by writing "()=> set({}))"
// const [SelectedVConversation, SelectedVConversation] = useState(null) 
// const [messages, setMessages] = useState([]) 


//! this is teh example from zustand website
// import { create } from 'zustand'

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))