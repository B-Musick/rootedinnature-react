import classNames from 'classnames';

function Panel({ children, className, ...rest }){
    // Rest are the additional props

    // Use classnames class to combine classes
    const combinedClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);
    return (
        <div {...rest} className={combinedClassNames}>
            {/* Pass in children elements */}
            {children}
        </div>
    )
}

export default Panel;