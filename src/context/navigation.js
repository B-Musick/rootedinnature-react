import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
    // Current path needs a default value when first starts up
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Set up event handler to watch for pop state, just want to call this function
        // once so put empty array within

        const handler = () => {
            setCurrentPath(window.location.pathName);
        }
        // when user navigates between addresses using popstate, it will handle here
        // window.history.pushState({}, '', '/a1')
        window.addEventListener('popstate', handler);

        // If component is going to be removed, want to clean up event
        return ()=>{
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to)=>{
        // Share with other components in application through value prop of provider
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{ currentPath, navigate}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider};
export default NavigationContext;