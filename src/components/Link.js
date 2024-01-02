import className from "classnames";

function Link({to, children, classNames, activeClassName}) {
    // children is text we want to show
    // to is the route 
    // Want to get the navigate function from the NavigateProvider
    const {navigate, currentPath} = useNavigationContext(); // Get entire object we share, to access navigate function

    // For multiple classNames helper
    const classes = className(
        'text-blue-500', 
        classNames, 
        currentPath == to && activeClassName
    );

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey) return;
        event.preventDefault();

        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;