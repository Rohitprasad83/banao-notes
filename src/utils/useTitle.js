import { useEffect } from 'react'

function useTitle(msg) {
    useEffect(() => {
        document.title = `Notes Banao | ${msg}`
    }, [msg])
}
export { useTitle }