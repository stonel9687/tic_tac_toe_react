const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            playerOne: {
                name: '',
                simbolSelected: ''
            },
            playerTwo: {
                name: '',
                simbolSelected: ''
            }
        },
        actions: {
            handleChange: (e) => {
                const store = getStore()
                const player = { ...store[e.target.name], name: e.target.value }
                console.log(player)

                setStore({
                    [e.target.name]: player
                })
            },

            handleSelect: (symbol) => {
                const store = getStore()
                let symbolEdited = undefined
                let symbolEditedTwo = undefined
                if (symbol === 'X') {
                    symbolEdited = { ...store.playerOne, simbolSelected: 'x' }
                    symbolEditedTwo = { ...store.playerTwo, simbolSelected: 'o' }
                } else {
                    symbolEditedTwo = { ...store.playerTwo, simbolSelected: 'x' }
                    symbolEdited = { ...store.playerOne, simbolSelected: 'o' }
                }
                setStore({
                    playerOne: symbolEdited,
                    playerTwo: symbolEditedTwo
                })
            },




        }
    }
}

export default getState